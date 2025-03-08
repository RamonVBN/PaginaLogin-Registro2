
const menuButton = document.querySelector('.button-menu-mobile')

const ul = document.querySelector('ul')


export function openMenu(){

    menuButton.addEventListener('click', () =>{

        if (ul.style.visibility === 'hidden'){
            
            ul.style.visibility = 'visible'   

        }else{

            ul.style.visibility = 'hidden'
        }
    
    })

    document.addEventListener('click', (event) =>{

        if (window.innerWidth < 860) {
            
            if (!event.target.classList.contains('button-menu-mobile')) {
                
                ul.style.visibility = 'hidden'
            }
        }

    })
}