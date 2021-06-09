import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

class Menu extends React.Component {
    Urls = [
        {name: <i className='fas fa-arrow-circle-right'> Login</i>, path: "/", id: 1},
        {name: <i className='fas fa-home'> Home</i>, path: "home", id: 2},
        {name: <i className='fas fa-th-large'> Orders</i>, path: "/orders", id: 3},
        {name: <i className='fas fa-search'> Search</i>, path: "/search", id: 4},
        {name: <i className='fas fa-plus'> Add</i>, path: "/add", id: 5},
        {name: <i className='fas fa-plus'> Create</i>, path: "/create", id: 6}
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
        this.Urls.map(link => {
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
                        this.Urls.map(url =>
                            <Link
                                key={url.id}
                                to={url.path}
                                className={this.state.activeId === url.id ? "nav-link nav-item btn-success menublock active" : "nav-link nav-item btn-success menublock"}
                                onClick={(event) => this.handleClick(event, url.id)}
                            >
                                {url.name}
                            </Link>
                        )
                    }
                </nav>
            </div>
        )
    }
}

export default Menu