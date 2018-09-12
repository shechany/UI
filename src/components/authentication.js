import React, { Component } from "react";

export class Login extends Component {
  
    render() {
        return (
            <form methhod="post" onSubmit={this.props.onsubmit.bind(this)}>
            <div className="login-form">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" name="check" className="form-check-input" />
                        Check me out
            </label>
                </div><br />
                <button type="submit" className="btn buttons" >L o g i n</button>
            </div>
            </form>
        );
    }
}

export class Register extends Component {
    render() {
        return (
            <div className="register">
                <br /><br />

                <div className="form-group">
                    <label>Firstname</label>
                    <input name="firstname" type="text" className="form-control" placeholder="Enter Firstname" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Middlename</label>
                    <input name="middlename" type="text" className="form-control" placeholder="Middlename" />
                </div>

                <div className="form-group">
                    <label >Lastname</label>
                    <input name="lastname" type="text" className="form-control" placeholder="lastname" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input name="username" type="text" className="form-control" placeholder="Username" />
                </div>


                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="cpass" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword2">Password</label>
                    <input name="pass" type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn buttons">Submit</button>
                <br />
                
            </div>
        );
    }
}



