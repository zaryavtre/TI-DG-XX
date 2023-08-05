import {dogs} from './dogData.js'
import {Dog} from './dog.js'
import {setBaseHtml} from './utils.js'

//let dogsArr = [0, 1, 2]
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

document.addEventListener('DOMContentLoaded', setBaseHtml(), renderDog())
document.addEventListener('click', function(e) {
    const likeButton = e.target.closest('.swipe-btn')
    const pawWrapper = e.target.closest('.paw-wrapper')
    if (likeButton && likeButton.dataset.like) {
        swipedHeart()
    } 
    if(pawWrapper) {
        restartDogs()
    }
})

function swipedHeart() {
    currentDog.setDogStatus(true)
    swipe()
}

function getNewDog() {
    const nextDog = dogs[currentDogIndex]
    currentDogIndex = (currentDogIndex + 1)
    return nextDog ? new Dog(nextDog) : {} 
}

function restartDogs() {
    currentDogIndex = 0
    renderDog()
}

function swipe() {
    if(currentDog.hasBeenLiked) {
        document.querySelector('.like-dislike').classList.toggle('hidden-icon')
        setInterval(() => {
            renderDog()
        }, 3000)
    }

}

function renderDog() {
    const dogTemplate = getNewDog()
    document.querySelector('.dog-wrapper').innerHTML = dogTemplate.getDogeHtml()
    
}
