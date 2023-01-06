const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const age = parseInt(document.querySelector('#age').value);
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');


    if((age === '') || (age <= 2) || (age >120)) {
        result.innerHTML = "Please Provide Valid Age.";
    }

    else if((height === '') || (height < 0) || (isNaN(height))) {
        result.innerHTML = "Please Provide Valid Height.";
    }
    else if((weight === '') || (weight < 0) || (isNaN(weight))) {
        result.innerHTML = "Please Provide Valid Weight.";
    }
    else{
        const calculate = (weight / ((height * height) / 10000)).toFixed(2);
        
        result.innerHTML = '<span>${calculate}</span>';

    }
})