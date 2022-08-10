const initialValue = {
    list : []
}

const submitForm = (state = initialValue, action) => {
    switch (action.type) {
        case "SUBMIT_FORM":

            const [name , email] = action.payload

            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        name : name,
                        email : email
                    }
                ]
            }

        default:
            return state;
    }
}

export default submitForm;