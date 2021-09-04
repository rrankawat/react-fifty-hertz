import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants'
import axios from 'axios'

export const listUsers = () => async dispatch => {
  try {
    dispatch({ type: USER_LIST_REQUEST })

    const { data } = await axios.get(
      `https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users`
    )

    dispatch({ type: USER_LIST_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    })
  }
}
