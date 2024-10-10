/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program plays rock, papper, scissors.
*/

// variables
let randomNumber: number = 0
let score: number = 0


basic.clearScreen()
basic.showIcon(IconNames.Happy)
input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen() 

    // if randomNumber was 0 ROCK
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        pause(3000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 1 PAPER
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        pause(3000)
        basic.showIcon(IconNames.Happy)
    }
    // if randomNumber was 2 SCISSORS
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        pause(3000)
        basic.showIcon(IconNames.Happy)
    }

    input.onButtonPressed(Button.A, function () {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        score = score + 1
        pause(3000)
        basic.showIcon(IconNames.Happy)
    })
    input.onButtonPressed(Button.B, function () {
        basic.clearScreen()
        basic.showString("Score:" + score)
        basic.showIcon(IconNames.Happy)

    })
})