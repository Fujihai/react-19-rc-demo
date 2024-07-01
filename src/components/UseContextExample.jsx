import { use } from 'react';
import { Context } from '../App'

const UseContextExample = () => {
    const name = use(Context)

    return (<div>
        <h1>Name: {name}</h1>
    </div>)
}

export default UseContextExample;