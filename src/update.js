import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "../node_modules/react-day-picker/lib/style.css";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Update extends React.Component {

    constructor(props) {
        super(props);
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
        this.startdate = React.createRef();

        this.state = this.InditialStateObj;

        this.baseState = this.state;

    }

    InditialStateObj = {
        user: {
            uid: '',
            name: '',
            email: '',
            phone: '',
            order: '',
            orderno: '',
            items: 0,
            price: 0,
            total: 0,
            startdate: ""
        },
        startDate: "",
        selectedDay: ""
    }


    handleDayChange = selectedDay => {
        this.setState({
            user: {
                ...this.state.user,
                startdate: moment(selectedDay).format()
            }
            // selectedDay: moment(selectedDay).format(),
            // user: {startdate: moment(selectedDay).format()}
        });
    };

    componentWillReceiveProps(nextProps) {
        // console.log("NP Updated");
        if (this.props.user !== nextProps.user) {
            this.setState({
                user: nextProps.user,
                // selectedDay: nextProps.user.startdate
            });
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
            // console.log("update user", this.state.user);
            this.props.update(this.state.user);
        }
        // this.resetForm();
    }

    resetForm = () => {
        this.setState(this.baseState)
    }


    render() {
        return (
            <div className='row'>
                {/* <div className='col-xl-12'>
                    {JSON.stringify(this.props.user, null, 2)}
                </div> */}
                <div className='col-xl-12'>
                    <form>
                        <div className="form-row">
                            <input type='hidden' ref={this.uid} value={this.state.user.uid || ''}/>
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input type="text" ref={this.name} value={this.state.user.name || ''}
                                       onChange={(e) => this.updateField("name", e)} className="form-control"
                                       placeholder="Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" ref={this.email} value={this.state.user.email || ''}
                                       onChange={(e) => this.updateField("email", e)} className="form-control"
                                       placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Mobile / Phone No</label>
                                <input type="number" ref={this.phone} value={this.state.user.phone || ''}
                                       onChange={(e) => this.updateField("phone", e)} className="form-control"
                                       placeholder="Mobile / Phone No"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder Name</label>
                                <input type="text" ref={this.order} value={this.state.user.order || ''}
                                       onChange={(e) => this.updateField("order", e)} className="form-control"
                                       placeholder="Oder Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Oder No</label>
                                {/*<input type="number" ref={this.orderno} value={this.state.user.orderno || ''} readOnly onChange={(e) => this.updateField("orderno", e)} className="form-control" placeholder="Oder No" />*/}
                                <input type="number" ref={this.orderno} value={this.state.user.orderno || ''} readOnly
                                       className="form-control" placeholder="Oder No"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Number of Items</label>
                                <input type="number" ref={this.items} value={this.state.user.items || ''}
                                       onChange={(e) => this.updateField("items", e)} className="form-control"
                                       placeholder="Number of Items"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Item Price</label>
                                <input type="number" ref={this.price} value={this.state.user.price || ''}
                                       onChange={(e) => this.updateField("price", e)} className="form-control"
                                       placeholder="Item Cost"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Date </label>
                                <DayPickerInput
                                    overlayComponent={CustomOverlay}
                                    className="form-control"
                                    name="birthday"
                                    placeholder="MM/DD/YYYY"
                                    format="MM/DD/YYYY"
                                    // value={moment(this.state.selectedDay).format('DD/MM/YYYY')}
                                    value={moment(this.state.user.startdate).format('MM/DD/YYYY')}
                                    onDayChange={this.handleDayChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Total</label>
                                <input type="number" ref={this.phone}
                                       value={(this.state.user.items * this.state.user.price) || ''}
                                       onChange={(e) => this.updateField("phone", e)} className="form-control"
                                       placeholder="Total"/>
                            </div>
                            {/* <div className="form-group col-md-6">
                                <div>
                                    <p>
                                        this.state.selectedDay : {moment(this.state.selectedDay).format()}
                                    </p>
                                    <p>
                                        this.state.user.startdate : {this.state.user.startdate}
                                    </p>
                                </div>
                            </div> */}
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.updateChange}
                                data-toggle="modal" data-target="#orderModal" data-show="false">Save
                        </button>
                        {/*<button type="button" className="btn btn-primary" onClick={this.updateChange} data-show="false">Save</button>*/}
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

function CustomOverlay({classNames, selectedDay, children, ...props}) {
    let overlayMargin = {
        marginTop: -200,
        marginLeft: 100,
    }
    return (
        <div
            className={classNames.overlayWrapper}
            // style={{ marginTop: -200 }}
            style={overlayMargin}
            {...props}
        >
            <div className={classNames.overlay}>
                {/* <h3>Hello day picker!</h3> */}
                {/* <p>
            <input />
            <button onClick={() => console.log('clicked!')}>button</button>
          </p> */}
                {/* <p>
            {selectedDay
              ? `You picked: ${selectedDay.toLocaleDateString()}`
              : 'Please pick a day'}
          </p> */}
                {children}
            </div>
        </div>
    );
}

CustomOverlay.propTypes = {
    classNames: PropTypes.object.isRequired,
    selectedDay: PropTypes.instanceOf(Date),
    children: PropTypes.node.isRequired,
};
