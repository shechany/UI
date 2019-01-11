import React, { Component } from "react";

export class Login extends Component {
  
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export class Register extends Component {
    render() {
        return (
            <div className="register">
                <br /><br />
                        <form method="post" onSubmit={this.props.submitReg.bind(this)}>
                        <div className="form-group">
                    <label>Firstname</label>
                    <input name="firstname" type="text" className="form-control" placeholder="Enter Firstname" onChange={this.props.onsubmitReg.bind(this)}/>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Middlename</label>
                    <input name="middlename" type="text" className="form-control" placeholder="Middlename" onChange={this.props.onsubmitReg.bind(this)}/>
                </div>

                <div className="form-group">
                    <label >Lastname</label>
                    <input name="lastname" type="text" className="form-control" placeholder="lastname" onChange={this.props.onsubmitReg.bind(this)}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.props.onsubmitReg.bind(this)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input name="username" type="text" className="form-control" placeholder="Username" onChange={this.props.onsubmitReg.bind(this)}/>
                </div>


                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.props.onsubmitReg.bind(this)}/>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword2">Password</label>
                    <input name="v_password" type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" onChange={this.props.onsubmitReg.bind(this)} />
                </div>
                <button type="submit" className="btn buttons">Submit</button>
                <br />
                

                        </form>
              
            </div>
        );
    }
}



