import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

// step 12, update and utilize category from shipment
const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Shipment {category}</h1>
            <button onClick={() => setCategory(category+2)}>Increment from Category</button>
        </div>
    );
};

export default Shipment;