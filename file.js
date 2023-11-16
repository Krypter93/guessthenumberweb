//Generate random number
document.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=> alert('Go for it genius'), 1500);
});

let random_number = Math.floor(Math.random() * 100) + 1;
console.log(random_number);


//Click submit button
let button = document.getElementById('submit');

button.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log('Done');

//Check the guess
let input_value = document.querySelector('input').value;
let text = document.querySelector('#result');

if(!input_value){
    alert('Enter a number');
}else if(input_value < random_number){
    text.textContent = 'Too low. Try again' + '\u{1F61E}';
    text.style.color = 'red';
}else if(input_value > random_number){
    text.textContent = 'Too high. Try again' + '\u{1F61E}';
    text.style.color = 'red';
}else{
    text.textContent = 'Correct!' + '\u{1F603}';
    text.style.color = 'green';
}
}); 