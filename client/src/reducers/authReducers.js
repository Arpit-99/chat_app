const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    token: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, isSignedIn: true, ...action.payload }

        case 'SIGN_IN':
            return { ...state, isSignedIn: true, ...action.payload }

        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, ...action.payload };

        default:
            return state;
    }
}