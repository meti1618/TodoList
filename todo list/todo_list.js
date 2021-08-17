 

 
// modal
const modalBg = document.getElementById('modalBg')

function modalCreator(){
    modalBg.style.display = "flex"
}
function modalCloser (){
    modalBg.style.display = 'none';
}

const modalBgCR = document.getElementById('modalBgCR')
function modalCreatorCR(){
    modalBgCR.style.display = "flex"
}
function modalCloserCR (){
    modalBgCR.style.display = 'none';
}

//todo list
const itemsList = document.getElementById('itemsList');
const Itemtitle = document.getElementById('itemTitle');
const ItemContent = document.getElementById('itemContent');
const itemDate = document.getElementById('itemDate')
let empty = ""  ;
let indexOfItem = 1 ; 


function saver(){

     function liCreator(title , content , date) {
        const li = document.createElement('li')
        const header = document.createElement('header')
        const section = document.createElement('section')
        const article = document.createElement('article')
        const h3 = document.createElement('h3');
        const span = document.createElement('span')
        const p = document.createElement('p')
        const btn = document.createElement('button')
        const btnA = document.createElement('button')
        const i = document.createElement('i')
        const i2 = document.createElement('i')
        li.classList.add('todoList--item')
        li.id =`li${indexOfItem}`;
        header.classList.add('todoList--item--header')
        header.id =`head${indexOfItem}` 
        h3.classList.add('todoList--item--header-title')
        h3.id = `h3${indexOfItem}` 
        span.classList.add('todoList--item--header-date');
        span.id =`span${indexOfItem}` 
        section.classList.add('todoList--item--content')
        section.id =`sec${indexOfItem}` 
        p.classList.add('todoList--item--content-summary')
        p.id = `p${indexOfItem}` 
        article.classList.add('todoList--item--content--btns')
        article.id=`article${indexOfItem}` 
        btn.classList.add('todoList--item--content--btns-editbtn')
        btnA.classList.add('todoList--item--content--btns-deletebtn')
        btn.id = `btn${indexOfItem}` 
        btn.setAttribute('onclick' , `liEditor(${btn.id})`)
        btnA.id = `btnA${indexOfItem}` 
        btnA.setAttribute('onclick' , `liDeleter(${btnA.id})`)
        i.classList.add('fa' , 'fa-pencil-square-o')
        i2.classList.add('fa' , 'fa-trash-o')
        h3.innerText = title ;
        p.innerText = content ; 
        span.innerText = date ;
        document.querySelector('#itemsList').appendChild(li)
        document.querySelector(`#li${indexOfItem}`).appendChild(header)
        document.querySelector(`#head${indexOfItem}`).appendChild(h3)
        document.querySelector(`#head${indexOfItem}`).appendChild(span)
        document.querySelector(`#li${indexOfItem}`).appendChild(section)
        document.querySelector(`#sec${indexOfItem}`).appendChild(p)
        document.querySelector(`#sec${indexOfItem}`).appendChild(article)
        document.querySelector(`#article${indexOfItem}`).appendChild(btn)
        document.querySelector(`#article${indexOfItem}`).appendChild(btnA)
        document.querySelector(`#btn${indexOfItem}`).appendChild(i)
        document.querySelector(`#btnA${indexOfItem}`).appendChild(i2)


    }

    console.log(indexOfItem)
        liCreator(Itemtitle.value , ItemContent.value , itemDate.value)
        indexOfItem++
        modalCloser();
        notifCrator(Itemtitle.value ,'saved');

}



const ItemtitleCR  = document.getElementById('itemTitleCR')
const ItemContentCR  = document.getElementById('itemContentCR')
const itemDateCR =document.getElementById('itemDateCR')

function liEditor(btn){
   
    numid = String(btn.id.match(/\d+/)) ;
    ItemtitleCR.value = document.getElementById(`h3${numid}`).innerText;
    ItemContentCR.value =  document.getElementById(`p${numid}`).innerText ;
    itemDateCR.value =  document.getElementById(`span${numid}`).innerText ;
    modalCreatorCR()

}
function saverCR(){


        document.getElementById(`h3${numid}`).innerText = ItemtitleCR.value ;
        document.getElementById(`p${numid}`).innerText = ItemContentCR.value;
        document.getElementById(`span${numid}`).innerText = itemDateCR.value
        indexOfItem++
        modalCloserCR();
        notifCrator(document.getElementById(`h3${numid}`).innerText ,'changed');


}


function liDeleter(btn){
   numid = String(btn.id.match(/\d+/)) ;
   notifCrator(document.getElementById(`h3${numid}`).innerText ,'deleted');

   document.getElementById(`li${numid}`).remove();

}

function deleteFake(){
   document.getElementById(`li0`).remove();
   notifCrator('im fake' ,'deleted');
}

let pn = document.createElement('p') ;

function notifCrator( title  , act ) {
    const n_box = document.getElementById('n_box')
    pn.classList.add('notification_box-notif')
    n_box.appendChild(pn)
    pn.innerText = `${title} ${act}`
    window.setTimeout(function (){
        pn.remove()
    },3000) 
}


//theme chenger


const switcher = document.getElementById('switcher');


function toggler_mode(){
   if (switcher.checked){
       document.body.style.backgroundColor = 'black' ;
       modalBg.style.backgroundColor = '#131720'
       modal.classList.add('modal_dark')
       modalBgCR.style.backgroundColor = '#131720'
       modalCR.classList.add('modal_dark')
       pn.classList.add('notification_box-notif_dark')
   }else{
       document.body.style.backgroundColor = 'white' ;
       modalBg.style.backgroundColor = '#f5f5f5' ;
       modal.classList.remove('modal_dark');
       modalBgCR.style.backgroundColor = '#f5f5f5'
       modalCR.classList.remove('modal_dark')
       pn.classList.remove('notification_box-notif_dark')

    }
}




