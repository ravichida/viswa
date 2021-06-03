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
            showPageNo: 1,
            nextState: "",
            previousState: ""
        }
    }

    componentDidMount() {
        if(this.state.showPageNo === 1){
            this.checkPrevious();
            this.checkNext();
        }
    }

    handlePageChange(event, pageNo) {
        // console.log("pageNo", pageNo);
        event.preventDefault();
        this.setState({
            showPageNo: pageNo
        }, () => {
            this.checkNext(pageNo);
            this.checkPrevious(pageNo);
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
            this.checkPrevious();
            this.checkNext();
        })

    }

    handleNext(event, pageNo) {
        event.preventDefault();
        let lastpage = this.props.users.length
        if (this.state.showPageNo < lastpage) {
            this.setState({
                showPageNo: this.state.showPageNo + 1
            }, () => {
                this.props.changePage(this.state.showPageNo);
                this.checkPrevious();
                this.checkNext();
                // console.log("handleNext if state.showPageNo", this.state.showPageNo);
            })
        }else {
            this.setState({
                showPageNo: pageNo
            }, () => {
                // this.props.changePage(this.state.showPageNo);
                // this.checkNext(pageNo);
                console.log("handleNext else state.showPageNo", this.state.showPageNo);
            });
        }

    }

    checkPrevious() {
        let maxNext = this.props.users.length;
        if (this.state.showPageNo === 1) {
            this.setState({
                previousState: "disabled"
            }, () => {
                // console.log("nextState", this.state.nextState);
            })
        } else if (this.state.showPageNo > 1) {
            // console.log("maxNext else if", maxNext);
            this.setState({
                previousState: ""
            }, () => {
                // console.log("nextState", this.state.nextState);
            })
        }
    }

    checkNext() {
        let maxNext = this.props.users.length;
        if (this.state.showPageNo === maxNext) {
            this.setState({
                nextState: "disabled"
            }, () => {
                // console.log("nextState", this.state.nextState);
            })
        } else if (this.state.showPageNo < maxNext) {
            // console.log("maxNext else if", maxNext);
            this.setState({
                nextState: ""
            }, () => {
                // console.log("nextState", this.state.nextState);
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

                        this.props.users.map((page, index) =>
                            <li className="page-item" key={page.orderno}>
                                <a className="page-link"
                                   key={"pga" + index}
                                    // href=""
                                    // to={url.path}
                                    // className={this.state.activeId === url.id ? "nav-link nav-item btn-success menublock active" : "nav-link nav-item btn-success menublock"}
                                   onClick={(event) => this.handlePageChange(event, index + 1)}
                                >
                                    {index + 1}
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
