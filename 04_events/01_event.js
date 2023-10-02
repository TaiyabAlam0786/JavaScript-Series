// JavaScript events
// This approch is not provided more feture

// document.getElementById('owl').onclick = function(){
//     alert('Owl button clicked');
// }


document.getElementById('images').addEventListener('click',function(e){
    
    // console.log('Click in side the ul');
});

document.getElementById('owl').addEventListener('click',function(e){
    e.stopPropagation();
    // console.log('Click the li tag');
})



document.getElementById('images').addEventListener('click',(e)=>{
    console.log(e.target.parentNode);
    let removeIt=e.target.parentNode;
    removeIt.remove();
})

