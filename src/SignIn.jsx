import { Component } from 'react';
class SignIn extends Component 
{
    constructor()
    {
        super();
        this.state = {
            email:'',
            password:''
        }
        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    emailChange(event)
    {
        this.setState({
            email:event.target.value
        })
    }
    passChange(event)
    {
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event)
    {
        event.preventDefault();
        alert(`Logged in as ${this.state.email}`);
        
        this.setState(
        {
            email:'',
            password:''
        })
        window.location.href="https://zainul-aziz.github.io/IUEventMaster/";
    }
    render()
    {
    return(
        <div className="container my-3">
        <div className="rows">
    <div className="mt-5 col-md-6 col-lg-6 m-auto">
    <h2 className="text-center">User Signin</h2>
        <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.emailChange} placeholder="Enter email" />    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.passChange} placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" className="btn btnsm btn-outline-primary">Submit</button>
</form></div></div>
    </div>);
}
}
export default SignIn;