import axios from "axios";
import {USER_REGUEST,USER_REGUEST_SUCCESS,USER_REGUEST_FAILED} from '../types'
export const UsersList = () => {
  return async (dispatch) => {
    try {
          dispatch({
              type:USER_REGUEST
          })
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
          console.log(res.data)
          dispatch({
              type:USER_REGUEST_SUCCESS,
              payload:res.data
          })
    } catch (error) {
        dispatch({ 
            type:USER_REGUEST_FAILED,
            payload:error.message
        })
    }
  };
};
