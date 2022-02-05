import {useReducer} from "react";

const reduser = (state, action)=>{
    state={...state, count2:state.count2+1}
state={...state, count3:state.count2*2}
switch (action.tupe){
    case 'inc':
        return {...state, count1:state.count1+1}
    case 'dec':
        return {...state, count1:state.count1-1}
    case 'reset':
        return {...state, count1: action.payload}

}
    return state
}


function App() {
    const [state, dispatch] = useReducer(reduser,{count1:0, count2:0, count3:0 })

      

  return (
    <div>
       <div> {state.count1}</div>
        <div> {state.count2}</div>
        <div> {state.count3}</div>
        <button onClick={()=>dispatch({tupe:'inc'})}>Inc</button>
        <button onClick={()=>dispatch({tupe:'dec'})}>Dec</button>
        <button onClick={()=>dispatch({tupe:'reset', payload:0})}>Reset</button>
    </div>
  );
}

export default App;
