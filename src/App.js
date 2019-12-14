import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Firebase from '../node_modules/firebase';
import config from './config';
import OrderDetails from './orderdetails';
import OrderDetailsList from './orderdetailslist';
import AddOrder from './addorder';
import Home from './home';

class App extends React.Component {

  constructor(props){
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      users: []
    }

    this.addData = this.addData.bind(this);

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
        <div className="row">
          <div className="col-xl-12">
            <div style={{height: "25px" }}></div>
          </div>
        </div>
        <div className="row">
          <div className='col-xl-12'>
            <Router basename={process.env.PUBLIC_URL}>
            {/* <Link to="/">Home</Link> | <Link to="/olist">Orders</Link> | <Link to="/od">Order Details</Link> | <Link to="/add">Add Order</Link> */}
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/olist" render={props => <OrderDetailsList users={this.state.users} />} />
                <Route path="/od" render={props => <OrderDetails users={this.state.users} />} />
                <Route path="/add" render={props => <AddOrder users={this.state.users} action={this.addData} />} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
  
  addData = user => {
    // console.clear();
    console.log("Add Data");
    if(user){
      console.log(user);
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