import myapi from '../apis/myapi';

// video #165
export const signUp = (formData) => async dispatch => {
    const response = await myapi.post("/users/signup", formData);
    const user = response.data.user;
    const token = response.data.token;
    dispatch({
        type: "SIGN_UP",
        payload: { token, userId: user._id }
    })
}
