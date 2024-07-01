import FormAction from "./FormAction";
import { useActionState } from 'react'

const UseActionStateExample = () => {
  const initialState = { message: null };

  const [state, actionForm, isPending] = useActionState(FormAction, initialState)

  return (
    <div>
      <h2>Student Information by UseActionState Hook</h2>
      <form action={actionForm} method="post">
        <input type="text" name="sname" />
        <br />
        <br />
        <button className="btn btn-primary" type="submit" name="save" disabled={isPending}>
          Save
        </button>
      </form>
      <h2 className="text-danger">{isPending ? "Loading..." : state?.message}</h2>
    </div>
  );
};

export default UseActionStateExample;
