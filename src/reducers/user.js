import {LOGIN_SUCCES, LOGIN_FAIL, LOGOUT} from "../constants";

const initialState = {
  userName: '',
  error: '',
  auth: false
};

export default function user(state = initialState, action) {

  switch(action.type) {
    case LOGIN_SUCCES:
      return { ...state, userName: action.payload.userName, auth: action.payload.auth, error: '' }

    case LOGOUT:
          return {...state, auth: action.payload, error: ''}

    case LOGIN_FAIL:
      return { ...state, error: action.payload.message }

    default:
      return state
  }

}
