import React from 'react';
import Hero from '../components/Hero';
import Store from '../components/Store';

const shop = () => {
    return (
        <div>
            <Hero heading="Wholesale Store" message="Click below to head to our wholesale store"/>
            <Store />
        </div>
    );
};

export default shop;