import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'

class OrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.editData = this.editData.bind(this);
        this.updateApp = this.updateApp.bind(this);
        this.removeData = this.removeData.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.state = {
            user: {},
            searchUsers: {}
        }
    }

    removeData(user) {
        if (typeof (this.props.remove) === 'function') {
            this.props.remove(user);
        }
    }

    render() 
    {
        return (
            <div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <h4 className='my-3'>Search Details</h4>
                        {
                            this.props.users
                                .map(user =>
                                    <div key={user.orderno} className="d-inline-flex flex-row"
                                        style={{ margin: '0.5rem', maxWidth: "450px" }} id={user.uid}>
                                        <div className="card-deck pt-1 mb3">
                                            <div className="card text-dark d-flex align-items-stretch">
                                                <div className="card-body text-primary">
                                                    <h5 className="card-title"><span
                                                        className="text-danger">Name: </span> {user.name}</h5>
                                                    <h5 className="card-title"><span className="">First Name: </span> {user.fname}, <span
                                                        className="">Last Name: </span> {user.lname}</h5>
                                                    <p className="card-text"><span
                                                        className="">Order No: </span> {user.orderno}</p>
                                                    <p className="card-text"><span
                                                        className="">Order: </span> {user.order}</p>
                                                    <p className="card-text"><span
                                                        className="">Items: </span>{user.items}, <span
                                                            className="">Price: </span><i
                                                                className="fa fa-inr"></i> {user.price}, <span
                                                                    className="">Total: </span><i
                                                                        className="fa fa-inr"></i> {user.total}</p>
                                                    <p className="card-text"><span
                                                        className="">Email: </span>{user.email}</p>
                                                    <p className="card-text"><span
                                                        className="">Mobole: </span>{user.phone}</p>
                                                    <button type="button" className="btn btn-danger" onClick={(event) => this.removeData(user, event)}>Delete</button>
                                                    <button type="button" className="btn btn-primary ml-3" onClick={(event) => this.editData(user, event)}>Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
    updateSearch(user){
        console.log("updateSearch usr", user);

    }
    updateApp(user) {
        if (typeof (this.props.update) === 'function') {
            console.log("updateParent OrderDList.js", user);
            this.props.update(user);
            $("#orderModal").modal({ show: false });
            $(".modal-backdrop").remove();
        }
    }

    editData(user, e) {
        console.log("editdata fun");
        e.preventDefault();
        $("#orderModal").modal({ show: true });
        this.setState({
            user: user
        });
    }
}

export default OrderDetails;

