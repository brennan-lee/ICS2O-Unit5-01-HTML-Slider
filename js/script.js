// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML-Slider/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML-Slider/",
  })
}

const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6

function updateSliderValue(valueFromslider) {
  document.getElementById("slider-value").innerHTML = valueFromslider
}

if (valueFromslider == randomNumber) {
  document.getElementById("answer").innerHTML =
    "the answer was, " + randomNumber + "!" + "you got it! Good job."
}

if (sliderFromSlider != randomNumber) {
  document.getElementById("answer").innerHTML =
    "the answer was, " + randomNumber + "!" + "nice guess, but try again."
}
