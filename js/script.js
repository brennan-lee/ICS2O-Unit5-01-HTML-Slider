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

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */

 Math.floor(Math.random() * 6) + 1;  // returns a random integer from 1 to 6

function myButtonClicked() {
  document.getElementById("hello-world").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}
