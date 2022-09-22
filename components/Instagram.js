import React from 'react';
import InstagramImg from './InstagramImg'
import ig1 from '../public/assets/social/ig1.jpg'
import ig2 from '../public/assets/social/ig2.jpg'
import ig3 from '../public/assets/social/ig3.jpg'
import ig4 from '../public/assets/social/ig4.jpg'
import ig5 from '../public/assets/social/ig5.jpg'
import ig6 from '../public/assets/social/ig6.jpg'




const Instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold'>Follow us on Instagram</p>
            <p className='pb-4'>@Instagram</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImg={ig1}/>
                <InstagramImg socialImg={ig2}/>
                <InstagramImg socialImg={ig3}/>
                <InstagramImg socialImg={ig4}/>
                <InstagramImg socialImg={ig5}/>
                <InstagramImg socialImg={ig6}/>
            </div>
        </div>
    );
};

export default Instagram;