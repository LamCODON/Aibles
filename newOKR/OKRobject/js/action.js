let percent=document.querySelectorAll('.content__element--do');
let colourDisplay=document.querySelectorAll('.content__head--symbol-coulor')
for (let i=0;i<percent.length;i++){
    let numberPercent=percent[i].innerText.slice(0,-1);
    let number= parseInt(numberPercent);
    if(number<40){
        percent[i].style.color='red'
    }
    else if(number<70){
        percent[i].style.color='yellow'
    }
    else{
        percent[i].style.color='green'
    }
}
for (let i=0;i<colourDisplay.length;i++){
    let calcNumber=colourDisplay[i].parentElement.previousSibling.previousSibling
    colourDisplay[i].style.backgroundColor=calcNumber.style.color
}
function hide(e){
    let ul=e.parentElement.nextSibling.nextSibling;
    console.log(e.parentElement.nextElemnetSibling);
    if(ul.style.display=="none")
    {
        ul.style.display="block"
        e.innerText="remove"
    }
    else{
        ul.style.display="none"
        e.innerText="expand_more";
    }
}

