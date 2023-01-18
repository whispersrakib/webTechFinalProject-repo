let bar = document.querySelector('#bar');
let sidebar =document.querySelector('.sidebar');
let close =document.querySelector('.close');

if(bar){
    bar.addEventListener('click',()=>{
        sidebar.classList.add('active');

    })
}


if(close){
    close.addEventListener('click',()=>{
        sidebar.classList.remove('active');
    })
}

let wj =document.querySelectorAll('.wj');
let sh=document.querySelectorAll('.sh');
let mc=document.querySelectorAll('.mc');
const kc =document.querySelectorAll('.kc');
for (const k of kc) {
    k.addEventListener('click',()=>{
        window.location="singleKclothes.html";
    })
    
}
for (const m of mc) {
    m.addEventListener('click',()=>{
        window.location="singleMclothes.html";
    })
    
}
for(let s of sh){
    s.addEventListener('click',()=>{
        window.location="singleShoes.html";
    })
}

for(let w of wj){
    w.addEventListener('click',()=>{
        window.location="wjacketsing.html";
    })
}
