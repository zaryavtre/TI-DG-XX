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
            <div class="like-btn-wrapper">
                <button class="swipe-btn" id="like"><img class="swipe-icon" src="images/like_btn.svg"></button>
                <button class="swipe-btn" id="nope"><img class="swipe-icon" src="images/nope_btn.svg"></button>
            </div>
        </div>
    `

    document.querySelector('.main').innerHTML = template
}

export {setBaseHtml}