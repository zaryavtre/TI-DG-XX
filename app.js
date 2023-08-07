import { dogs } from './dogData.js'
import { Dog } from './dog.js'
import { setBaseHtml } from './utils.js'

//let dogsArr = [0, 1, 2]
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

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
  console.log(currentDog)
  currentDog.setDogStatus(true)
  swipe()
}

function swipedCross() {
  console.log(currentDog)
  currentDog.setDogStatus(false)
  swipe()
}

function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])
  renderDog()
}

function swipe() {
  if (currentDog.hasBeenLiked) {
    document.querySelector('.heart').classList.toggle('hidden-icon')
    setTimeout(() => {
      getNewDog()
    }, 1500)
  } else if (!currentDog.hasBeenLiked) {
    document.querySelector('.cross').classList.toggle('hidden-icon')
    setTimeout(() => {
      getNewDog()
    }, 1500)
  }
}

function renderDog() {
  document.querySelector('.dog-wrapper').innerHTML = currentDog.getDogeHtml()
}
