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

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " + randomNumber + "!" + " You got it right! Good job."
  }

  if (valueFromSlider !== randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " +
      randomNumber +
      "." +
      " You got it wrong. Better luck next time!"
  }
}
