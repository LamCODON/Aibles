let keyRerults=document.querySelector('.listKey')
let li=document.querySelectorAll('.content__result')
let targetOkr=document.querySelectorAll('.content__element--target')
let percent=document.querySelectorAll('.content__element--do')
let process=document.querySelectorAll('.content__head--process')
function addkey(e){
    let ul=e.parentElement.parentElement.previousElementSibling
    console.log(ul);
    let liItem=document.createElement('li');
    liItem.className='ms-3 d-flex flex-row align-items-center w-100 mb-4'
    liItem.innerHTML=`
    <img src="./img/avt.jpg" alt="">
    <div class="content__element row w-100 m-0">
        <input class="content__element--text col-7 border-0 fw-bold" placeholder="content..."></input>
        <input class="content__element--time col-2 pe-5 border-0" placeholder="Due..."></input>
        <input class="content__element--much col-1 pe-5 border-0" placeholder="do..."></input>
        <input class="content__element--target col-1 pe-5 border-0 text-success" placeholder="target..."></input>
        <button class="content__element--do col-1 pe-5 border-0 bg-white" >Unit</button>
        <button class="content__element--do col-1 pe-5 border-0 d-none" placeholder="Unit" readonly></button>
    </div>
    <button class="material-icons border-0">
        done
    </button>
    `
    ul.appendChild(liItem)
}   
console.log(targetOkr)
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
for (let i=0;i<targetOkr.length;i++){
    targetOkr[i].style.color='green'
}

function kick(e){
    e.parentElement.remove()
}


