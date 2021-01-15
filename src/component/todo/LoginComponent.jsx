import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "pankaj",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({username: event.target.value})
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value})
    // }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }

    loginClicked() {
        if(this.state.username === 'pankaj' && this.state.password=== 'abc') {
            // console.log('Successful')
            // this.setState({showSuccessMessage: true, hasLoginFailed: false})
            AuthenticationService.registerSucessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false, hasLoginFailed: true})
        }
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }
}

export default LoginComponent

