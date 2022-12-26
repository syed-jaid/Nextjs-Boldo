import React from 'react';

const nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Product</a></li>
                    <li><a></a></li>
                    <li><a>Services</a></li>
                    <li><a></a></li>
                    <li><a>About</a></li>
                    <li><a></a></li>
                    <button className="btn btn-outline lowercase">Log In</button>
                </ul>
            </div>
        </div>
    );
};

export default nav;