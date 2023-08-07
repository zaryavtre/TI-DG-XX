import { dogs } from './dogData.js'
import { Dog } from './dog.js'
import { setBaseHtml } from './utils.js'

//let dogsArr = [0, 1, 2]
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])
const maxDogIndex = dogs.length - 1

document.addEventListener('DOMContentLoaded', () => {
  setBaseHtml(), renderDog()
})
document.addEventListener('click', function (e) {
  const likeButton = e.target.closest('.swipe-btn')
  const pawWrapper = e.target.closest('.paw-wrapper')
  if (likeButton && likeButton.dataset.like) {
    swipedHeart()
  }
  if (pawWrapper) {
    restartDogs()
  }
  if (likeButton && likeButton.dataset.nope) {
    swipedCross()
  }
})

function restartDogs() {
  currentDogIndex = 0
  currentDog = new Dog(dogs[currentDogIndex])
  renderDog()
}

function swipedHeart() {
  currentDog.setDogStatus(true)
  swipe()
}

function swipedCross() {
  currentDog.setDogStatus(false)
  swipe()
}

function getNewDog() {
  if (currentDogIndex < maxDogIndex) {
    currentDogIndex += 1
    currentDog = new Dog(dogs[currentDogIndex])
    renderDog()
  } else {
    endState()
  }
}

function swipe() {
  console.log()
  if (currentDogIndex <= maxDogIndex) {
    if (currentDog.hasBeenLiked) {
      document.querySelector('.heart').classList.toggle('hidden-icon')
      setTimeout(() => {
        getNewDog()
      }, 800)
    }
    if (!currentDog.hasBeenLiked) {
      document.querySelector('.cross').classList.toggle('hidden-icon')
      setTimeout(() => {
        getNewDog()
      }, 800)
    }
  } else {
    endState()
  }
}

function endState() {
  document.querySelector('.like-btn-wrapper').style.display = 'none'
  document.querySelector('.dog-wrapper').innerHTML = `
    <div>
      <h2 style="text-align: center; font-size: 2em;">No more dogs in your area 🐕</h2>
    </div>`
}

function renderDog() {
  document.querySelector('.dog-wrapper').innerHTML = currentDog.getDogeHtml()
}
