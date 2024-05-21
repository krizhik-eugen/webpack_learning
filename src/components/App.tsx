import {useState} from 'react';
import * as styles from './App.module.scss'
import {Link, Outlet} from 'react-router-dom';
import About from '@/pages/about/About';
import png_example from '@/assets/penguin.png'
import jpg_example from '@/assets/workplace.jpg'
import SVGExample from '@/assets/color-samples.svg'

export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            Hello world!!!

            <div>
                <img src={png_example} height={150}/>
            </div>
            <div>
                <img src={jpg_example} height={150}/>
            </div>
            <div>
                <SVGExample className={styles.icon} height={150} width={150}/>
            </div>
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
