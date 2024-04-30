import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    console.log(state,action);
    if (action.type === "INCREMENT" && state < 10) {
        return state + 1;
    }
    else {
        return state - 1;
    }
}

const Reducer = () => {
   const [state, dispatch] =  useReducer(reducer, initialState);
    // Reducers are pure funcs that take in a state & action & return a new state
// const [state, dispatch] = useReducer(first, second, third)
  return (
    <div>
        <p>{state}</p>
        <div>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Inc</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Dec</button>
        </div>
    </div>
  )
}

export default Reducer