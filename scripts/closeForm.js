import { transitionLogin } from "./transitionForm.js"

const closeButton = document.getElementById('close-icon')

const container = document.querySelector('.main-container')

const headerButton = document.querySelector('.header-button')

export function closeForm(){

    closeButton.addEventListener('click', () =>{

        container.style.scale = 0

        headerButton.classList.remove('login-selected')
        headerButton.classList.add('login-not-selected')

        setTimeout(() =>{
            transitionLogin()
            console.log('opa')
        }, 300)

        // login.style.right  = '0px'
        // container.style.height = '535px'
        // register.style.left = '500px'
        
        
    })
}