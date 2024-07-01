/* eslint-disable react/prop-types */
import FormAction from "./FormAction";
import { useFormState, useFormStatus } from "react-dom";

const FormStatusFun = ({ state }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <input type="text" name="sname" />
      <br />
      <br />
      <button className="btn btn-primary" type="submit" name="save" disabled={pending}>
        Save
      </button>
      <h2 className="text-danger">{pending ? 'Loading ...' : state.message}</h2>
    </div>
  );
};

const UseFormStatusExample = () => {
  const initialState = { message: null };
  const [state, actionForm] = useFormState(FormAction, initialState);

  return (
    <div>
      <h2>Student Information</h2>
      <form action={actionForm} method="post">
        <FormStatusFun state={state}/>
      </form>
    </div>
  );
};

export default UseFormStatusExample;
