import 'babel-polyfill';
import Word from './boundary/Word';
var j = new Word([1,4,5,7,8])
console.log(j);
document.getElementById('output').innerHTML = `${JSON.stringify(j.permute(2))}`;
