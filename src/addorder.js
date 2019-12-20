import React from 'react';

class AddOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
          };
    }
    
    render() {
      return (
        <div className='row'>
            <div className='col-xl-12'>
            <h4 className='my-3'>Add Order</h4>
            <form>
                <div className="form-row">
                <input type='hidden' ref='uid' />
                <div className="form-group col-md-6">
                    <label>Oder No</label>
                    <input type="text" ref='orderno' className="form-control" placeholder="Oder No" />
                </div>
                <div className="form-group col-md-6">
                    <label>Oder Name</label>
                    <input type="text" ref='order' className="form-control" placeholder="Oder Name" />
                </div>
                <div className="form-group col-md-6">
                    <label>Number of Items</label>
                    <input type="number" ref='items' className="form-control" placeholder="Number of Items" />
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
                    <label>First Name</label>
                    <input type="text" ref='fname' className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input type="text" ref='lname' className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group col-md-6">
                    <label>Email</label>
                    <input type="text" ref='email' className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label>Mobile / Phone No</label>
                    <input type="number" ref='phone' className="form-control" placeholder="Mobile / Phone No" />
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
        let fname = this.refs.fname.value;
        let lname = this.refs.lname.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        let order = this.refs.order.value;
        let orderno = this.refs.orderno.value;
        let items = this.refs.items.value;
        let price = this.refs.price.value;
        let name = fname + " " + lname;
        let total = ( parseInt(items) * parseInt(price)).toLocaleString('en-IN');
        let uid = this.refs.uid.value;
        const condition = (fname && lname && name && email && phone && order && orderno && items && price && total);
        if (uid && condition){
          const { users } = this.state;
          const devIndex = users.findIndex(data => {
            return data.uid === uid 
          });
          users[devIndex].fname = fname;
          users[devIndex].lname = lname;
          users[devIndex].name = name;
          users[devIndex].email = email;
          users[devIndex].phone = phone;
          users[devIndex].order = order;
          users[devIndex].orderno = orderno;
          users[devIndex].items = items;
          users[devIndex].price = price;
          users[devIndex].total = total;
          this.setState({ users });
        }
        else if (condition) {
            const uid = new Date().getTime().toString();
            const user = {
                "email": email,
                "fname": fname,
                "items": items,
                "lname": lname,
                "name": name,
                "order": order,
                "orderno": orderno,
                "phone": phone,
                "price": price,
                "total": total,
                "uid": uid
                }
            this.props.action(user);
            console.log(user);
        }
      
        this.refs.uid.value = '';
        this.refs.fname.value = '';
        this.refs.lname.value = '';
        this.refs.email.value = '';
        this.refs.phone.value = '';
        this.refs.order.value = '';
        this.refs.orderno.value = '';
        this.refs.items.value = '';
        this.refs.price.value = '';
        this.refs.total.value = '';
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