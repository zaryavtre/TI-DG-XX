import {dogs} from './dogData.js'
import {Dog} from './dog.js'
import {setBaseHtml} from './utils.js'

//let dogsArr = [0, 1, 2]
let currentDogIndex = 0

document.addEventListener('DOMContentLoaded', setBaseHtml(), renderDog())
document.addEventListener('click', function(e) {
    const likeButton = e.target.closest('.swipe-btn');
    if (likeButton && likeButton.dataset.like) {
        swipe();
    }
})

function getNewDog() {
    /* const nextDog = dogs[dogsArr.shift()]
    return nextDog ? new Dog(nextDog) : {} */
    const nextDog = dogs[currentDogIndex]
    currentDogIndex = (currentDogIndex + 1) % dogs.length
    return nextDog ? new Dog(nextDog) : {} 
}

function swipe() {
    renderDog()
    console.log(dogs)

/*     dogs.hasBeenSwiped = !dogs.hasBeenSwiped
    if(dogs.hasBeenSwiped) {
        getNewDog()
        renderDog()
        console.log(dogsArr)
    } */
}

function renderDog() {
    const dogTemplate = getNewDog()
    document.querySelector('.dog-wrapper').innerHTML = dogTemplate.getDogeHtml()
    
}
