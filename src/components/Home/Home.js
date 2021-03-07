import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const category = useContext(CategoryContext);
    const {count} = props;
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>This is Home from props: {count}</h1>
            <h2>This is Home from Context: {category}</h2>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;