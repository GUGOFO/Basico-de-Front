import {pi, getAreaDeCirculo, getVolumeCirculo, getCircunferencia} from './matematica.js';

console.log(pi);

const circunferencia = getCircunferencia(10);
const volume = getVolumeCirculo(10);

console.log(circunferencia.toFixed(2));
console.log(volume.toFixed(2));