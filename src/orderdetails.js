import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'

class OrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.editData = this.editData.bind(this);
        this.updateApp = this.updateApp.bind(this);
        this.removeData = this.removeData.bind(this);
        this.state = {
            user: {}
        }
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <h4 className='my-3'>Order Details</h4>
                        {
                            this.props.users
                                .map(user =>
                                    <div className="d-inline-flex flex-row" style={{ margin: '0.5rem', maxWidth: "450px" }}>
                                    <div key={user.uid} className="card">
                                        <div className="card-body">
                                            <h5 className="card-title"><span className="text-primary">Name: </span> {user.name}</h5>
                                            <h5 className="card-title"><span className="text-primary">First Name: </span> {user.fname}, <span className="text-primary">Last Name: </span> {user.lname}</h5>
                                            <p className="card-text"><span className="text-primary">Order No: </span> {user.orderno}</p>
                                            {/* <p className="card-text"><span className="text-primary">Order: </span> { " " + user.order + " # " + user.items + " Nos" }</p> */}
                                            <p className="card-text"><span className="text-primary">Order: </span> {user.order}</p>
                                            <p className="card-text"><span className="text-primary">Items: </span>{user.items}, <span className="text-primary">Price: </span><i className="fa fa-inr"></i> {user.price}, <span className="text-primary">Total: </span><i className="fa fa-inr"></i> {user.total}</p>
                                            <p className="card-text"><span className="text-primary">Email: </span>{user.email}</p>
                                            <p className="card-text"><span className="text-primary">Mobole: </span>{user.phone}</p>
                                            <button onClick={(event) => this.removeData(user, event)} className="btn btn-link">Delete</button>
                                            <button onClick={(event) => this.editData(user, event)} className="btn btn-link">Edit</button>
                                        </div>
                                    </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <ModalDialog user={this.state.user} update={this.updateApp} />
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    updateApp(user) {
        if (typeof (this.props.update) === 'function') {
            console.log("updateParent OrderDList.js", user);
            this.props.update(user);
            $("#orderModal").modal({ show: false })
        }
    }

    removeData(user, e) {
        e.preventDefault();
        if (typeof (this.props.remove) === 'function') {
            console.log("Remove Data @ odlist.js", user);
            this.props.remove(user);
        }
    }

    editData(user, e) {
        e.preventDefault();
        $("#orderModal").modal({ show: true });
        this.setState({
            user: user
        });
    }
}

export default OrderDetails;