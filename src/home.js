  import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.editData = this.editData.bind(this);
    this.updateApp = this.updateApp.bind(this);
    this.removeData = this.removeData.bind(this);
    this.state = {
      user: {}
    }
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xl-12'>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <h4 className='my-3'>Orders List</h4>
            {this.props.users.map(user => 
            <div className="row bg-success">
              <div className="mt-2 col-md-4"><strong>Order Name</strong>: {user.order}.</div>
              <div className="mt-2 col-md-2"><strong>Items</strong>: {user.items}.</div>
              <div className="mt-2 col-md-2"><strong>Cost</strong>: {user.price}.</div>
              <div className="mt-2 col-md-2"><strong>Total</strong>: {user.total}.</div>
              <div className="mt-2 mb-4 col-md-2"><strong>Call</strong>: <a href={"tele:"+user.phone} className="btn btn-info" role="button"><i className="fas fa-phone-alt"> </i></a></div>
            </div>
            )}
            </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <ModalDialog user={this.state.user} update={this.updateApp} />
            <div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  updateApp(user) {
    if (typeof (this.props.update) === 'function') {
      console.log("updateParent OrderDList.js", user);
      this.props.update(user);
      $("#orderModal").modal({ show: false })
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
    $("#orderModal").modal({ show: true });
    this.setState({
      user: user
    });
  }
  
}
export default Home;