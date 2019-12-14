import React from 'react';

import Firebase from '../node_modules/firebase';
import config from './config';
import OrderDetails from './orderdetails'
import OrderDetailsList from './orderdetailslist'


class App extends React.Component {

  constructor(props){
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      users: []
    }
  }

  writeUserData = () => {
    Firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  componentDidMount() {
    this.getUserData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }
  render() {
    const { users } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul className="nav nav-tabs">
              <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Orders</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Order Details</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Add Order</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className='col-xl-12'>
            <h2>Order Details</h2>
          </div>
        </div>
        <div className="row">
          <div className='col-xl-12'>
            <Router>
              <Switch>
                <Route exact path="/" component={OrderDetails} />
                <Route path="/" component={OrderDetailsList} />
              </Switch>
            </Router>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th width="35">Order No</th>
                  <th width="35">Order</th>
                  <th width="35">Name</th>
                  <th>Items</th>
                  <th>Cost</th>
                  <th>Total</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
                { 
                  users
                  .map(user => 
                    <tr key={user.uid} style={{}}>
                      <td className="">{ user.orderno}</td>
                      <td className="">{ user.order}</td>
                      <td className="">{ user.name}</td>
                      <td className="">{ user.items}</td>
                      <td className="">{ user.price}</td>
                      <td className="">{ user.total }</td>
                      <td className=""><button onClick={ () => this.removeData(user) } className="btn btn-link">Delete</button></td>
                      <td className=""><button onClick={ () => this.updateData(user) } className="btn btn-link">Edit</button></td>
                    </tr>
                    )
                }
              </tbody>
            </table> 
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
          { 
            users
            .map(user => 
              <div key={user.uid} className="card float-left" style={{width: '24rem', margin: '1rem'}}>
                <div className="card-body">
                  <h5 className="card-title"><span className="smallName">Name: </span> { user.name}</h5>
                  <p className="card-text"><span className="smallName">Order No: </span> { user.orderno }</p>
                  <p className="card-text"><span className="smallName">Order: </span> { " " + user.order + " # " + user.items + " Nos" }</p>
                  <p className="card-text"><strong>Items: </strong>{ user.items }, <strong>Price: </strong><i className="fa fa-inr"></i> { user.price }, <strong>Total: </strong><i className="fa fa-inr"></i> { user.total }</p>
                  <p className="card-text"><span className="smallName">Email: </span>{ user.email }</p>
                  <p className="card-text"><span className="smallName">Mobole: </span>{ user.phone }</p>
                  <button onClick={ () => this.removeData(user) } className="btn btn-link">Delete</button>
                  <button onClick={ () => this.updateData(user) } className="btn btn-link">Edit</button>
                </div>
              </div>
              )
          } 
          </div>
        </div>
        <div className='row'>
          <hr />
          <div className='col-xl-12'>
            <h3>Add Order</h3>
            <form onSubmit={ this.handleSubmit }>
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
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  handleSubmit = (event) => {
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
      const { users } = this.state;
      users.push({ uid, fname, lname, name, email, phone, order, orderno, items, price, total })
      this.setState({ users });
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
  
  removeData = (user) => {
    const { users } = this.state;
    const newState = users.filter(data => {
      return data.uid !== user.uid;
    });
    this.setState({ users: newState });
  }
  
  updateData = (user) => {
    this.refs.uid.value = user.uid;
    this.refs.fname.value = user.fname;
    this.refs.lname.value = user.lname;
    this.refs.email.value = user.email;
    this.refs.phone.value = user.phone;
    this.refs.order.value = user.order;
    this.refs.orderno.value = user.orderno;
    this.refs.items.value = user.items;
    this.refs.price.value = user.price;
    this.refs.total.value = user.total;
  }


}

export default App;