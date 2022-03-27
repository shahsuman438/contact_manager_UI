const darkmodeReducer=(state,action)=>{
    switch(action.type){
        case "LIGHT":
            {
                return {
                    darkMode:false
                };
            }
        case "DARK":
            {
                return{
                    darkMode:true
                };
            }
        case "TOGGLE":
            {
                return{
                    darkMode:!state.darkMOde
                };
            }
            default:
                return state;
    }
}

export default darkmodeReducer