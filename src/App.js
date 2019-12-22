import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Firebase from '../node_modules/firebase';
import config from './config';
import OrderDetails from './orderdetails';
import OrderDetailsList from './orderdetailslist';
import AddOrder from './addorder';
import Update from './update';
import Home from './home';

class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      users: []
    }
    this.addData = this.addData.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container-fluid">
          <div className="row">
            <div className='col-xl-12'>
              <h2>Viswa Order Details</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/olist" className="nav-link">Orders</Link></li>
                <li className="nav-item"><Link to="/od" className="nav-link">Order Details</Link></li>
                <li className="nav-item"><Link to="/add" className="nav-link">Add Order</Link></li>
                <li className="nav-item"><Link to="/update" className="nav-link">Update Order</Link></li>
              </ul>
            </div>
          </div>
          <div className="row  my-2">
            <div className="col-xl-12">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/olist" render={props => <OrderDetailsList users={this.state.users} update={this.updateData} />} />
                <Route path="/od" render={props => <OrderDetails users={this.state.users} />} />
                <Route path="/add" render={props => <AddOrder users={this.state.users} action={this.addData} />} />
                {/* <Route path="/update" render={props => <Update user={this.state.users[6]} update={this.updateData} />} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
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

  addData = user => {
    // console.log("Add Data");
    if (user) {
      // console.log(user);
      const { users } = this.state;
      users.push(user)
      this.setState({ users });
    }
  }

  removeData = (user) => {
    const { users } = this.state;
    const newState = users.filter(data => {
      return data.uid !== user.uid;
    });
    this.setState({ users: newState });
  }

  updateData = (user) => {
    console.log("updateData in app.js", user);
    if(user){
      console.log("updateData user in app.js");
      let fname = user.fname;
      let lname = user.lname;
      let email = user.email;
      let phone = user.phone;
      let order = user.order;
      let orderno = user.orderno;
      let items = user.items;
      let price = user.price;
      let name = user.name;
      let total = user.total;
      let uid = user.uid;
      const condition = (fname && lname && name && email && phone && order && orderno && items && price && total);
      if (uid && condition) {
        console.log("Update condition met");
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
    console.log("Update form details from app.js", this.state.users);
  }
}
}

export default App;