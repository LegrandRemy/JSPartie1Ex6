let sendformulaire1 = document.getElementById('sdformulaire');
sendformulaire1.addEventListener('click', sendformulaire);

function sendformulaire (){
let shoesize1 = document.getElementById('shoesize').value;
let birth1 = document.getElementById('birth').value;
let result = shoesize1 * 2;
 result = result + 5;
 result = result * 50;
 result = result - birth1;
 result = result + 1769;
alert(result);
}