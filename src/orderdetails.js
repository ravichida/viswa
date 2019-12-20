import React from 'react';

class OrderDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='row'>
            <div className='col-xl-12'>
            <h4 className='my-3'>Order Details</h4>
                { 
                this.props.users
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
        )
    }
}

export default OrderDetails;