import React from 'react';
import $ from 'jquery';
import {Link} from "react-router-dom";

class Pagenation extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.next = React.createRef()
        this.state = {
            endpage: 1,
            showPageNo: 1,
            nextState: "",
            previousState: "",
            noOfPages: []
        }
    }

    componentDidMount() {
        this.pages();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.jsonOrders != this.props.jsonOrders) {
            this.pages();
        }
    }

    pages(){
        setTimeout(() => {
            if (this.props.orders !== null) {
                let endpage = Math.ceil(this.props.jsonOrders.length / 10);
                // console.log("endpage", endpage);
                let pages = [];
                for (let i = 0; i < endpage; i++) {
                    pages.push(i);
                }
                // console.log(pages);
                this.setState({
                    endpage: endpage,
                    noOfPages: pages
                }, () => {
                    // console.log(this.state.noOfPages);
                    this.checkPreviousAndNext();
                })
            }
        }, 300)
    }
    checkPreviousAndNext() {
        this.checkPrevious();
        this.checkNext();
    }

    handlePageChange(event, pageNo) {
        event.preventDefault();
        this.setState({
            showPageNo: pageNo
        }, () => {
            this.checkPreviousAndNext();
        })
        this.props.changePage(pageNo);
    }

    handlePrevious(event) {
        event.preventDefault();
        this.setState({
            showPageNo: this.state.showPageNo - 1
        }, () => {
            // console.log(this.state.showPageNo);
            this.props.changePage(this.state.showPageNo);
            this.checkPreviousAndNext();
        })

    }

    handleNext(event) {
        event.preventDefault();
        if (this.state.showPageNo < this.state.endpage) {
            this.setState({
                showPageNo: this.state.showPageNo + 1
            }, () => {
                this.props.changePage(this.state.showPageNo);
                this.checkPreviousAndNext();
                // console.log("handleNext if state.showPageNo", this.state.showPageNo);
            })
        }

    }

    checkPrevious() {
        if (this.state.showPageNo === 1) {
            this.setState({
                previousState: "disabled"
            }, () => {

            })
        } else if (this.state.showPageNo > 1) {
            this.setState({
                previousState: ""
            }, () => {

            })
        }
    }

    checkNext() {
        if (this.state.showPageNo === this.state.endpage) {
            this.setState({
                nextState: "disabled"
            }, () => {
                // console.log("endpage", this.state.endpage);
            })
        } else if (this.state.showPageNo < this.state.endpage) {
            this.setState({
                nextState: ""
            }, () => {

            })
        }
    }

    render() {
        return (
            <nav aria-label="Page navigation" style={{maxWidth: "auto"}}>
                <ul className="pagination">
                    {
                        <li className={`page-item ${this.state.previousState}`}>
                            <a className="page-link"
                                // key={"pga" + index}
                                // href=""
                                // to={url.path}
                                // className={this.state.activeId === url.id ? "nav-link nav-item btn-success menublock active" : "nav-link nav-item btn-success menublock"}
                               onClick={(event) => this.handlePrevious(event)}
                            >
                                Previous
                            </a>
                        </li>
                    }
                    {

                        this.state.noOfPages.map((page, index) =>
                            <li className="page-item" key={page}>
                                <a className="page-link"
                                   key={page}
                                    // href=""
                                    // to={url.path}
                                    // className={this.state.activeId === url.id ? "nav-link nav-item btn-success menublock active" : "nav-link nav-item btn-success menublock"}
                                   onClick={(event) => this.handlePageChange(event, page + 1)}
                                >
                                    {page + 1}
                                </a>
                            </li>
                        )
                    }
                    {
                        <li className={`page-item ${this.state.nextState}`} ref={this.next}>
                            <a className="page-link"
                                // key={"pga" + index}
                                // href=""
                                // to={url.path}
                                // className={this.state.activeId === url.id ? "nav-link nav-item btn-success menublock active" : "nav-link nav-item btn-success menublock"}
                               onClick={(event) => this.handleNext(event)}
                            >
                                Next
                            </a>
                        </li>
                    }
                    {/*<li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                </ul>
            </nav>
        )
    }

}

export default Pagenation;
