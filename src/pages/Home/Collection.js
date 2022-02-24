import React from 'react';
import backgroundImg from '../../images/popular/bg1.jpg'
import Home from './Home';

const Collection = () => {
    const background = {
        backgroundImage: `url(${backgroundImg})`,
        height: '300px',

    }


    return (
        <>
            <div style={background}  >
                <div className='d-flex justify-content-center text-center align-items-center'>
                    <div className='p-5 m-5'>
                        <h3 className='text-white text-center'>New Collection</h3>
                        <h1 className='text-white text-center'>GET UPTO 60% OFF</h1>
                        <div className=''>
                            <button >Shop Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <Home></Home>
        </>
    );
};

export default Collection;