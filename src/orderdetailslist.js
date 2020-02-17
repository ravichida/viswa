import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'
class OrderDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.editData = this.editData.bind(this);
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
            <h4 className='my-3'>Order Details List</h4>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th width="7%">Order</th>
                  <th width="20%">Order Name</th>
                  <th width="20%">Customer Name</th>
                  <th>Items</th>
                  <th>Cost</th>
                  <th>Total</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
                {
                  this.props.users
                    .map(user =>
                      <tr key={user.uid} style={{}}>
                        <td className="">{user.orderno}</td>
                        <td className="">{user.order}</td>
                        <td className="">{user.name}</td>
                        <td className="">{user.items}</td>
                        <td className="">{user.price}</td>
                        <td className="">{user.total}</td>
                        <td className=""><button type="button" className="btn btn-danger" onClick={(event) => this.removeData(user, event)}>Delete</button></td>
                        <td className=""><button type="button" className="btn btn-primary" onClick={(event) => this.editData(user, event)}>Edit</button></td>
                      </tr>
                    )
                }
              </tbody>
            </table>
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
export default OrderDetailsList;