import React from 'react';
import moment from "moment";

class UpdateReadOnly extends React.Component {
    constructor(props) {
        super(props);
        this.state = { readonly: true };
        this.updateChange = this.updateChange.bind(this);
        this.updateField = this.updateField.bind(this);
        this.uid = React.createRef();
        this.name = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.order = React.createRef();
        this.orderno = React.createRef();
        this.items = React.createRef();
        this.price = React.createRef();
        this.total = React.createRef();
        this.state = {
            order: {
                uid: '',
                name: '',
                email: '',
                phone: '',
                order: '',
                orderno: '',
                items: '',
                price: '',
                total: ''
            },
            showUpdateBtn: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.order !== nextProps.order) {
            this.setState({ order: nextProps.order })
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
        /* if (typeof this.props.update === 'function') {
            let user = {};
            this.props.update(user);
        } */
    }
    updateBtn = (event) => {
        event.preventDefault();
        this.setState({
            showUpdateBtn: !this.state.showUpdateBtn,
            readonly: "readonly"
        });
    }

    render() {
        // console.log("updatejs", this.props.user);
        // readOnly={this.props.user}
        return (
            <div className='row'>
                <div className='col-xl-12'>
                    <h4 className='my-3'>Order Details</h4>
                    <form>
                        <div className="form-row">
                            <input type='hidden' ref={this.uid} value={this.state.order.uid || ''} />
                            <div className="form-group col-md-6">
                                <label>Oder No</label>
                                <input type="text" ref={this.orderno} value={this.state.order.orderno || ''} onChange={(e) => this.updateField("orderno", e)} className="form-control" placeholder="Oder No" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder Name</label>
                                <input type="text" ref={this.order} value={this.state.order.order || ''} onChange={(e) => this.updateField("order", e)} className="form-control" placeholder="Oder Name" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Number of Items</label>
                                <input type="number" ref={this.items} value={this.state.order.items || ''} onChange={(e) => this.updateField("items", e)} className="form-control" placeholder="Number of Items" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Item Price</label>
                                <input type="number" ref={this.price} value={this.state.order.price || ''} onChange={(e) => this.updateField("price", e)} className="form-control" placeholder="Item Cost" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Total</label>
                                <input type="text" ref={this.total} value={this.state.order.items * this.state.order.price || ''} onChange={(e) => this.updateField("total", e)} className="form-control" placeholder="Total Cost" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input type="text" ref={this.fname} value={this.state.order.name || ''} onChange={(e) => this.updateField("fname", e)} className="form-control" placeholder="First Name" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" ref={this.email} value={this.state.order.email || ''} onChange={(e) => this.updateField("email", e)} className="form-control" placeholder="Email" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile / Phone No</label>
                                <input type="number" ref={this.phone} value={this.state.order.phone || ''} onChange={(e) => this.updateField("phone", e)} className="form-control" placeholder="Mobile / Phone No" readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Date</label>
                                <input type="text" ref={this.startdate} value={this.state.order.date ? moment(this.state.order.date).format('DD/MM/YYYY') : null || ''} onChange={(e) => this.updateField("startdate", e)} className="form-control" placeholder="Date" readOnly />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
        if (this.state.readonly) {
            return (
                <UpdateBtn />
            );
        }
        return (
            <UpdateBtn />
        );
    }
}
export default UpdateReadOnly;

function UpdateBtn(props) {
    return <button type="button" className="btn btn-primary">Save</button>
}

