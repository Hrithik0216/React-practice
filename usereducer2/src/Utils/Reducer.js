export const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case "LOGOUT":
            return {
                ...state,
                loggedIn: false
            }
        case "SUCCESS":
            return {
                ...state,
                password: "",
                loggedIn: true,
                error: "Success"
            }
        case "ERROR":
            return {
                ...state,
                error: "Invalid password or username",
                user: "",
                password: ""
            }
        case "USERNAME": return {
            ...state,
            user: action.value
        }
        case "PASSWORD": return {
            ...state,
            password: action.value
        }
        default: return state
    }

}
