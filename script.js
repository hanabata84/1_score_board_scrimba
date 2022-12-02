let homeScore = 0
let guestScore = 0

let homeText = document.getElementById('home-score-text')
let guestText = document.getElementById('guest-score-text')

function homeOne() {
    homeScore += 1
    homeText.textContent = homeScore
}

function homeTwo() {
    homeScore += 2
    homeText.textContent = homeScore
}

function homeThree() {
    homeScore += 3
    homeText.textContent = homeScore
}

function guestOne() {
    guestScore += 1
    guestText.textContent = guestScore
}

function guestTwo() {
    guestScore += 2
    guestText.textContent = guestScore
}

function guestThree() {
    guestScore += 3
    guestText.textContent = guestScore
}