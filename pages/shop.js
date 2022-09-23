import React from 'react';
import Hero from '../components/Hero';
import Store from '../components/Store';

const shop = () => {
    return (
        <div>
            <Hero heading="Wholesale Store" message="Click below to head to our wholesale store. We offer a wide variety of beans and roast levels" button='Shop'/>
            <Store />
        </div>
    );
};

export default shop;