import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import PopularCategory from './PopularCategory';

const Nav2 = () => {
    return (

        <>
            <hr class="bg-dark text-dark" />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            <div class="p-2 bd-highlight"> <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Browse Categories
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                </ul>
                            </div></div>
                            <div class="p-2 bd-highlight">Home</div>
                            <div class="p-2 bd-highlight">About</div>
                            <div class="p-2 bd-highlight">Contact Us</div>
                            <div class="p-2 bd-highlight">Mission & vision</div>
                            <div class="p-2 bd-highlight">Vlog</div>
                            <div class="p-2 bd-highlight">Vendor</div>
                            <div class="p-2 bd-highlight">Outlet</div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="d-flex flex-row-reverse bd-highlight">
                            <div class="p-2 bd-highlight">
                                <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Track Order</div>
                            <div class="p-2 bd-highlight">
                                <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon> Daily Deals</div>

                        </div>
                    </div>
                </div>
            </div>
            <PopularCategory></PopularCategory>
        </>

    );
};

export default Nav2;