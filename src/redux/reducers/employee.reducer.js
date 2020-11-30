const employeeReducer = (state = [], action) => {
    if(action.type === "ADD_EMPLOYEE") {

        state = [...state, action.data];

    } else if(action.type === "UPDATE_EMPLOYEE") {

        const currentEmployee = action.data;
        state = state.map(s => {
            if(s.id === currentEmployee.id) {
                return currentEmployee;
            }
            return s;
        });


    } else if(action.type === "DELETE_EMPLOYEE") {

        const currentEmployee = action.data;
        state = state.filter(s => s.id !== currentEmployee.id);
        
    }

    return state;
}

export default employeeReducer;