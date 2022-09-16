// ==UserScript==
// @name         Ati
// @namespace    https://github.com/itachineuchixa/extension/blob/main/update.js
// @version      1.0
// @downloadURL https://raw.githubusercontent.com/itachineuchixa/extension/main/update.js
// @updateURL  https://raw.githubusercontent.com/itachineuchixa/extension/main/update.js
// @description  try to take over the world!
// @author       You
// @include      https://ati.su/*
// @include      https://loads.ati.su/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ati.su
// @grant        none
// ==/UserScript==
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(4) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(6) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(7) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(8) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(9) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(10) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(11) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#navigationContainer > ul > li:nth-child(13) > a").style.display = 'none'}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("body > div.page-content > div").remove()}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("body > div.page-content > main > div:nth-child(6) > div").remove()}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("#footer").remove()}catch{}}, 6000)
setTimeout(function(){try{getElementByXpath("/html/body/div[1]").remove()}catch{}}, 6000)
setTimeout(function(){try{getElementByXpath("/html/body/div[4]/main/div[3]/section").remove()}catch{}}, 6000)
setTimeout(function(){try{document.querySelector("body > div.page-content > main > div:nth-child(8) > section").remove()}catch{}}, 6000)
