import {dogs} from './dogData.js'

document.addEventListener('DOMContentLoaded', setBaseHtml())

function setBaseHtml() {
    let template = ''
    template = `
        <div class="tin-main">
            <div class="top-bar">
                <img class="bar-icon" src="/images/profile.svg">
                <div class="paw-wrapper"><img class="bar-icon" src="/images/paw.svg"></div>
                <img class="bar-icon" src="/images/chat.svg">
            </div>
            <div class="dog-wrapper" id="dog-component"></div>
        </div>
    `

    document.querySelector('.main').innerHTML = template
}