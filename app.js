import {dogs} from './dogData.js'
import {Dog} from './dog.js'
import {setBaseHtml} from './utils.js'

document.addEventListener('DOMContentLoaded', setBaseHtml(), renderDog())

function renderDog() {
    const dogTemplate = new Dog(dogs[0])
    document.querySelector('.dog-wrapper').innerHTML = dogTemplate.getDogeHtml()
    
}