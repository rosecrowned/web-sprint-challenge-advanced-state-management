import axios from 'axios';

export const START_FETCH='START_FETCH'
export const SUCCESSFUL_API = 'SUCCESFUL_API'
export const FAILED_API = 'FAILED_API'
export const ADD_SMURF = 'ADD_SMURF'
export const ERROR_MESSAGE = 'ERRPOR_MESSAGE'
export const FETCH_SMURFS = 'FETCH_SMURFS'


export const fetchSmurfs = () => dispatch => {
    dispatch({type:START_FETCH})
    axios.get('http://localhost:3333/smurfs')
        .then(res=> {
                dispatch({type: SUCCESSFUL_API, payload: res.data})
        })
        .catch(err=> {
            console.log(type:ERROR_MESSAGE, payload: "error!")
        })
    return(type:FETCH_SMURFS)
}

export const addSmurf = (newSmurf) => {
    return({type:ADD_SMURF, payload: newSmurf})
}

export const errorMessage = () => {
    return({type: ERROR_MESSAGE, payload:"Oops, something is missing!"})
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.