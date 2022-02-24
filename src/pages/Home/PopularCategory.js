import React from 'react';
import watch from '../../images/popular/watch.jpg';
import laptop from '../../images/popular/laptop2.jpg';
import headphone from '../../images/popular/headphone.jpg';
import camera from '../../images/popular/camera3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import Collection from './Collection';


const PopularCategory = () => {
    return (
        <>
            <div class="container">
                <h1>POPULAR CATEGORY</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                            <img class="card-img-top" src={watch} alt="" />
                            <h5 class="card-title text-center">Watch</h5>
                        </div>
                        <div className="col-md-3">
                            <img class="card-img-top" src={headphone} alt="" />
                            <h5 class="card-title text-center">Headphones</h5>
                        </div>
                        <div className="col-md-3">
                            <img class="card-img-top" src={watch} alt="" />
                            <h5 class="card-title text-center">Camera</h5>
                        </div>
                        <div className="col-md-3">
                            <img class="card-img-top" src={laptop} alt="" />
                            <h5 class="card-title text-center">laptop</h5>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div class=" mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <FontAwesomeIcon className='h-50 ' icon={faCar}></FontAwesomeIcon>

                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p >For All Orders Over $99</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div class=" mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <FontAwesomeIcon className='h-50 ' icon={faCar}></FontAwesomeIcon>

                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p >Secure Payment</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div class=" mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <FontAwesomeIcon className='h-50 ' icon={faCar}></FontAwesomeIcon>

                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p >Money Bag Gurantee</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div class=" mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <FontAwesomeIcon className='h-50 ' icon={faCar}></FontAwesomeIcon>

                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <p >Customer Support</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           <Collection></Collection>
        </>
    );
};

export default PopularCategory;