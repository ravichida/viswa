import React from "react";
import Home from "./home";

class Login extends React.Component {
    loginFormStyle = {
        maxWidth: "500px"
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

        this.state = {
            email: "",
            password: ""
        };

        this.email = React.createRef();
        this.password = React.createRef();

    }

    handleChange = (e) => {
        console.log("Target", e.target);
        let {id, value} = e.target;
        console.log("before state", this.email.current.value, value);
        if(id === "email" || id === "password") {
            this.setState({
                ...this.state,
                [id]: this.email.current.value
            });
            console.log("inside if", this.state.email, this.state.password);
        }
            console.log("after state", this.state.email, this.state.password);

    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        let emailValue = this.email.current.value;
        let passwordValue = this.password.current.value;
        console.log("Values", emailValue, passwordValue);
        /*
        this.setState({
            ...this.state,
            email: this.email.current.value,
            password: this.password.current.value
        });
        console.log("State Object", this.state.email, this.state.password);*/
        if (emailValue === "ravi.chida@gmail.com" && passwordValue === "crk1") {
            console.log("Login OK");
            // sendDetailsToServer()
            window.location.pathname = "/orders";
        } else {
            JSON.stringify(this.state);
            console.log("Email or Password did not match");
        }
        //window.location.pathname = "/orders";
        // alert("not working");
    }

    render() {
        return (<div>
            <div className='row'>
                <div className='col-xl-12'>
                    <div style={this.loginFormStyle}>
                        <form>
                            <div className="form-group text-left">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                       className="form-control"
                                       id="email"
                                       ref={this.email}
                                       aria-describedby="emailHelp"
                                       placeholder="Enter email"
                                       onChange={this.handleChange}
                                />
                                {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with*/}
                                {/*    anyone else.</small>*/}
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       ref={this.password}
                                       placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={this.handleSubmitClick}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
    }

    /*
    test@test.com
    test
    */
}

export default Login;