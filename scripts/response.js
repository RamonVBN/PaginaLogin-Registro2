// 'use strict'

const iconsEmail = document.querySelectorAll('.iconEmail')

const iconsPassword = document.querySelectorAll('.iconPassword')

const iconUser = document.querySelector('img#iconUser')

const closeButton = document.getElementById('close-icon')

const container = document.querySelector('.main-container')

const inputBox  = document.querySelector('.input-box')

const ul = document.querySelector('ul')



// console.log(closeButton)
// console.log(iconsEmail)
// console.log(iconsPassword)
// console.log(inputBox.clientWidth)
// console.log(inputs)
// console.log(input)




export function widthWatcher(viewPortWidth){

    closeButton.style.left = `${container.clientWidth - 50}px`

    iconsEmail.forEach((icon) => {
        icon.style.left = `${inputBox.clientWidth - 40}px`
    })

    iconsPassword.forEach((icon) => {
        icon.style.left = `${inputBox.clientWidth - 40}px`
    })

    iconUser.style.left = `${inputBox.clientWidth - 40}px`

    // input.clientWidth = `${inputBox.clientWidth - 45}px`

    // inputs.forEach((input) =>{
    //     input.clientWidth = `${inputBox.clientWidth - 45}px`
    // })
    

    if (viewPortWidth >= 860) {

        ul.style.visibility = 'visible'

        // closeButton.classList.remove('close-icon-desktop')
        


        // iconsEmail.style.left = `${inputBox.clientWidth - 40}px`


        // closeButton.classList.add('close-icon-tablet')
        // iconEmail.classList.add('icon-email-tablet')
        // iconPassword.classList.add('icon-password-tablet')

    }else{
        
        ul.style.visibility = 'hidden'
        // closeButton.classList.add('close-icon-desktop')

    }
            
}


export function screenResponse(){

    const viewPortWidth = window.innerWidth
    widthWatcher(viewPortWidth)

    window.onresize = () =>{

        const viewPortWidth = window.innerWidth
        widthWatcher(viewPortWidth)
    }
}





