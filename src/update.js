import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = { readonly: true };
        this.updateChange = this.updateChange.bind(this);
        this.updateField = this.updateField.bind(this);
        this.uid = React.createRef();
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.order = React.createRef();
        this.orderno = React.createRef();
        this.items = React.createRef();
        this.price = React.createRef();
        this.total = React.createRef();

        this.state = {
            user: {
                uid: '',
                fname: '',
                lname: '',
                email: '',
                phone: '',
                order: '',
                orderno: '',
                items: 0,
                price: 0,
                total: 0
            }
        }

    }

    state = {
        startDate: new Date()
      };
    
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };



    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.setState({ user: nextProps.user })
        }
    }
    updateField = (name, e) => {
        e.preventDefault();
        // console.log("Field Update", name, e.target.value);
        this.setState({
            user: {
                ...this.state.user,
                [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            }
        });
    }

    updateChange = (event) => {
        /* event.preventDefault();
        if (typeof this.props.update === 'function') {
            let user = {};
            user = { ...this.state.user, name: this.state.user.fname + " " + this.state.user.lname };
            console.log("update Change @ update.js", user);
            this.props.update(user);

        } */
    }
    updateBtn = (event) => {
        event.preventDefault();
        this.setState({
            showUpdateBtn: !this.state.showUpdateBtn,
            readonly: "readonly"
        });
    }

    render() {
        // console.log("updatejs", this.props.user);
        // readOnly={this.props.user}
        return (
            <div className='row'>
                <div className='col-xl-12'>
                    <form>
                        <div className="form-row">
                            <input type='hidden' ref={this.uid} value={this.state.user.uid || ''} />
                            <div className="form-group col-md-6">
                                <label>Oder No</label>
                                <input type="text" ref={this.orderno} value={this.state.user.orderno || ''} onChange={(e) => this.updateField("orderno", e)} className="form-control" placeholder="Oder No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder Name</label>
                                <input type="text" ref={this.order} value={this.state.user.order || ''} onChange={(e) => this.updateField("order", e)} className="form-control" placeholder="Oder Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Number of Items</label>
                                <input type="number" ref={this.items} value={this.state.user.items || ''} onChange={(e) => this.updateField("items", e)} className="form-control" placeholder="Number of Items" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Item Price</label>
                                <input type="number" ref={this.price} value={this.state.user.price || ''} onChange={(e) => this.updateField("price", e)} className="form-control" placeholder="Item Cost" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input type="text" ref={this.name} value={this.state.user.name || ''} onChange={(e) => this.updateField("name", e)} className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" ref={this.email} value={this.state.user.email || ''} onChange={(e) => this.updateField("email", e)} className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile / Phone No</label>
                                <input type="number" ref={this.phone} value={this.state.user.phone || ''} onChange={(e) => this.updateField("phone", e)} className="form-control" placeholder="Mobile / Phone No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Date</label>
                                <DatePicker selected={this.state.startDate} ref='oDate' onChange={this.handleChange} />
                                {/* <input type="text" ref='date' className="form-control" placeholder="MM/DD/YYYY" /> */}
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.updateChange} data-toggle="modal" data-target="#orderModal" data-show="false">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Update;

function UpdateBtn(props) {
    return <button type="button" className="btn btn-primary">Save</button>
}
