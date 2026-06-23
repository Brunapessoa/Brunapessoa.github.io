import * as content from './content.js';

let title = document.getElementById('title')
let aside = document.getElementsByTagName('aside')
let aboutMe = document.getElementsByClassName('aboutMe')
let projects = document.getElementsByClassName('projects')

let abbrPtbr = document.querySelector('#portugues-br abbr')
let abbrEng = document.querySelector('#english abbr')
let abbrNl = document.querySelector('#nederland abbr')


let aboutTxt = document.getElementById('about-txt')

let projectsTxt = document.getElementById('projectsTxt')

let planBDesc = document.getElementById('planBDesc')
let recipesDesc = document.getElementById('recipesDesc')
let weatherDesc = document.getElementById('weatherDesc')
let tasksDesc = document.getElementById('tasksDesc')


let footerTxt = document.getElementById('footerTxt')

function updatePtbr() {
    title.innerHTML = content.titlePtbr

    for (let elements of aside) {
        elements.innerHTML = content.detailsPtBr
    }

    for (let elements of aboutMe) {
        elements.innerHTML = content.aboutMePtBr
    }

    for (let elements of projects) {
        elements.innerHTML = content.projectsPtBr
    }

    abbrPtbr.title = 'Português'
    abbrEng.title = 'Inglês'
    abbrNl.title = 'Holandês'

    aboutTxt.innerHTML = content.aboutTxtPtBr
   
    projectsTxt.innerHTML = content.projectsTxtPtBr
    
    planBDesc.innerHTML = content.planBDescPtBr
    recipesDesc.innerHTML = content.recipesDescPtBr
    weatherDesc.innerHTML = content.weatherPtBr
    tasksDesc.innerHTML = content.tasksDescPtBr


    footerTxt.innerHTML = content.footerPtBr

}

function updateEng() {
    title.innerHTML = content.titleEng

    for (let elements of aside) {
        elements.innerHTML = content.detailsEng
    }
    for (let elements of aboutMe) {
        elements.innerHTML = content.aboutMeEng
    }

    for (let elements of projects) {
        elements.innerHTML = content.projectsEng
    }

    
    abbrPtbr.title = 'Portuguese'
    abbrEng.title = 'English'
    abbrNl.title = 'Dutch'
    
    aboutTxt.innerHTML = content.aboutTxtEng
    
    projectsTxt.innerHTML = content.projectsTxtEng
    
    planBDesc.innerHTML = content.planBDescEng
    recipesDesc.innerHTML = content.recipesDescEng
    weatherDesc.innerHTML = content.weatherDescEng
    tasksDesc.innerHTML = content.tasksDescEng


    footerTxt.innerHTML = content.footerEng
}

function updateNl() {
    title.innerHTML = content.titleNl

    for (let elements of aside) {
        elements.innerHTML = content.detailsNl
    }
    for (let elements of aboutMe) {
        elements.innerHTML = content.aboutMeNl
    }

    for (let elements of projects) {
        elements.innerHTML = content.projectsNl
    }

    abbrPtbr.title = 'Portugees'
    abbrEng.title = 'Engels'
    abbrNl.title = 'Nederlands'

    aboutTxt.innerHTML = content.aboutTxtNl
    
    projectsTxt.innerHTML = content.projectsTxtNl
    planBDesc.innerHTML = content.planBDescNL
    recipesDesc.innerHTML = content.recipesDescNL
    weatherDesc.innerHTML = content.weatherDescNL
    tasksDesc.innerHTML = content.tasksDescNL


    footerTxt.innerHTML = content.footerNl
}

window.updatePtbr = updatePtbr;
window.updateEng = updateEng;
window.updateNl = updateNl;


