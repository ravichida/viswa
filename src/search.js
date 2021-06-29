import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'
import moment from 'moment';

class Search extends React.Component {

    searchStyle = {
        fontSize: "24px",
        align: "right",
        textAlign: "right",
        display: "block",
        paddingTop: "10px"
    }

    constructor(props) {
        super(props);
        this.editData = this.editData.bind(this);
        this.update = this.update.bind(this);
        this.removeData = this.removeData.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            searchString: ''
        }
    }

    handleChange = (e) => {
        this.setState({searchString: e.target.value});
    }

    render() {
        var libraries = this.props.users,
            searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            libraries = libraries.filter(function (i) {
                return i.name.toLowerCase().match(searchString);
            });
        }
        return (
            <div>
                <div className='row' style={{margin: "20px 0 15px 0"}}>
                    <div className='col-sm-3 col-md-3'><i style={this.searchStyle} className="fas fa-search"> Search</i></div>
                    <div className='col-sm-8 col-md-8'><input type="text" className="form-control form-control-lg"
                                                     value={this.state.searchString} onChange={this.handleChange}
                                                     placeholder="Type here..."/></div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12' ref={this.dflex}>
                        {/*<div className="searchContainer col-xl-6 col-md-6">*/}
                        {/*</div>*/}
                        <div className="d-flex flex-wrap justify-content-center">
                            {libraries.map(user =>
                                <div
                                    key={user.orderno}
                                    className="card-deck pt-1 mb3"
                                    style={{margin: "0.5rem auto", width: "336px"}}
                                    id={user.uid}
                                >
                                    <div className="card text-dark d-flex align-items-stretch" style={{maxWidth: "336px"}}>
                                        <div className="card-body">
                                            <h5 className="card-title"><span
                                                className="text-danger">Name: </span> {user.name}</h5>
                                            <p className="card-text"><span
                                                className="">Order No: </span> {user.orderno}</p>
                                            <p className="card-text"><span
                                                className="">Order: </span> {user.order}</p>
                                            <p className="card-text"><span
                                                className="">Items: </span>{user.items}, <span
                                                className="">Price: </span><i
                                                className="fa fa-inr"></i> {user.price}, </p>
                                            <p className="card-text"><span
                                                className="">Total: </span><i
                                                className="fa fa-inr"></i> {user.items * user.price}</p>
                                            <p className="card-text"><span
                                                className="">Email: </span>{user.email}</p>
                                            <p className="card-text"><span
                                                className="">Mobole: </span>{user.phone}</p>
                                            <p className="card-text"><span
                                                className="">Start Date: </span>{moment(user.startdate).format('DD/MM/YYYY')}
                                            </p>
                                            <button type="button" className="btn btn-primary"
                                                    onClick={(event) => this.editData(user, event)}>Edit
                                            </button>
                                            <button type="button" className="btn btn-danger ml-3"
                                                    onClick={(event) => this.removeData(user, event)}>Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <ModalDialog user={this.state.user} update={this.update}/>
                    </div>
                </div>
            </div>
        );
    }

    update(order) {
        if (typeof(order) === 'object' && typeof(this.props.update) === 'function') {
            // console.log("update user search file", user);
            this.props.update(order);
            $("#orderModal").modal({show: false});
            $(".modal-backdrop").remove();
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
        $("#orderModal").modal({show: true});
        this.setState({
            user: user
        });
    }

}

export default Search;

