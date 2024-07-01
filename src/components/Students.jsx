import FormAction from "./FormAction";
import {useFormState} from 'react-dom'

const Students = () => {
    const initialState = { message: null}
const [state, actionForm] = useFormState(FormAction, initialState)

  return (
    <div>
      <h2>Student Information</h2>
      <form action={actionForm} method="post">
        <input type="text" name='sname'/><br/><br/>
        <button className='btn btn-primary' type='submit' name='save'>Save</button>
      </form>
      <h2 className="text-danger">{state.message ? state.message : '' }</h2>
    </div>
  );
};

export default Students;
