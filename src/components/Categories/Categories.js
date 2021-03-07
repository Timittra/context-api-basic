/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import {CategoryContext} from '../../App'

const allProducts = [
{name: 'Lenovo', category:'laptop'},{name: 'Asus', category:'laptop'}, {name: 'Dell', category:'laptop'}, 
{name: 'Samsung', category:'mobile'},{name: 'Nokia', category:'mobile'}, {name: 'Apple', category:'mobile'}, 
{name: 'Canon', category:'camera'},{name: 'Nikkon', category:'camera'}, {name: 'Sony', category:'camera'}
]

// 3, useContext() and CategoryContext using in this component
// 4, creating allProducts
// 5, create useState for products and pass them to CategoryDetail, next in the categoryDetail,js
// 7, useEffect(), when context category will change so that it's dependency is category
// 8, filter out the products category wise (context category and all products category), must use toLowerCase() to avoid unmatched condition
const Categories = () => {
    // const {count} = props;
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        console.log(category);
        const matchedProducts = allProducts.filter(pd => pd.category.toLocaleLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category]);

    return (
        <div>
            <h2>Select your Category: {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;