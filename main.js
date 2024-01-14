const myButton= document.getElementById('myBtn');

window.onscroll= function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 10 || document.documentElement > 10){
        myButton.style.display = "block";

    }

else{
    myButton.styl.display = "none";
}
}
myButton.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
