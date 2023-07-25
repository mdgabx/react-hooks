import React from 'react';
import './App.css';
import YupForm from './components/ReactHookForm/YupForm';
// import { YoutubeForm } from './components/ReactHookForm/YoutubeForm';
// import YupValidation from './components/FormValidation/YupValidation';

// import Scroll from './components/ReactLoaderSpinner';
// import CounterMemo from './CounterMemo';
// import FocusInput from './components/FocusInput';
// import HookTimer from './components/HookTimer';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
// import DataFetchingOne from './components/DataFetchingOne';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import ParentComponent from './components/ParentComponents';

// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
// import CounterOne from './components/CounterOne';
// import ComponentC from './components/ComponentC';

// export const UserContext = React.createContext();
// export const JobContext = React.createContext();

// export const CountContext = React.createContext();

// import DataFetching from './components/DataFetching';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
// import HookCounterThree from './components/HookCounterThree';
// import { Counter } from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import Home from './components/Home'
// import Modal from './components/Modal'
// import HookMouse from './components/HookMouse'
// import MouseContainer from './components/MouseContainer'

// const initialValue = 0
// const reducer = (state, action) => {
//   switch(action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialValue
//     default: 
//       return state;
//   }
// }


function App() {
  // const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="App">
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <CounterMemo /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      {/* <Scroll /> */}
      {/* <YupValidation /> */}
      {/* <YoutubeForm /> */}
      <YupForm />
    </div>


    // <CountContext.Provider value={{countState: count, dispatchCount: dispatch}} >
    //   <div className="App">
    //     {/* <Modal />
    //     <Home>
    //     </Home> */}

    //     {/* <Counter /> */}
    //     {/* <HookCounter /> */}
    //     {/* <HookCounterOne /> */}
    //     {/* <HookCounterTwo /> */}
    //     {/* <HookCounterThree /> */}
    //     {/* <HookCounterFour /> */}
    //     {/* <HookMouse /> */ }
    //     {/* <MouseContainer /> */}
    //     {/* <IntervalHookCounter /> */}
    //     {/* <DataFetching /> */}

    //     {/* <UserContext.Provider value={'Mark'}>
    //       <JobContext.Provider value={'SS'}>
    //         <ComponentC />
    //       </JobContext.Provider>
    //     </UserContext.Provider> */}

    //     {/* <CounterOne /> */}
    //     {/* <CounterTwo /> */}
    //     {/* <CounterThree /> */}


    //     <p> Count - {count} </p>
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
  )
}

export default App;
