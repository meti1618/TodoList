 

 
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
let empty = "";
let indexOfItem = 1 ; 
var notN = true ; 


function saver(){
    function notnull() {
        titleValue = Itemtitle.value.split('  ' ,);
        contentValue = ItemContent.value.split('  ' , );
        if(String(titleValue) ===  empty   && String(contentValue) === empty ){
            return notN = false  ;

        }
    console.log(String(titleValue))
    }
     function liCreator(title , content) {
        const li = document.createElement('li')
        const section1 = document.createElement('section')
        const section2 = document.createElement('section')
        const h3 = document.createElement('h3');
        const p = document.createElement('p')
        const btn = document.createElement('button')
        const btnA = document.createElement('button')
        const i = document.createElement('i')
        const i2 = document.createElement('i')

        li.classList.add('todoList--item')
        li.id =`li${indexOfItem}`;
        section1.id =`sec${indexOfItem}` 
        section2.id =`sec2${indexOfItem}` 
        h3.classList.add('todoList--item-title')
        h3.id = `h3${indexOfItem}` 
        p.classList.add('todoList--item-summary')
        p.id = `p${indexOfItem}` 
        btn.classList.add('todoList--item-editbtn')
        btnA.classList.add('todoList--item-deletebtn')
        btn.id = `btn${indexOfItem}` 
        btn.setAttribute('onclick' , `liEditor(${btn.id})`)
        btnA.id = `btnA${indexOfItem}` 
        btnA.setAttribute('onclick' , `liDeleter(${btnA.id})`)
        i.classList.add('fa' , 'fa-pencil-square-o')
        i2.classList.add('fa' , 'fa-trash-o')
        h3.innerText = title ;
        p.innerText = content ; 
        document.querySelector('#itemsList').appendChild(li)
        document.querySelector(`#li${indexOfItem}`).appendChild(section1)
        document.querySelector(`#li${indexOfItem}`).appendChild(section2)
        document.querySelector(`#sec${indexOfItem}`).appendChild(h3)
        document.querySelector(`#sec${indexOfItem}`).appendChild(p)
        document.querySelector(`#sec2${indexOfItem}`).appendChild(btn)
        document.querySelector(`#sec2${indexOfItem}`).appendChild(btnA)
        document.querySelector(`#btn${indexOfItem}`).appendChild(i)
        document.querySelector(`#btnA${indexOfItem}`).appendChild(i2)


    }
    console.log(notN)

    console.log(indexOfItem)
    notnull();
    if(notN === true ){
        liCreator(Itemtitle.value , ItemContent.value)
        indexOfItem++
        modalCloser();
    }
    else {
        Itemtitle.setAttribute('placeholder' , 'filled me' )
        ItemContent.setAttribute('placeholder' , 'you must filled me' )
    }
}



const ItemtitleCR  = document.getElementById('itemTitleCR')
const ItemContentCR  = document.getElementById('itemContentCR')


function liEditor(btn){
   
    numid = String(btn.id.match(/\d+/)) ;
    ItemtitleCR.value = document.getElementById(`h3${numid}`).innerText;
    ItemContentCR.value =  document.getElementById(`p${numid}`).innerText ;
    modalCreatorCR()
}
function saverCR(){
    function notnull() {
        titleValueCR = ItemtitleCR.value.split('  ' ,);
        contentValueCR = ItemContentCR.value.split('  ' , );
        if(String(titleValueCR) ===  empty   && String(contentValueCR) === empty ){
            return notN = false  ;

        }
    }
    notnull()
    if(notN === true ){
        document.getElementById(`h3${numid}`).innerText = ItemtitleCR.value ;
        document.getElementById(`p${numid}`).innerText = ItemContentCR.value
        indexOfItem++
        modalCloserCR();
    }
}


function liDeleter(btn){
   numid = String(btn.id.match(/\d+/)) ;
   document.getElementById(`li${numid}`).remove();
}

function deleteFake(){
   document.getElementById(`li0`).remove();
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
   }else{
       document.body.style.backgroundColor = 'white' ;
       modalBg.style.backgroundColor = '#f5f5f5' ;
       modal.classList.remove('modal_dark');
       modalBgCR.style.backgroundColor = '#f5f5f5'
       modalCR.classList.remove('modal_dark')
    }
}




