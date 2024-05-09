import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import ClassCounterTwo from './Components/ClassCounterTwo';
import ClassMouse from './Components/ClassMouse';
import ClassTimedCounter from './Components/ClassTimedCounter';
import DataFetching from './Components/DataFetching';
import EHooksCounterOne from './Components/EHooksCounterOne';
import HookMouse from './Components/HookMouse';
import HookTimedCounter from './Components/HookTimedCounter';
import HooksCounter from './Components/HooksCounter';
import HooksCounterFour from './Components/HooksCounterFour';
import HooksCounterThree from './Components/HooksCounterThree';
import HooksCounterTwo from './Components/HooksCounterTwo';
import MouseContainer from './Components/MouseContainer';
import ComponentC from './Components/ComponentC';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';

export const UserContext = React.createContext()
export const AreaContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CounterThree/>
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
