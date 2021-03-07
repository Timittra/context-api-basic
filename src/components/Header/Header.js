import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

// step 8, we can use props and context with each other. category and setCount
// step 10, destruct context as array 


// 2, create 3 buttons for laptop, mobile, camera, next in Categories.js
const Header = () => {
    const [category,setCategory] = useContext(CategoryContext);
    // const {setCount} = props;
    
    return (
        <div>
            <h1>This is header: {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
            {/* <button onClick={() => setCategory(category+1)}>Increment</button> */}
        </div>
    );
};

export default Header;