"use strict";
//vidio 80

const modal=document.querySelector('.modal');
const closeModel=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');
const showModal=document.querySelectorAll('.show-modal');

const openModel=function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModals=function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 }

for(let i=0;i<showModal.length; i++)
{
showModal[i].addEventListener('click',openModel);
}

closeModel.addEventListener('click',closeModals);
overlay.addEventListener('click',closeModals);

// how closed by hiting the escape button from keybord

document.addEventListener('keydown',function(e){
   if(e.key==='Escape'&& !modal.classList.contains('hidden')){
     closeModals();
     }
   }
);