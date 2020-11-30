export const addEmployee = (employee) => {
    return {
        type: "ADD_EMPLOYEE",
        data: employee
    };
}

export const deleteEmployee = (employee) => {
    return {
        type: "DELETE_EMPLOYEE",
        data: employee
    };
}