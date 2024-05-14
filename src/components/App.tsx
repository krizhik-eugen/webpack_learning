import './App.scss'
import {useState} from 'react';


export const App = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            Hello world!!!

            <h3>{count}</h3>

            <button onClick={()=> setCount(prev => prev+1)}><span>Add</span></button>
        </div>
    );
};
