import React from 'react';
import Image from 'next/image';

const Store = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center'>
            <h1 className='text-2xl font-bold p-4'>Wholesale Beans</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4 '>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image 
                    src="https://images.pexels.com/photos/4820660/pexels-photo-4820660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='/' 
                    layout='responsive'
                    width={650}
                    height={430}
                    objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image 
                    src="https://images.pexels.com/photos/4820663/pexels-photo-4820663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='/' 
                    layout='responsive'
                    width={215}
                    height={215}
                    objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image 
                    src="https://images.pexels.com/photos/4079697/pexels-photo-4079697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='/' 
                    layout='responsive'
                    width={215}
                    height={215}
                    objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image 
                    src="https://images.pexels.com/photos/7125704/pexels-photo-7125704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='/' 
                    layout='responsive'
                    width={215}
                    height={215}
                    objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image 
                    src="https://images.pexels.com/photos/4820737/pexels-photo-4820737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='/' 
                    layout='responsive'
                    width={215}
                    height={215}
                    objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Store;