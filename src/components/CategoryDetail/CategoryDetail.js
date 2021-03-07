import React from 'react';
// import { CategoryContext } from '../../App';, { useContext }

// step 5, call useContext() and import it
// step 6, use CategoryContext in that and import it.

// 6, destruct name from product, next in categories.js
const CategoryDetail = (props) => {
    // const category = useContext(CategoryContext);
    // const {count} = props;
    const {name} = props.product; 
    
    return (
        <div>
            <h4>This Is category detail:</h4>
            <h6>Selected Product: {name}</h6>
        </div>
    );
};

export default CategoryDetail;