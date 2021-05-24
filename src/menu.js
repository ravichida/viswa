import React from 'react';
import {Link,} from "react-router-dom";
import {useHistory} from "react-router-dom";

class Menu extends React.Component {
    Links = [
        {name: <i className='fas fa-home'> Home</i>, path: "/", id: 1},
        {name: <i className='fas fa-th-large'> Orders</i>, path: "/orders", id: 2},
        // {name: <i className='fas fa-info-circle'>  Details</i> , path: "/od", id: 3},
        {name: <i className='fas fa-search'> Search</i>, path: "/search", id: 5},
        {name: <i className='fas fa-plus'> Add</i>, path: "/add", id: 4}
    ]

    constructor(props) {
        super(props);

        this.state = {activeId: 1};
    }

    handleClick(event, id) {
        // event.preventDefault();
        // console.log("id", id);
        this.setState({activeId: id})
    }

    componentDidMount(links) {
        // console.log("menu.js", window.location.pathname);
        let location = window.location.pathname;
        this.Links.map(link => {
            if (location === link.path) {
                this.setState({activeId: link.id});
                // console.log("active id", link.path, link.id);
            }
        });
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
                                onClick={(event) => this.handleClick(event, link.id)}
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