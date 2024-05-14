import React from 'react';

export const App = () => {

    const [count, setCount] = React.useState(0);

    return (
        <div>
            Hello world!!!

            <h3>{count}</h3>

            <button onClick={()=> setCount(prev => prev+1)}>Add</button>
        </div>
    );
};
