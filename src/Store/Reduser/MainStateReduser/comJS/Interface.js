function MenuClick(state){
    return {
        ...state,
        MainStateReduser:{
            ...state.MainStateReduser,
            interfase:{
                ...state.MainStateReduser.interfase,
                Menu:!state.MainStateReduser.interfase.Menu
            }
        }
    }
}

export {MenuClick}