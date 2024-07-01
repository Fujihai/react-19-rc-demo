import React, { useRef } from "react";
import Students from "./components/Students";
import UseActionStateExample from "./components/UseActionStateExample";
import UseFormStatusExample from "./components/UseFormStatusExample";
import UseHookExample from "./components/UseHookExample";
import UseTransitionExample from "./components/UseTransitionExample";
import UseOptimisticExample from "./components/UseOptimisticExample";
import ForwardRefExample from "./components/ForwardRefExample";

// https://www.youtube.com/playlist?list=PLDtWoQ-cxqiy6pnpHBy6SRpl2wuDN9aHs

export const Context = React.createContext();

function App() {
  const ref = useRef()

  const setFocus = () => {
    ref.current?.focus()
  }

  return (
    <div>
      <h2 className="text-center m-3">React 19 RC Updates</h2>
      {false && <Students />}
      {false && <UseFormStatusExample />}
      {false && <UseActionStateExample />}
      {false && <UseTransitionExample />}
      {false && <Context value={'fujihai'}>
        <UseHookExample />
      </Context>}
      {false && <UseOptimisticExample />}
      <div>
        <ForwardRefExample ref={ref} label={'Please enter your name'}/>
        <button type="submit" onClick={setFocus}>focus</button>
      </div>
      
    </div>
  );
}

export default App;
