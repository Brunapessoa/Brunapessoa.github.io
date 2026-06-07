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
let weatherDesc = document.getElementById('weatherDesc')
let tasksDesc = document.getElementById('tasksDesc')
let loginScreen = document.getElementById('loginScreen') 
let loginDesc = document.getElementById('loginDesc')


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
    weatherDesc.innerHTML = content.weatherPtBr
    tasksDesc.innerHTML = content.tasksDescPtBr
    loginScreen.innerHTML = content.loginScreenPtBr
    loginDesc.innerHTML = content.loginDescPtBr


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
    weatherDesc.innerHTML = content.weatherDescEng
    tasksDesc.innerHTML = content.tasksDescEng
    loginScreen.innerHTML = content.loginScreenEng
    loginDesc.innerHTML = content.loginDescEng


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
    weatherDesc.innerHTML = content.weatherDescNL
    tasksDesc.innerHTML = content.tasksDescNL
    loginScreen.innerHTML = content.loginScreenNL
    loginDesc.innerHTML = content.loginDescNL


    footerTxt.innerHTML = content.footerNl
}

window.updatePtbr = updatePtbr;
window.updateEng = updateEng;
window.updateNl = updateNl;


