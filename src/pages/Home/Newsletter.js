import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Newsletter = () => {
    const colour = {
        backgroundColor: 'gray',
        width: '100%',
        
    }
    return (
        <>
            <div style={colour} >
                <div className="row">
                    <div className="col-md-6 p-2">
                        <h1>
                            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>Email:abraralvinirab@gmail.com
                        </h1>
                    </div>
                    <div className="col-md-6 p-2  ">
                        <nav class="navbar ">
                            <div class="container-fluid">
                                <form style={colour} class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Subscribe" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Subscribe </button>
                                    <FontAwesomeIcon className='p-2 m-1' icon={faSignIn}></FontAwesomeIcon>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Newsletter;