import MainStateReduser from './MainStateReduser/MainStateReduser'


export default function MainReduser(state = {}, action) {
    return {
        MainStateReduser: MainStateReduser(state.MainStateReduser, action),
      
    }
  }