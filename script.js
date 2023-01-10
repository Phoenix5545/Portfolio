const phone = document.getElementById("phone");
const woodChipper = document.getElementById("woodChipper");
const header0 = document.getElementById("header0");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const header3 = document.getElementById("header3");


phone.addEventListener('mousemove', 
  checkMove
)

let easterEgg = false

function checkMove(){
  if(easterEgg == false){
    movePhone()
  }
}

function movePhone(){
  phone.style.right = Math.random()*90+1 + '%'
  phone.style.bottom = Math.random()*90+1 + '%'
  phone.style.transform = 'rotate(' + (Math.random()*500) + 'deg)'
}
phone.addEventListener(
  'transitionend',
  checkEgg
)

function checkEgg(){
let positionP = phone.getBoundingClientRect("phone");
let positionW = woodChipper.getBoundingClientRect("woodChipper");
console.log('phone',positionP)
console.log('chipper',positionW)

  if(positionP.x > positionW.x && positionP.y > positionW.y){
    easterEgg = true
  }

  

  if(easterEgg == true){
    header0.style.animationPlayState = 'running';

    header1.style.animationPlayState = 'running';

    header2.style.animationPlayState = 'running';

    header3.style.animationPlayState = 'running';

    phone.style.display = 'none';

    woodChipper.style.display = 'none';
  }
}