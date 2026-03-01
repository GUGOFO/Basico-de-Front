const dropzone = document.getElementById("containerDoInput");
const inputFile = document.getElementById("inputImage");
const textoDropzone = dropzone.querySelector("h2"); 
const btnAnalisar = document.getElementById("btnAnalisar");

const envioSection = document.getElementById("envio");
const disciplinasSection = document.getElementById("diciplinas");
const tituloDisciplinas = document.getElementById("tituloDisciplinas");

const geminiKey = "SUA CHAVE AQUI SEU LINDO"; 
const modelo = "gemini-3-flash-preview";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${geminiKey}`;


dropzone.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    dropzone.style.backgroundColor = "rgba(255, 255, 255, 0.4)"; 
});

dropzone.addEventListener("dragleave", () => {
    dropzone.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 
});

dropzone.addEventListener("drop", (evento) => {
    evento.preventDefault(); 
    dropzone.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 

    const arquivosArrastados = evento.dataTransfer.files;

    if (arquivosArrastados.length > 0) {
        inputFile.files = arquivosArrastados;
        textoDropzone.textContent = inputFile.files[0].name;
    }
});

inputFile.addEventListener("change", () => {
    if (inputFile.files.length > 0) {
        textoDropzone.textContent = inputFile.files[0].name;
    }
});

async function arquivoParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.readAsDataURL(arquivo);
        leitor.onload = () => {
            const base64 = leitor.result.split(',')[1]; 
            resolve(base64);
        };
        leitor.onerror = (erro) => reject(erro);
    });
}

btnAnalisar.addEventListener("click", async () => {
    const arquivo = inputFile.files[0];

    if(!arquivo){
        console.log("Voce n enviou nada");
        return;
    }

    btnAnalisar.disabled = true;
    btnAnalisar.value = "Carregando...";
    
    try{
        const base64DoPDF = await arquivoParaBase64(arquivo);

        const payload = {
            contents: [{
                parts: [
                    { text: `Analise este histórico escolar.
                             Extraia os dados das disciplinas cursadas.
                             
                             Quero que extraia 4 coisas, Nome da disciplina, Nome do professor, Codigo e Carga horaria

                             quero que re retorne SOMENTE uma string dividida pela lista que dei acima em separadas por virgulas, alm disso, cada disciplina ficara em uma nova linha (com um /n no final)
                              
                             por exemplo:
                             ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES, MSc. ROSE YURI SHIMIZU, CIC0004, 90, ... (outra disciplina na msm sequencia);

                             DEVOLVA EXPLISSITAMENTE OQ EU PEDI SEM MODIFICAÇÕES
                               ` },
                    { inlineData: { mimeType: "application/pdf", data: base64DoPDF } }
                ]
            }]
        };

        const resposta = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if(!resposta.ok) throw new Error(`Erro requisição HTTP: ${resposta.status}`);
        
        const dados = await resposta.json();
        const respostaDaIA = dados.candidates[0].content.parts[0].text;
        console.log(respostaDaIA);

        envioSection.style.display = "none";
        disciplinasSection.style.display = "flex";

        disciplinasSection.innerHTML = "";
        disciplinasSection.appendChild(tituloDisciplinas);

        const linhas = respostaDaIA.split('\n');

        linhas.forEach(linha => {
            if (linha.trim() === "") return;

            const partes = linha.split(','); 
            
            if (partes.length >= 4) {
                const nome = partes[0].trim();
                const prof = partes[1].trim();
                const cod = partes[2].trim();
                const ch = partes[3].trim();

                const divDisciplina = document.createElement("div");
                divDisciplina.classList.add("diciplina");

                divDisciplina.innerHTML = `
                    <div class="divNomes">
                        <h1 class="nomeDaDisciplina">${nome}</h1>
                        <h2 class="professorDaDisciplina">${prof}</h2>
                        <h2 class="codigoDaDisciplina">${cod}</h2>
                    </div>
                    <div class="cargaHoraria">${ch}</div>
                `;
                disciplinasSection.appendChild(divDisciplina);
            }
        });

    }
    catch(error){
        console.log(error);
    }
    finally{
        btnAnalisar.disabled = false;
        btnAnalisar.value = "Enviar Historico"
    }
})