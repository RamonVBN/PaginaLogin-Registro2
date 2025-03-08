import {closeForm} from './closeForm.js'

import { openForm } from './openForm.js'
 
import { transitionForm } from './transitionForm.js'

import {screenResponse} from './response.js'

import { openMenu } from './openmenu.js'


addEventListener('DOMContentLoaded', pageLoad())


function pageLoad(){

    screenResponse()

    closeForm()
    openForm()
    transitionForm()
    openMenu()

    
}


