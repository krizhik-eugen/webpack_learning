import {useState} from 'react';
import * as styles from './App.module.scss'
import {Link, Outlet} from 'react-router-dom';
import About from '@/pages/about/About';


export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            Hello world!!!

            <br/>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>

            <h3 className={styles.value}>{count}</h3>

            <button
                className={styles.btn}
                onClick={() => setCount(prev => prev + 1)}>
                <span>Add</span>
            </button>
            <Outlet/>
            <About/>
        </div>
    );
};
