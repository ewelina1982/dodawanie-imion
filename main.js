const names = [];
const div = document.querySelector('div')
//
const addName = (e) => {
    e.preventDefault();//zatrzymuje domyslne przeladowaie strony
const input = document.querySelector('input');
const newName = input.value;
if (input.value.length) {
//  for (name of names) {
//   if (name === newName) {
//    alert("to już jest!!!!!!");
//    return
//   }
}
names.push(newName);
//  // console.log(names);
div.textContent += newName + ", ";
input.value = "";
// }
//
}
document.querySelector('button').addEventListener('click', addName)