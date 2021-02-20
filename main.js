/*

<i class="fas fa-thumbtack">pin</i>
<i class="fas fa-check">done</i>
<i class="fas fa-bars">bars toggle</i>
<i class="far fa-smile">smile</i>

Assalomu alaykum.
Ertaga (Juma kuni) ukam mi to'yi ushanga oxirgacham qilishga vohtim bo'madi. 
Shuni inobatga olin 2kun ni ichida qildim buni!

*/

const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById("trigger"); //menu-btn
const searchBtn = document.getElementById('search-btn');
const searchBtn2 = document.getElementById('search-btn2');
const searchBtn3 = document.getElementById('search-btn3');

const searchInput = document.getElementById('search');

const moreMenu = document.getElementById('menuMore');
const moreMenu2 = document.getElementById('menuMore');
const moreMenu3 = document.getElementById('menuMore');

const exitBtn = document.getElementById('moreExit');

const openMore = document.getElementById("more-bt"); 
const openMore2 = document.getElementById("more-bt2");
const openMore3 = document.getElementById("more-bt3");

const exitBtn2 = document.getElementById('moreExit2');
const exitBtn3 = document.getElementById('moreExit3');

const chat3Btn = document.querySelector(".usersChat3")
const chat2Btn = document.querySelector(".usersChat2")
const chat1Btn = document.querySelector(".usersChat1")

const chat1 = document.querySelector(".rightPanel1")
const chat2 = document.querySelector(".rightPanel2")
const chat3 = document.querySelector(".rightPanel3")
    
    openMore.onclick = () => {
        moreMenu.classList.add('active');
    }
    
    exitBtn.onclick = () => {
        moreMenu.classList.remove('active');
    }
    openMore2.onclick = () => {
        moreMenu.classList.add('active');
    }
    
    exitBtn2.onclick = () => {
        moreMenu.classList.remove('active');
    }
    openMore3.onclick = () => {
        moreMenu.classList.add('active');
    }
    
    exitBtn3.onclick = () => {
        moreMenu.classList.remove('active');
    }


    openMenu.onclick = () => {
        menu.classList.add('active');
    }

    closeMenu.onclick = () => {
        menu.classList.remove('active');
    }

    searchBtn.onclick = () => {
        searchInput.focus();
    }
    searchBtn2.onclick = () => {
        searchInput.focus();
    }
    
    searchBtn3.onclick = () => {
        searchInput.focus();
    }
    
    




const sendBtn = document.querySelector("#sendBtn")
const inputInfo = document.querySelector(".replyMessage")
let ulElement=document.querySelector('#textInfor')//convHistory userBg
// let formElement=document.querySelector('.replyMessage')

sendBtn.onclick=function(event){
	event.preventDefault()
	let liElement=document.createElement('div')
	// let timeElement=document.createElement('div')
	liElement.classList='msg messageSent'
	liElement.textContent=inputInfo;
	liElement.innerText=inputInfo.value;
	ulElement.appendChild(liElement);
	// formElement.reset() Negadurga ishlamayapti :(
}

const sendBtn2 = document.querySelector("#sendBtn2")
const inputInfo2 = document.querySelector(".replyMessage2")
let ulElement2=document.querySelector('#textInfor2')//convHistory userBg
// let formElement=document.querySelector('.replyMessage')

sendBtn2.onclick=function(event){
	event.preventDefault()
	let liElement=document.createElement('div')
	// let timeElement=document.createElement('div')
	liElement.classList='msg messageSent'
	liElement.textContent=inputInfo2;
	liElement.innerText=inputInfo2.value;
	ulElement2.appendChild(liElement);
	// formElement.reset() Negadurga ishlamayapti :(
}


const sendBtn3 = document.querySelector("#sendBtn3")
const inputInfo3 = document.querySelector(".replyMessage3")
let ulElement3=document.querySelector('#textInfor3')//convHistory userBg
// let formElement=document.querySelector('.replyMessage')

sendBtn3.onclick=function(event){
	event.preventDefault()
	let liElement=document.createElement('div')
	// let timeElement=document.createElement('div')
	liElement.classList='msg messageSent'
	liElement.textContent=inputInfo3;
	liElement.innerText=inputInfo3.value;
	ulElement3.appendChild(liElement);
	// formElement.reset() Negadurga ishlamayapti :(
}

chat1Btn.onclick = () => {
    chat1.classList.add('active');
    chat2.classList.remove('active');
    chat3.classList.remove('active');
}
chat2Btn.onclick = () => {
    chat2.classList.add('active');
    chat1.classList.remove('active');
    chat3.classList.remove('active');
}

chat3Btn.onclick = () => {
    chat3.classList.add('active');
    chat2.classList.remove('active');
    chat1.classList.remove('active');
}

const mobileElementExit = document.querySelector(".mobileExit")
const mobileElementOpen = document.querySelector(".leftSidePanel")
mobileElementExit.onclick = () => {
    chat1.classList.add("close")
    mobileElementOpen.classList.add("active")
}  
mobileElementOpen.onclick = () => {
    mobileElementOpen.classList.remove("active")
    chat1.classList.remove("close")
}

const mobileElementExit2 = document.querySelector(".mobileExit2")
mobileElementExit2.onclick = () => {
    chat2.classList.add("close")
    mobileElementOpen.classList.add("active")
}  
mobileElementOpen.onclick = () => {
    mobileElementOpen.classList.remove("active")
    chat2.classList.remove("close")
}
const mobileElementExit3 = document.querySelector(".mobileExit3")
mobileElementExit3.onclick = () => {
    chat3.classList.add("close")
    mobileElementOpen.classList.add("active")
}  
mobileElementOpen.onclick = () => {
    mobileElementOpen.classList.remove("active")
    chat3.classList.remove("close")
}
