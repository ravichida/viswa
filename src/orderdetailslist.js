import React from 'react';

class OrderDetailsList extends React.Component{
    constructor(props){
        super(props)
    }
    // dataa = {"name": "Ravi Kumar Chida"}
    render(){
      return (
      <div className='row'>
        <div className='col-xl-12'>
          <h4>Order Details List</h4>
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
      )
    }
}

export default OrderDetailsList;