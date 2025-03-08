

const container = document.querySelector('.main-container')

const headerButton = document.querySelector('.header-button')


console.log(headerButton)

export function openForm(){

    headerButton.addEventListener('click', () => {

        container.style.scale = 1
        headerButton.classList.remove('login-not-selected')
        headerButton.classList.add('login-selected')
        

            
            // if (login.style.right === '500px') {

            //     transitionLogin()
                

            //     // login.style.right  = '0px'
            //     // container.style.height = '535px'
            //     // register.style.left = '500px'
            // }
        
    })

}