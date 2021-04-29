"use strict";

const formBtn = document.querySelector('.form-btn'),
      formInput = document.querySelector('.form-input'),
      form = document.querySelector('.form'),
      main = document.querySelector('.main'),
      okBtn = document.getElementById('okBtn'),
      nameSpan = document.getElementById('name');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let name = formInput.value;

    if (name != '') {
        nameSpan.innerHTML = name;
        main.classList.add('show-insult');
    }else{
        main.classList.add('show-msg');
    }
});

form.addEventListener('click', (e) => {
    main.classList.add('form-focus');
    main.classList.remove('show-msg');
}, true);

form.addEventListener('blur', (e) => {
       main.classList.remove('form-focus');
}, true);

okBtn.addEventListener('click', (e) => {
    main.classList.remove('show-insult');
    main.classList.remove('show-msg');
    main.classList.remove('form-focus');
});