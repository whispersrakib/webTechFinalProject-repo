let bar = document.querySelector('#bar');
let sidebar =document.querySelector('#sidebar');
bar.addEventListener('click',()=>
{
    sidebar.classList.toggle('hambarger');
    // bar.classList.toggle('fa-solid fa-xmark');
    // bar.setAttribute('class','fa-solid fa-xmark');
    

});