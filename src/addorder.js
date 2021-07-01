import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class AddOrder extends React.Component {
    constructor(props) {
        super(props);
        this.orderNumber = this.orderNumber.bind(this);
        this.state = {
            users: [],
            startDate: new Date()
        };
        /*this.uid = React.createRef();
        this.name = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.order = React.createRef();
        this.orderno = React.createRef();
        this.items = React.createRef();
        this.price = React.createRef();
        this.total = React.createRef();
        this.startdate = React.createRef();*/
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {

        var newOrderNumber = this.orderNumber(this.props.users);

        return (
            <div className='row'>
                <div className='col-xl-12'>
                    {/*
                {JSON.stringify(this.props.users,null, 2)}
                {sortedUsers}<br />
                {highestOrder}<br />
                {newOrderNumber}<br />
                */}
                </div>
                <div className='col-xl-12'>
                    <h4 className='my-3'>Add Order</h4>
                    <form>
                        <div className="form-row">
                            <input type='hidden' ref='uid'/>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input type="text" ref='name' className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" ref='email' className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile / Phone No</label>
                                <input type="number" max={999999999999} ref='phone' className="form-control"
                                       placeholder="Mobile / Phone No"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Order Name</label>
                                <input type="text" ref="order" className="form-control" placeholder="Oder Name"/>
                                <div className="danger"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder No</label>
                                <input type="number" ref="orderno" className="form-control"
                                       value={String(this.orderNumber(this.props.users))} readOnly
                                       placeholder="Oder No"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Number of Items</label>
                                <input type="number" ref="items" className="form-control"
                                       placeholder="Number of Items"/>
                                <div className="danger"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Item Price</label>
                                <input type="number" ref="price" className="form-control" placeholder="Item Cost"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Date</label>
                                <DatePicker className="form-control react-datepicker__input-container"
                                            selected={this.state.startDate} ref='startdate'
                                            onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.addUser}>Save</button>
                    </form>
                    {/* <div><pre>{JSON.stringify(newOrderNumber, null, 2) }</pre></div> */}
                </div>
            </div>
        )
    }

    orderNumber = function (users) {
        let sortedUsers = [];
        if (users.length !== 0) {
            for (let i = 0; i < users.length; i++) {
                sortedUsers[i] = users[i].orderno;
            }
            sortedUsers.sort(function (a, b) {
                return a - b
            });
            let highestOrder = sortedUsers[sortedUsers.length - 1];
            let orderNumber = parseInt(highestOrder) + 1;
            return orderNumber;
        } else {
            return 3001
        }
    }

    addUser = (event) => {
        // console.log("Added form details");
        let orderno = parseInt(this.refs.orderno.value);
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        let order = this.refs.order.value;
        let status = "Not Completed";
        let items = this.refs.items.value;
        let price = this.refs.price.value;
        let uid = parseInt(this.refs.orderno.value);
        let startDate = this.state.startDate
        const condition = (name && email && phone && order && status && orderno && items && price && startDate);
        if (!!uid) {
            // const uid = new Date().getTime().toString();
            const user = {
                "name": name,
                "email": email,
                "phone": phone,
                "order": order,
                "status": status,
                "orderno": parseInt(orderno),
                "items": parseInt(items),
                "price": parseInt(price),
                "uid": parseInt(uid),
                "date": startDate.toString()
            }
            this.props.action(user);
            // console.log("action user", user);
        }

        this.refs.uid.value = '';
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.phone.value = '';
        this.refs.order.value = '';
        this.refs.items.value = '';
        this.refs.price.value = '';
        this.refs.startdate.value = '';
    }

    add = () => { // remove this sample child function to add order
        const user1 = {
            "email": "email@sample.com",
            "items": "200",
            "name": "Ravi Test",
            "order": "Ravi Books",
            "status": "Not Completed",
            "orderno": "8001",
            "phone": "8123456789",
            "price": "50",
            "total": 0,
            "date": "03/4/20",
            "uid": "1675303448945"
        }
        this.props.action(user1);

        /* const { users }  = this.state;
        users.push(user);
        this.setState({ users }); */
        // this.setState({ users });
    }
}

export default AddOrder;
