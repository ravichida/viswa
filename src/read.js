import React from 'react';

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.updateChange = this.updateChange.bind(this);
        this.updateField = this.updateField.bind(this);
        this.uid = React.createRef();
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.order = React.createRef();
        this.orderno = React.createRef();
        this.items = React.createRef();
        this.price = React.createRef();
        this.total = React.createRef();
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
    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.setState({ user: nextProps.user })
        }
    }
    updateField = (name, e) => {
        e.preventDefault();
        // console.log("Field Update", name, e.target.value);
        this.setState({
            user: {
                ...this.state.user,
                [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            }
        });
    }

    updateChange = (event) => {
        event.preventDefault();
        if (typeof this.props.update === 'function') {
            let user = {};
            user = { ...this.state.user, name: this.state.user.fname + " " + this.state.user.lname };
            console.log("User details @ update.js", user);
            this.props.update(user);
        }
    }

    render() {
        return (
            <div className='row'>
                <div className='col-xl-12'>
                    <h4 className='my-3'>Read Order</h4>
                    <form>
                        <div className="form-row">
                            <input type='hidden' ref={this.uid} value={this.state.user.uid || ''} />
                            <div className="form-group col-md-6">
                                <label>Oder No</label>
                                <input type="text" ref={this.orderno} value={this.state.user.orderno || ''} className="form-control" placeholder="Oder No" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder Name</label>
                                <input type="text" ref={this.order} value={this.state.user.order || ''} className="form-control" placeholder="Oder Name"  readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Number of Items</label>
                                <input type="number" ref={this.items} value={this.state.user.items || ''} className="form-control" placeholder="Number of Items" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Item Price</label>
                                <input type="number" ref={this.price} value={this.state.user.price || ''} className="form-control" placeholder="Item Cost" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Total</label>
                                <input type="text" ref={this.total} value={this.state.user.total || ''} className="form-control" placeholder="Total Cost" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>First Name</label>
                                <input type="text" ref={this.fname} value={this.state.user.fname || ''} className="form-control" placeholder="First Name" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Last Name</label>
                                <input type="text" ref={this.lname} value={this.state.user.lname || ''} className="form-control" placeholder="Last Name" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" ref={this.email} value={this.state.user.email || ''} className="form-control" placeholder="Email" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile / Phone No</label>
                                <input type="number" ref={this.phone} value={this.state.user.phone || ''} className="form-control" placeholder="Mobile / Phone No" readOnly />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Update;