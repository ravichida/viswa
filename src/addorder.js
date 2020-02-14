import React from 'react';
import DatePicker from "react-datepicker";

import "../node_modules/react-datepicker/dist/react-datepicker.css"


class AddOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
          };
    }

    state = {
        startDate: new Date()
      };

    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    
    render() {
      return (
        <div className='row'>
            <div className='col-xl-12'>
            <h4 className='my-3'>Add Order</h4>
            <form>
                <div className="form-row">
                <input type='hidden' ref='uid' />
                {/* <div className="form-group col-md-6">
                    <label>Oder No</label>
                    <input type="text" ref='orderno' className="form-control" placeholder="Oder No" />
                </div> */}
                <div className="form-group col-md-6">
                    <label>Order Name</label>
                    <input type="text" ref='order' className="form-control" placeholder="Oder Name" />
                    <div className="danger"></div>
                </div>
                <div className="form-group col-md-6">
                    <label>Number of Items</label>
                    <input type="number" ref='items' className="form-control" placeholder="Number of Items" />
                    <div className="danger"></div>
                </div>
                <div className="form-group col-md-6">
                    <label>Item Price</label>
                    <input type="number" ref='price' className="form-control" placeholder="Item Cost" />
                </div>
                <div className="form-group col-md-6">
                    <label>Total</label>
                    <input type="text" ref='total' className="form-control" placeholder="Total Cost" />
                </div>
                <div className="form-group col-md-6">
                    <label>Name</label>
                    <input type="text" ref='name' className="form-control" placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                    <label>Email</label>
                    <input type="text" ref='email' className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label>Mobile / Phone No</label>
                    <input type="number"  max={999999999999} ref='phone' className="form-control" placeholder="Mobile / Phone No" />
                </div>
                <div className="form-group col-md-6">
                    <h6>Date</h6>
                    <DatePicker selected={this.state.startDate} onChange={this.handleChange} ref="oDate" />
                    {/* <input type="number" ref='phone' className="form-control" placeholder="Date format 'MM/DD/YYYY'" /> */}
                </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={ this.addUser }>Save</button>
            </form>
            {/* <div><pre>{JSON.stringify(this.state, null, 2) }</pre></div> */}
            </div>
        </div>
      )
    }

    addUser = (event) => {
        console.log("Added form details");
        event.preventDefault();
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        let order = this.refs.order.value;
        let items = this.refs.items.value;
        let price = this.refs.price.value;
        let total = ( parseInt(items) * parseInt(price)).toLocaleString('en-IN');
        let uid = this.refs.uid.value;
        let oDate = this.state.startDate;
        const condition = (name && email && phone && order && items && price && total);
        if (uid && condition){
          const { users } = this.state;
          const devIndex = users.findIndex(data => {
            return data.uid === uid 
          });
          users[devIndex].name = name;
          users[devIndex].email = email;
          users[devIndex].phone = phone;
          users[devIndex].order = order;
          users[devIndex].items = items;
          users[devIndex].price = price;
          users[devIndex].total = total;
          users[devIndex].oDate = oDate;
          this.setState({ users });
        }
        else if (condition) {
            const uid = new Date().getTime().toString();
            const user = {
                "email": email,
                "name": name,
                "items": items,
                "name": name,
                "order": order,
                "phone": phone,
                "price": price,
                "total": total,
                "uid": uid,
                "oDate": oDate
                }
            this.props.action(user);
            console.log(user);
        }
      
        this.refs.uid.value = '';
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.phone.value = '';
        this.refs.order.value = '';
        this.refs.items.value = '';
        this.refs.price.value = '';
        this.refs.total.value = '';
        this.refs.oDate.value = '';
      }

      add  = ()=>{ // remove this sample child function to add order
        const user1 = {
            "email": "email@sample.com",
            "fname": "Ravi",
            "items": "200",
            "lname": "Test",
            "name": "Ravi Test",
            "order": "Ravi Books",
            "orderno": "8001",
            "phone": "8123456789",
            "price": "50",
            "total": "10,000",
            "oDate": "03/10/08",
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