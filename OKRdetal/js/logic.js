let keyRerults=document.querySelector('.listKey')
let li=document.querySelectorAll('.content__result')
let targetOkr=document.querySelectorAll('.content__element--target')
let percent=document.querySelectorAll('.content__element--do')
let process=document.querySelectorAll('.content__head--process')
function addkey(e){
    let ul=e.parentElement.parentElement.previousElementSibling
    console.log(ul);
    let liItem=document.createElement('li');
    liItem.className='mb-4'
    liItem.innerHTML=`
    <div class="content__key d-flex flex-row align-items-md-center align-items-start">
    <img src="./img/avt.jpg" alt="" class="content--avt rounded-pill">
    <div class="content__key--main row w-100 d-flex align-items-baseline ms-2 pe-3">
        <input class="col-md-7"></input>
        <input class="col-md-2 col-3 text-center d-none d-md-block" type="date"></input>
        <div class="form-check form-switch d-none">
            <input class="form-check-input" type="checkbox" role="switch"
                id="flexSwitchCheckDefault">
        </div>
        <input class="col-md-1 col-4 text-md-end" placeholder="Do"></input>
        <input class="col-md-1 col-4 text-md-end" placeholder="Target"></input>
        <div class="unit col-md-1 col-4 text-md-end p-0">
            <select name="unit" id="unit" class="w-100">
                <option value="volvo" class="text-end">%</option>
                <option value="saab" class="text-end">$</option>
                <option value="opel" class="text-end">num.</option>
                <option value="audi" class="text-end">binary</option>
            </select>
        </div>
    </div>
    <button class="material-icons border-0" onclick="done(this)">
        done
    </button>
    <button class="material-icons border-0 me-1" onclick="kick(this)">
        delete
    </button>
</div>
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
    e.parentElement.parentElement.remove()
}
function done(e){
    let unit= document.querySelector('.unit');
    let liPercent=unit.parentElement
    let percent=document.createElement('p')
    percent.className='col-md-1 col-4 text-md-end'
    e.className='material-icons border-0 edit'

}


