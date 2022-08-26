

//  initial state
export const Auth_INI = {
    isUserLoggedIn : false,
    user_info : {}
};


// Auth reducer
export const AuthReducer = (state, { type, payload }) => {

    switch (type) {
        case 'LOGIN_SUCCESS':
            return({
                isUserLoggedIn : true,
                user_info : payload
            });

        case 'LOGOUT':
             return({
                 isUserLoggedIn : false,
                 user_info : {}
             })
            
    
        default:
            return state
    }

}