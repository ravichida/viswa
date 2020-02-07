import React from "react";
import { Redirect } from 'react-router';
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
import Home from './home';
import Menu from './menu';
import NotFound from './notfound';

class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      users: []
    }
    this.addData = this.addData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.removeData = this.removeData.bind(this);
  }
  render() {
    // console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
    const base = process.env.PUBLIC_URL;
    // console.log("base Redirect", base);
    return (
      <Router  basename={process.env.PUBLIC_URL}>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className='col-xl-12'>
              <h2>Viswa Orders</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Menu />
            </div>
          </div>
          <div className="row  my-2">
            <div className="col-xl-12">
              <Switch>
                <Route exact path="/" render={props => <Home users={this.state.users} update={this.updateData} remove={this.removeData} />} />
                <Route exact path="/olist" render={props => <OrderDetailsList users={this.state.users} update={this.updateData} remove={this.removeData} />} />
                <Route exact path="/od" render={props => <OrderDetails users={this.state.users} update={this.updateData} remove={this.removeData} />} />
                <Route exact path="/add" render={props => <AddOrder users={this.state.users} action={this.addData} />} />
                <Route render={(base) => <Redirect to={base} />} />
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
      this.setState(state, function(){
        console.log('DATA RETRIEVED Users', this.state.users);
      });
    });
    console.log('DATA RETRIEVED');
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevState) {
    console.log("componentDidUpdate", prevState, this.state);
    // only write when it's different with the new state
    if (prevState.users !== this.state.users) {
      this.writeUserData();
      console.log("componentDidUpdate, writeUserData");
    }
  }

  addData = user => {
    // console.log("This State Data", this.state.users);
    if (user) {
      const { users } = this.state;
      console.log('users Data', users);
      users.push(user)
      this.setState({ users });
    }
  }

  removeData = (user) => {
    if(user){
      const { users } = this.state;
      const newState = users.filter(data => {
        return data.uid !== user.uid;
      });
      if(users !== newState){
        this.setState({ users: newState });
      }
      console.log("Updated Users state");
    }
  }

  updateData = (user) => {
    console.log("updateData fun in app.js", user);
    if(user){
      console.log("if user in app.js");
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
        const devIndex = users.findIndex(user => {
          return user.uid === uid
        });
        console.log("devIndex", devIndex);
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
        this.setState({ users: users });
      }
    console.log("Updateed State appjs", this.state.users);
  }
}
}

export default App;