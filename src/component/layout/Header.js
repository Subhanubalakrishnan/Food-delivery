import React from "react";
const Header =() => {
    return(
        <>
        <nav className="navbar row sticky-top">
            <div className="col-12 col-md-3">
       <img src="/images/logo.webp" alt="logo" className="logo"/>
            </div>

            
            <div className="col-12 col-md-6 mt-2 mt-md-0">
             <div className="input-group">
            <input
            type="text"
            id="search_field"
            calssName="form-control"
            placeholder="Search Your favorite Restaurants..."
            />
            <div className="input-group-append">
                <button id="search_btn" className="btn">
                <i className="fa fa-search" aris-hidden="true"></i>
                    </button>       
                         </div>
        </div>
        </div>
{/*login*/}
<div className="col-12 col-md-3 mt-4 mt-md-0 textcenter">
    <button className="btn" id="login_btn">
        Login
    </button>
    <span className="ml-3" id="cart">
        Cart
    </span>
    <span className="ml-1" id="cart_count">
        2
    </span>
    </div> 
        </nav>
        </>
    );
};
export default Header;