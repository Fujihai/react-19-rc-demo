import { Suspense, use } from "react";
import UseContextExample from "./UseContextExample";
const FetchQuotes = () => {
  const quotesInfo = use(
    fetch("https://dummyjson.com/quotes").then((res) => res.json())
  );
  return JSON.stringify(quotesInfo.quotes);
};

const UseHookExample = () => {
  return (
    <div>
      <h3>React 19 Use() Hook Example</h3>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <FetchQuotes />
      </Suspense> */}
      <UseContextExample/>
    </div>
  );
};

export default UseHookExample;
