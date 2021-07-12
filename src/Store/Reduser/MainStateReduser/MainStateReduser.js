
import initialstate from '../initialstate';
import {MenuClick} from './comJS/Interface'

 function MainStateReduser(state = initialstate, action){
     
    switch(action.type) {
        case "MENU_CLICK": {
            return MenuClick(state, action)
        }
        default: return state;
    }
} 
export default MainStateReduser;