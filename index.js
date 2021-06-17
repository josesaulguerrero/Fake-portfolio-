const burgerIcon = document.querySelector('.burger-icon')
const lineOne = document.querySelector('.line1')
const lineTwo = document.querySelector('.line2')
const lineThree = document.querySelector('.line3')
const navBar = document.getElementById('navbar')


function hideMenu() {
   burgerIcon.classList.remove('burger-menu--visible')
   lineOne.classList.remove('line1--rotated')
   lineTwo.classList.remove('line2--hidden')
   lineThree.classList.remove('line3--rotated')
   navBar.classList.add('navbar--hidden')
}

function showMenu() {
   burgerIcon.classList.add('burger-menu--visible')
   lineOne.classList.add('line1--rotated')
   lineTwo.classList.add('line2--hidden')
   lineThree.classList.add('line3--rotated')
   navBar.classList.remove('navbar--hidden')
}

function toggleClass(){
   (lineOne.classList.contains('line1--rotated'))
      ? hideMenu()
      : showMenu()
}