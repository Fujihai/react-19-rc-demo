import { useState, useOptimistic } from "react";

const wait = (delay) => {
  return new Promise((res) => setTimeout(res, delay));
};

const UseOptimisticExample = () => {
  const [newName, setNewName] = useState();
  const [optimisticName, setOptimisticName] = useOptimistic(newName, (state, updateName) => updateName);

  const changeName = async (formData) => {
    const name = formData.get("sname");
    setOptimisticName(`${name} by Optimistic`)
    await wait(4000);
    setNewName(`${name} by State`);
  };

  return (
    <div>
      <h2>React 19 useOptimistic Hook Example</h2>
      <title>React 19 Example</title>
      <meta name="keywords" content={"javascript,react "} />
      <meta name="author" content={"Dr. Vipin Classes"}/>
      <form action={changeName}>
        <input type="text" name="sname" />
        <br />
        <br />
        <button type="submit" className="btn btn-danger">
          Change Name
        </button>
        {/* <h2>Name: {newName}</h2> */}
        <h2>Optimistic Name: {optimisticName}</h2>
      </form>
    </div>
  );
};

export default UseOptimisticExample;
