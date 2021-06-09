import React from 'react';
import $ from 'jquery';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
        this.createData = this.createData.bind(this);
        this.state = {
            createdOrders: [{
                "email": "",
                "items": "",
                "name": "",
                "order": "",
                "phone": "",
                "price": "",
                "total": "",
                "date": "",
                "uid": "1",
                "orderno": ""
            }]
        }
        this.fromNo = React.createRef();
        this.toNo = React.createRef();
    }

    componentDidMount() {
        // this.createObj();
        /*setTimeout(() => {
            this.setState((previousState) => ({
                // orders: this.state.jsonOrders.slice(0,10)
            }), () => {
                // console.log(this.state.orders);
            });
        }, 300);*/
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        return this.state.pages.length != nextState.pages.length
            // console.log("Props changed");

    }*/

    createObj(fromNo, toNo) {
        // console.log("!!fromNo && !!toNo", !!fromNo && !!toNo);
        if (fromNo === "" && toNo === "") {
            let fromNumber;
            let toNumber;
            // console.log("fromNo & toNo", fromNo, toNo)
            if (fromNo === "") {
                fromNumber = 1;
            } else {
                fromNumber = fromNo;
            }
            if (toNo === "") {
                toNumber = 31;
            } else {
                toNumber = toNo;
            }
            // console.log("fromNo & toNo", fromNumber, toNumber);
            let newArray = [];
            var funcs = [];
            for (var i = fromNumber; i < toNumber; i++) {
                funcs[i] = (function () {
                    var index = i;
                    let newObj =
                        {
                            "email": "email@sample.com",
                            "items": "" + index,
                            "name": "Sample",
                            "order": "Sample Order " + index,
                            "phone": "0123456789",
                            "price": "" + index * 5,
                            "total": 0,
                            "date": "03/4/20",
                            "uid": "" + 1
                        }
                    return function () {
                        newObj.orderno = index
                        return newObj
                    }
                })();
            }
            var newOrders = [];
            // console.log("fromNo & toNo", fromNumber, toNumber);
            for (let j = fromNumber; j < toNumber; j++) {
                newOrders.push(funcs[j]());
            }
            // console.log("newOrders", newOrders)
            this.setState({
                createdOrders: newOrders
            }, () => {
                // console.log("state createdOrders", this.state.createdOrders);
            })
        }
    }

    submitHandle(e) {
        e.preventDefault();
        let fromNo = this.fromNo.current.value;
        let toNo = this.toNo.current.value;
        this.createObj(fromNo, toNo);
    }

    createData(e) {
        e.preventDefault();
        // console.log(typeof(this.state.createdOrders));
        if (typeof(this.state.createdOrders) === 'object') {
            // console.log("updateParent OrderDList.js", user);
            this.props.createDada(this.state.createdOrders);
        }
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div style={this.loginFormStyle}>
                            <form>
                                <div className="form-group text-left">
                                    <label htmlFor="exampleInputEmail1">From Number</label>
                                    <input type="number"
                                           className="form-control"
                                           id="fromNumber"
                                           ref={this.fromNo}
                                           aria-describedby="numberHelp"
                                           placeholder="Enter from Number"
                                        // onChange={this.handleChange}
                                    />
                                    {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with*/}
                                    {/*    anyone else.</small>*/}
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="exampleInputPassword1">To Number</label>
                                    <input type="number"
                                           className="form-control"
                                           id="toNumber"
                                           ref={this.toNo}
                                           placeholder="Enter to Number"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={this.submitHandle}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12' style={{minHeight: "25rem"}}>
                        <h4 className='my-3'>Orders</h4>
                        <table className="table table-striped olistTable">
                            <tbody>
                            <tr>
                                <th width="7%">Order</th>
                                <th width="20%">Order Name</th>
                                <th width="20%">Customer Name</th>
                                <th>Items</th>
                                <th>Cost</th>
                                <th>Total</th>
                            </tr>
                            {
                                this.state.createdOrders.map(order =>
                                    <tr key={order.orderno} style={{}}>
                                        <td className="">{order.orderno}</td>
                                        <td className="">{order.order}</td>
                                        <td className="">{order.name}</td>
                                        <td className="">{order.items}</td>
                                        <td className="">{order.price}</td>
                                        <td className="">{order.items * order.price}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-success"
                                onClick={this.createData}>Update Orders
                        </button>
                    </div>
                    {/*{<div className='col-xl-12'>
                        {JSON.stringify(this.state.users, null, 4)}
                    </div>}*/}
                </div>
                {/*<div className='row'>
                    <div className='col-xl-12 d-flex justify-content-center'>
                        <Pagenation jsonOrders={this.state.jsonOrders} changePage={this.changePage}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <ModalDialog user={this.state.user} update={this.updateApp}/>
                        <div>
                        </div>
                    </div>
                </div>*/}
            </div>
        )
    }

}

export default Create;