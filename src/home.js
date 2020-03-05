  import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'
import ModalDialogReadOnly from './modalDialogReadOnly';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.displayData = this.displayData.bind(this);
    this.updateApp = this.updateApp.bind(this);
    this.removeData = this.removeData.bind(this);
    this.state = {
      user: {write:true}
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
            <div className="row rowblock rounded">
              <div className="mt-2 col-md-4"><strong>Order Name</strong>: <a href="#" onClick={(event) => this.displayData(user, event)} className="btn btn-secondary" role="button">{user.order}.</a></div>
              <div className="mt-2 col-md-2"><strong>Items</strong>: {user.items}.</div>
              <div className="mt-2 col-md-2"><strong>Cost</strong>: {user.price}.</div>
              <div className="mt-2 col-md-2"><strong>Total</strong>: {user.total}.</div>
              <div className="mt-2 mb-2 col-md-2"><strong>Call</strong>: <a href={"tele:+91"+user.phone} className="btn btn-success" role="button"><i className="fas fa-phone-alt"> </i></a></div>
            </div>
            )}
            </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <ModalDialogReadOnly user={this.state.user} update={this.updateApp} />
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

  displayData(user, e) {
    e.preventDefault();
    $("#orderModal").modal({ show: true });
    this.setState({
      user: user
    });
  }
  
}
export default Home;