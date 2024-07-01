import { useState, useTransition } from "react";

const UseTransitionExample = () => {
  const [quotes, setQuotes] = useState();
  const [isPending, startTransition] = useTransition();

  const fetchQuotes = () =>
    startTransition(async () => {
      const quotesInfo = await fetch("https://dummyjson.com/quotes");
      const quotes = await quotesInfo.json();
      setQuotes(quotes);
    });

  return (
    <div>
      <h2>Use Transition Hook Example</h2>
      <button className="btn btn-warning" onClick={fetchQuotes} disabled={isPending}>
        Load Quotes
      </button>
      <div>{isPending ? <h2>Loading...</h2> : JSON.stringify(quotes)}</div>
    </div>
  );
};

export default UseTransitionExample;
