import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './Components/StateHook/ClassCounter';
import ClassCounterTwo from './Components/StateHook/ClassCounterTwo';
import ClassMouse from './Components/EffectHook/ClassMouse';
import ClassTimedCounter from './Components/EffectHook/ClassTimedCounter';
import DataFetching from './Components/EffectHook/DataFetching';
import EHooksCounterOne from './Components/EffectHook/EHooksCounterOne';
import HookMouse from './Components/EffectHook/HookMouse';
import HookTimedCounter from './Components/EffectHook/HookTimedCounter';
import HooksCounter from './Components/StateHook/HooksCounter';
import HooksCounterFour from './Components/StateHook/HooksCounterFour';
import HooksCounterThree from './Components/StateHook/HooksCounterThree';
import HooksCounterTwo from './Components/StateHook/HooksCounterTwo';
import MouseContainer from './Components/StateHook/MouseContainer';
// import ComponentC from './Components/ContextHook/ComponentC';
// import CounterOne from './Components/ReducerHook/CounterOne';
// import CounterTwo from './Components/ReducerHook/CounterTwo';
import CounterThree from './Components/ReducerHook/CounterThree';
import ComponentA from './Components/Context_ReducerHooks/ComponentA';
import ComponentB from './Components/Context_ReducerHooks/ComponentB';
import ComponentC from './Components/Context_ReducerHooks/ComponentC';
import DataFetchingOne from './Components/EffectHook/DataFetchingOne';
import DataFetchingTwo from './Components/ReducerHook/DataFetchingTwo';
import ParentComponent from './Components/CallbackHook/ParentComponent';
import Counter from './Components/MemoHook/Counter';
import FocusInput from './Components/RefHook/FocusInput';
import ClassTimer from './Components/RefHook/ClassTimer';
import HookTimer from './Components/RefHook/HookTimer';
import DocTitleOne from './Components/CustomHooks/DocTitleOne';
import DocTitleTwo from './Components/CustomHooks/DocTitleTwo';
import CounterOne from './Components/CustomHooks/CounterOne';
import CounterTwo from './Components/CustomHooks/CounterTwo';
import UserForm from './Components/CustomHooks/UserForm';

export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// export const UserContext = React.createContext()
// export const AreaContext = React.createContext()

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserForm/>
      {/* <CounterOne/>
      <CounterTwo/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <HookTimer/> */}
      {/* <ClassTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <DataFetchingTwo/> */}
      {/* <DataFetchingOne/> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <h1>Count - {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={'Anushika'}>
        <AreaContext.Provider value={'Noida'}>
         <ComponentC/>
        </AreaContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <HookTimedCounter/> */}
      {/* <ClassTimedCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <EHooksCounterOne/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HooksCounterFour/> */}
      {/* <HooksCounterThree/> */}
      {/* <HooksCounterTwo/> */}
      {/* <HooksCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
