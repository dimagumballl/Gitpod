import {createStore} from 'redux';  
import Reducer from './Reduser/MainReduser';  
 

 
export default function configureStore() {  
  return createStore(Reducer);
}