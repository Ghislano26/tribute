const answertag= document.querySelector('.list-event');
const btn1=document.getElementById('btn-1');
const btn2=document.getElementById('btn-2');
const rep= document.querySelector('p');
const move= document.querySelector('.mouvemouse')




window.addEventListener('mousemove', (e)=>{
    move.style.left= e.pageX+"px";
    move.style.top= e.pageY+"px";
})
move.addEventListener('mousedown', ()=>{
    move.style.transform='scale(2) translate(-25%, -25%)';
})
move.addEventListener('mouseup', ()=>{
    move.style.transform='scale(1) translate(-50%, -50%)';
    move.style.border="2px solid teal";
})
answertag.addEventListener('mouseenter', ()=>{
    answertag.style.background="rgba(0,0,0,0.3)";
})
answertag.addEventListener('mouseout', ()=>{
    answertag.style.background="pink";
})
btn1.addEventListener('click', ()=>{
    rep.style.visibility="visible";
})
btn2.addEventListener('click', ()=>{
    rep.classList.toggle ('show');
    rep.style.background="blue";
})
answertag.style.borderRadius="150px";
answertag.addEventListener('click', ()=>{
    answertag.classList.toggle('answer-click');
})