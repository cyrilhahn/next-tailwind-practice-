import React from 'react';
import ContactContent from '../components/ContactContent';
import Hero from '../components/Hero';

const contact = () => {
    return (
        <div>
            <Hero 
            heading="Get in Touch"
            message='Contact us for any questions about our tours, wholesale store and other enquiries'
            button='Contact'/>
            <ContactContent />
        </div>
    );
};

export default contact;