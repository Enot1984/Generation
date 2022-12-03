const game = document.querySelector(".button1");
document.querySelector('.button1').addEventListener('click', () => {
    game.onclick();
}
);

const stop = document.querySelector(".button2");
document.querySelector('.button2').addEventListener('click', () => {
    location.reload();
    console.log('click');
}
);

game.onclick = function(){ 
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('fatherName').innerText = initPerson.fatherName;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('job').innerText = initPerson.job;
};
