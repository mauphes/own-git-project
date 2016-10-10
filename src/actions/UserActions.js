import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCES, LOGIN_FAIL} from "../constants";

export function handleLogin() {

  return function(dispatch) {

    dispatch({
      type: LOGIN_REQUEST
    })

    VK.Auth.login((r) => { // eslint-disable-line no-undef
      if (r.session) {
        let username = r.session.user.first_name;

        dispatch({
          type: LOGIN_SUCCES,
          payload: username
        })

      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    },4); // запрос прав на доступ к photo
  }

}
export function handleLoginFB() {

  return function(dispatch) {

    dispatch({
      type: LOGIN_REQUEST
    })

    FB.login(function(response){
      if(response){
        FB.api(
          response.authResponse.userID,
          function (response) {
            if (response && !response.error) {
              let username = response.name
              dispatch({
                type: LOGIN_SUCCES,
                payload: username
              })
            }
          }
        );
      }
    });
  }

}
