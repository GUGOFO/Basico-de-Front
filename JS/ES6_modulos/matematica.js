export const pi = 3.14159;

export function getCircunferencia(raio){
    return 2 * pi * raio;
}

export function getAreaDeCirculo(raio){
    return pi * raio * raio;
}

export function getVolumeCirculo(raio){
    return (4/3)*pi*raio*raio*raio;
}