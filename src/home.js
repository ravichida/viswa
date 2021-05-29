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
          {/* <div className='myst'>Orders</div> */}
            <h4 className='my-3'>Orders</h4>
            {this.props.users.map(user => 
            <div key={user.orderno} className="row rowblock rounded">
              <div className="col-sm-12 col-md-4 padding"><strong className="title">Order Name</strong>: <i className="fas fa-paperclip"></i> <a href="#" onClick={(event) => this.displayData(user, event)} className="" role="button">{user.order}.</a></div>
              <div className="col-sm-3 col-md-2 padding"><strong className="title">Items</strong>: {user.items}.</div>
              <div className="col-sm-3 col-md-2 padding"><strong className="title">Cost</strong>: {user.price}.</div>
              <div className="col-sm-3 col-md-2 padding"><strong className="title">Total</strong>: {user.items * user.price}.</div>
              <div className="col-sm-3 col-md-2 padding"><strong className="title">Call</strong>: <a href={"tele:+91"+user.phone} className="" role="button"><i className="fas fa-phone-alt"> </i></a></div>
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
