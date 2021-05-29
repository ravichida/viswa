import React from 'react';
import {Link,} from "react-router-dom";
import {useHistory} from "react-router-dom";

class Menu extends React.Component {
    Links = [
        {name: <i className='fas fa-home'> Home</i>, path: "/home", id: 1},
        {name: <i className='fas fa-th-large'> Orders</i>, path: "/orders", id: 2},
        // {name: <i className='fas fa-info-circle'>  Details</i> , path: "/od", id: 3},
        {name: <i className='fas fa-search'> Search</i>, path: "/search", id: 3},
        {name: <i className='fas fa-plus'> Add</i>, path: "/add", id: 4},
        // {name: <i className='fas fa-home'> Log Out</i>, path: "/", id: 5}
    ]

    constructor(props) {
        super(props);
        this.state = {
            activeId: 1,
            locPath: ""
        };
    }

    handleClick(event, link) {
        event.preventDefault();
        console.log("id", link.id);
        console.log("path", link.path);
        this.setState({
            activeId: link.id,
            locPath: link.path
        })
        console.log("state id", this.state.activeId);
        console.log("state path", this.state.locPath);
    }

    componentDidMount(links) {
        let location = window.location.pathname;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                <nav className="nav nav-pills nav-justified">
                    {
                        this.Links.map(link =>
                            <Link
                                key={link.id}
                                to={link.path}
                                className={this.state.activeId === link.id ? "nav-link nav-item btn-success menublock active" : "nav-link nav-item btn-success menublock"}
                                onClick={(event) => this.handleClick(event, link)}
                            >
                                {link.name}
                            </Link>
                        )
                    }
                </nav>
            </div>
        )
    }
}

export default Menu