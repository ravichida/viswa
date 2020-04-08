import React from 'react';
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "../node_modules/react-day-picker/lib/style.css";

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = { readonly: true };
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
        this.startdate = React.createRef();

        this.state = {
            user: {
                uid: '',
                fname: '',
                lname: '',
                email: '',
                phone: '',
                order: '',
                orderno: '',
                items: 0,
                price: 0,
                total: 0,
                startdate: ""
            },
            startDate: ""
        }

    }

    state = {
        selectedDay: undefined
    };

    handleDayChange = selectedDay => {
        this.setState({ selectedDay : moment(selectedDay).format()});
    };

    /* state = {
        startDate: new Date(),
        formattedValue: "11/19/2016",
        date: new Date()
        //alert n date
    };

    onChange = date => this.setState({ date: date }) */

    handleChange = (date, formattedValue) => {
        alert(date);
        console.log("startDate", date)
        this.setState({
            startDate: date,
            formattedValue: "11/19/2016"
        });
        /* this.setState({
            user: {
                ...this.state.user,
                ['startDate']: date
            } 

        }, function () {
            console.log(this.state.user);
        });
        */
    };
    //   user: {startDate: date}

    // onChange = date => this.setState({ date:date })
    componentDidMount() {
        // this.state.startDate = "2020-03-31T17:22:21+05:30";
        this.setState({
            startDate: this.state.user.startdate
        })
        // this.state.startDate = this.state.user.startdate;
    }

    componentWillReceiveProps(nextProps) {
        console.log("NP Updated");
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
        /* event.preventDefault();
        if (typeof this.props.update === 'function') {
            let user = {};
            user = { ...this.state.user, name: this.state.user.fname + " " + this.state.user.lname };
            console.log("update Change @ update.js", user);
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
        console.log("startDate", this.state.user.startdate)
        // console.log("updatejs", this.props.user);
        // readOnly={this.props.user}
        let datepicker = this.state.user.startdate
        return (
            <div className='row'>

                <div className='col-xl-12'>
                    {JSON.stringify(this.props.user, null, 2)}
                </div>
                <div className='col-xl-12'>
                    <form>
                        <div className="form-row">
                            <div>
                                <p>
                                this.state.startDate : {this.state.startDate}
                                </p>
                                <p>
                                this.state.user.startDate : {this.state.user.startdate}
                                </p>
                            </div>
                            <input type='hidden' ref={this.uid} value={this.state.user.uid || ''} />
                            <div className="form-group col-md-6">
                                <label>Oder No</label>
                                <input type="text" ref={this.orderno} value={this.state.user.orderno || ''} onChange={(e) => this.updateField("orderno", e)} className="form-control" placeholder="Oder No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder Name</label>
                                <input type="text" ref={this.order} value={this.state.user.order || ''} onChange={(e) => this.updateField("order", e)} className="form-control" placeholder="Oder Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Number of Items</label>
                                <input type="number" ref={this.items} value={this.state.user.items || ''} onChange={(e) => this.updateField("items", e)} className="form-control" placeholder="Number of Items" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Item Price</label>
                                <input type="number" ref={this.price} value={this.state.user.price || ''} onChange={(e) => this.updateField("price", e)} className="form-control" placeholder="Item Cost" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input type="text" ref={this.name} value={this.state.user.name || ''} onChange={(e) => this.updateField("name", e)} className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" ref={this.email} value={this.state.user.email || ''} onChange={(e) => this.updateField("email", e)} className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile / Phone No</label>
                                <input type="number" ref={this.phone} value={this.state.user.phone || ''} onChange={(e) => this.updateField("phone", e)} className="form-control" placeholder="Mobile / Phone No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Date - {this.state.user.startdate}</label>
                                <DayPickerInput
                                    name="birthday"
                                    placeholder="DD/MM/YYYY"
                                    format="DD/MM/YYYY"
                                    // value={moment() ? moment(this.state.user.startdate).format('DD-MM-YYYY') : moment(this.state.selectedDay).format('DD-MM-YYYY')}
                                    value={this.state.startDate ? moment(this.state.startDate).format('DD-MM-YYYY') : null}
                                    onDayChange={this.handleDayChange}
                                />
                                <p>
                                this.state.selectedDay : {typeof(this.state.selectedDay)}
                                </p>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.updateChange} data-toggle="modal" data-target="#orderModal" data-show="false">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Update;

function UpdateBtn(props) {
    return <button type="button" className="btn btn-primary">Save</button>
}
