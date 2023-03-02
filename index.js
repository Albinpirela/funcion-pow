const x = document.querySelector('.x');
const n = document.querySelector('.n');
const btn = document.querySelector('button')
const resultP = document.querySelector('p') 
const pow = () => { 
let result = 1;
for(let ii = 0; ii < n.value; ii++){
 result = result * x.value;
}
 resultP.textContent = result;
};
btn.addEventListener('click',pow);

