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