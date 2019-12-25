import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);

    }

    state = { activeId: 1 };

    handleClick(event, id) {
        // event.preventDefault();
        // console.log("id", id);
        this.setState({ activeId: id })
    }

    Links = [
        {name: "Home", path: "/", id: 1},
        {name: "Orders", path: "/olist", id: 2},
        {name: "Details", path: "/od", id: 3},
        {name: "Add", path: "/add", id: 4}
    ]

    render() {
        return (
            <div>
                <nav className="nav nav-pills nav-justified">

                    {
                        this.Links.map(link =>
                            <Link
                                key={link.id}
                                to={link.path}
                                className={this.state.activeId === link.id ? "nav-item nav-link active" : "nav-item nav-link"}
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