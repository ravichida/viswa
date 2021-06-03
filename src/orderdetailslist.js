import React from 'react';
import $ from 'jquery';
import ModalDialog from './modalDialog'
import Pagenation from './pagenation';

class OrderDetailsList extends React.Component {
    constructor(props) {
        super(props);
        this.sortUsers = this.sortUsers.bind(this);
        this.editData = this.editData.bind(this);
        this.updateApp = this.updateApp.bind(this);
        this.removeData = this.removeData.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = {
            user: {write: true},
            pages: [],
            users: []
            /*users: [{
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "1",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "2",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "3",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "4",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            },{
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "5",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "6",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "7",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "8",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            },{
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "9",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "10",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "11",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }, {
                "email": "email@sample.com",
                "items": "0",
                "name": "",
                "order": "",
                "orderno": "12",
                "phone": "",
                "price": "0",
                "total": 0,
                "date": "03/4/20",
                "uid": "1675303448945"
            }
            ]*/
        }
    }

    componentDidMount(prevState) {
        this.createObj();
        setTimeout(() => {
            this.setState((previousState) => ({
                pages: this.state.pages.concat(this.state.users)
            }), () => {
                console.log(this.state.pages);
            });
        }, 300)
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        return this.state.pages.length != nextState.pages.length
            // console.log("Props changed");

    }*/

    createObj(){
        let newArray = ["Arr 1"];
        var funcs = [];
        for (var i = 1; i < 16; i++) {
            funcs[i] = (function() {
                var index = i;
                let newObj = {
                    "email": "email@sample.com",
                    "items": "" + index,
                    "name": "Sample",
                    "order": "Sample Order " + index,
                    "phone": "0123456789",
                    "price": "" + index * 5,
                    "total": 0,
                    "date": "03/4/20",
                    "uid": "1675303448945"
                }
                return function() {
                    newObj.orderno = "" + index
                    return newObj
                }
            })();
        }
        var newOrders = [];
        for (var j = 1; j < 16; j++) {
            newOrders.push(funcs[j]());
        }
        console.log("newOrders", newOrders)
        this.setState({
            users: newOrders
        }, () => {
            console.log("state objects", this.state.users);
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xl-12'>
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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                this.state.pages.map(user =>
                                        <tr key={user.orderno} style={{}}>
                                            <td className="">{user.orderno}</td>
                                            <td className="">{user.order}</td>
                                            <td className="">{user.name}</td>
                                            <td className="">{user.items}</td>
                                            <td className="">{user.price}</td>
                                            <td className="">{user.items * user.price}</td>
                                            <td className="">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={(event) => this.editData(user, event)}>Edit
                                                </button>
                                            </td>
                                            <td className="">
                                                <button type="button" className="btn btn-danger"
                                                        onClick={(event) => this.removeData(user, event)}>Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                            }
                            </tbody>
                        </table>
                    </div>
                    {/*{<div className='col-xl-12'>
                        {JSON.stringify(this.state.users, null, 4)}
                    </div>}*/}
                </div>
                <div className='row'>
                    <div className='col-xl-12 d-flex justify-content-center'>
                        <Pagenation users={this.state.users} changePage={this.changePage} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <ModalDialog user={this.state.user} update={this.updateApp}/>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    changePage(pageNo){
        // console.log("pageNo",pageNo);
        let pages = [];
        let stateUsers = [...this.state.users];
        // console.log("slice", stateUsers.slice(pageNo-1));
        pages = stateUsers.slice(pageNo-1);
        this.setState({
            pages: [...pages]
        }, () => {
            // console.log("state pages", this.state.pages);
        });
    }

    sortUsers(users) {

    }

    updateApp(user) {
        if (typeof (this.props.update) === 'function') {
            // console.log("updateParent OrderDList.js", user);
            this.props.update(user);
            $("#orderModal").modal({show: false});
            $(".modal-backdrop").remove();
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
        $("#orderModal").modal({show: true});
        this.setState({
            user: user
        });
    }

}

export default OrderDetailsList;