const bodyObj = document.body;
const parObj = document.getElementById('p');

document.getElementById("yelBack").addEventListener('click', function(ev) {
    bodyObj.style.backgroundColor = 'rgb(255,255,0)' ;
});

document.getElementById("whiBack").addEventListener('click', function(ev) {
    bodyObj.style.backgroundColor = 'rgb(255,255,255)';
});

document.getElementById("yelPar").addEventListener('click', function(ev) {
    parObj.style.backgroundColor = 'rgb(255,255,0)' ;
});

document.getElementById("whiPar").addEventListener('click', function(ev) {
    parObj.style.backgroundColor = 'rgb(255,255,255)';
});