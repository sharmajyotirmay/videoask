export const submitForm = (name, email) => {
    return {
        type : "SUBMIT_FORM",
        payload : {
            name : name,
            email : email
        }
    }
}