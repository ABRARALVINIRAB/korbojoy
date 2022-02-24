import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import Nav2 from './Nav2';

const Navigation = () => {
    const bgcolour = {
        backgroundColor: '#E5E4E2',
    }
    return (

        <>
            <div style={bgcolour}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <p>WELCOME TO WALMART MESSAGE OR REMOVE IT</p>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row-reverse bd-highlight">
                                <div class="p-2 bd-highlight">My Account</div>
                                <div class="p-2 bd-highlight">
                                    <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon> Sign In
                                </div>
                                <div class="p-2 bd-highlight">
                                    Register
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">

                                <div className="row">
                                    <div className="col-md-4">
                                        <h3>KORBOJOY</h3>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        All Categories
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        {/* <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <form class="d-flex">
                                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                                                </form>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className="row ">
                                    <div className="col-md-6">

                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Live Chat or <br />
                                        +8801742916158

                                    </div>
                                    <div className="col-md-2">
                                        <FontAwesomeIcon icon={faClover}></FontAwesomeIcon> whislist
                                    </div>
                                    <div className="col-md-2">
                                        <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon> Compare
                                    </div>
                                    <div className="col-md-2">
                                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Cart
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Nav2></Nav2>
        </>

    );
};

export default Navigation;
