import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'
class OrderDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.updateApp = this.updateApp.bind(this);
    this.state = {
      user: {
        uid: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        order: '',
        orderno: '',
        items: '',
        price: '',
        total: ''
      }
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
                  <th width="7%">Order No</th>
                  <th width="20%">Order</th>
                  <th width="20%">Name</th>
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
                        <td className=""><button onClick={() => this.removeData(user)} className="btn btn-link">Delete</button></td>
                        <td className=""><button onClick={() => this.updateData(user)} className="btn btn-link">Edit</button></td>
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
      console.log("updateParent OrderDList", user);
      this.props.update(user);
      $("#orderModal").modal({ show: false })
    }
  }

  updateData(user) {
    $("#orderModal").modal({ show: true });
    this.setState({
      user: user
    });
  }
}
export default OrderDetailsList;