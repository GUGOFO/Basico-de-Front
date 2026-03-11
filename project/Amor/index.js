const divCoração = document.getElementById("coração");

divCoração.addEventListener("click", (e) => {
    const coração = e.target;

    coração.textContent = (coração.textContent === "❤️" ? "💔" : "❤️");
    coração.style.setProperty('--texto', `"${coração.textContent === "❤️" ? "te amo" : ":("}"`);

})

