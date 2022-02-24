import React from 'react';
import bg2 from '../../images/bg2.jpeg';
import image from '../../images/popular/headphone.jpg';
import watch from '../../images/popular/watch.jpg';
import laptop from '../../images/popular/laptop.jpg';
import vendor from '../../images/popular/vendor.jpg'
import client from '../../images/popular/client.jpg'
import Newsletter from './Newsletter';
const Home = () => {
    const background = {
        backgroundImage: `url(${bg2})`,
        // height: '1300px',
        backgroundSize: 'cover',
        overflow: 'hidden',

    }
    const forCard = {
        // height: '100px',

    }
    const colour = {
        backgroundColor: '#D2691E',
    }
    return (
        <>
            <div className='container' style={background}>
                {/* Flash sell div */}
                <div className='d-flex justify-content-between'>
                    <div>
                        <h1>Flash Sale</h1>
                    </div>
                    <div>
                        <h1>Finding In-00:00</h1>
                    </div>
                    <div>
                        <h1>Shop Now</h1>
                    </div>
                </div>

                <div className='d-flex justify-content-between '>
                    <div class="card p-1 " style={forCard}>
                        <img src={image} class="card-img-top" alt="" />

                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={image} class="card-img-top" alt="" />

                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={image} class="card-img-top" alt="" />

                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={image} class="card-img-top" alt="" />

                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={image} class="card-img-top" alt="" />

                    </div>
                </div>
                {/* feature div */}
                <div className='d-flex justify-content-start'>
                    <div>
                        <button style={colour} className='p-1 m-2 text-white'>Features</button>
                    </div>
                    <div>
                        <button className='p-1 m-2 '>New Arrivals</button>
                    </div>
                    <div>
                        <button className='p-1 m-2 '>Top Sell</button>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div class="card p-1" style={forCard}>
                        <img src={laptop} class="card-img-top" alt="" />
                        <h5 class="card-title">Card title</h5>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h1>$20</h1>
                            </div>
                            <div>
                                <h1>**</h1>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={laptop} class="card-img-top" alt="" />
                        <h5 class="card-title">Card title</h5>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h1>$20</h1>
                            </div>
                            <div>
                                <h1>**</h1>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={laptop} class="card-img-top" alt="" />
                        <h5 class="card-title">Card title</h5>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h1>$20</h1>
                            </div>
                            <div>
                                <h1>**</h1>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1" style={forCard}>
                        <img src={laptop} class="card-img-top" alt="" />
                        <h5 class="card-title">Card title</h5>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h1>$20</h1>
                            </div>
                            <div>
                                <h1>**</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* list of vendor */}
                <div>

                    <h1 className='text-center'>LIST OF VENDOR</h1>
                    <div className='d-flex justify-content-between '>
                        <div class="card p-1 " style={forCard}>
                            <img src={vendor} class="card-img-top" alt="" />

                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={vendor} class="card-img-top" alt="" />

                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={vendor} class="card-img-top" alt="" />

                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={vendor} class="card-img-top" alt="" />

                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={vendor} class="card-img-top" alt="" />

                        </div>
                    </div>
                </div>
                {/* clients */}
                <div>
                    <h1> Our Client</h1>
                    <div className='d-flex justify-content-between' >
                        <div class="card p-1" style={forCard}>
                            <img src={client} class="card-img-top" alt="" />
                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={client} class="card-img-top" alt="" />
                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={client} class="card-img-top" alt="" />
                        </div>
                        <div class="card p-1" style={forCard}>
                            <img src={client} class="card-img-top" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;

