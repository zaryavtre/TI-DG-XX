class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogeHtml() {
        const {name, avatar, age, bio} = this
        return `
            <div class="main-dog">
                <div class="dog-pic-wrapper">
                    <img class="dog-pic" src="${avatar}">
                    <div class="dog-stat-wrapper">
                        <div class="dog-name-age">
                            <h2 class="dog-name">${name}</h2>
                            <span>,</span>
                            <p class="dog-age">${age}</p>
                        </div>
                    <div class="bio-wrapper">
                        <p class="dog-bio">${bio}</p>
                    </div>
                </div>
                <div class="like-dislike hidden-icon">
                    <img src="images/like_icon.png">
                </div>
            </div>
        `
    }
    setDogStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
}


export {Dog}