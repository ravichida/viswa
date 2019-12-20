import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className='col-xl-12'>
                        <h2>Viswa Order Details</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="nav nav-tabs">
                            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="/olist" className="nav-link">Orders</a></li>
                            <li className="nav-item"><a href="/od" className="nav-link">Order Details</a></li>
                            <li className="nav-item"><a href="/add" className="nav-link">Add Order</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;