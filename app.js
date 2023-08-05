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
})

function swipedHeart() {
  console.log(currentDog)
  currentDog.setDogStatus(true)
  swipe()
}

function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])
  renderDog()
}

function restartDogs() {
  currentDogIndex = 0
  renderDog()
}

function swipe() {
  if (currentDog.hasBeenLiked) {
    document.querySelector('.like-dislike').classList.toggle('hidden-icon')
    setTimeout(() => {
      getNewDog()
    }, 1500)
  }
}

function renderDog() {
  document.querySelector('.dog-wrapper').innerHTML = currentDog.getDogeHtml()
}
