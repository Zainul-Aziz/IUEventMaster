import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class SignUp extends Component {
    constructor()
    {
        super();
        this.state = {
            username:'',
            email:'',
            mob:'',
            pass:'',
            cpass:''            
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMobile = this.changeMobile.bind(this);
        this.changePass = this.changePass.bind(this);
        this.changeCpass = this.changeCpass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeName(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }    
    changeMobile(event){
        this.setState({
            mob:event.target.value
        })
    }
    changePass(event){
        this.setState({
            pass:event.target.value
        })
    }
    changeCpass(event){
        this.setState({
            cpass:event.target.value
        })
    }
    checkFormDetails()
        {
            const str1 = this.state.username;
            for(var i=0;i<str1.length;i++)
            {
                var ch = str1.charCodeAt(i);
                //console.log(ch);
                if((ch>=97 && ch<=122) || (ch>=65 && ch<=90) || ch ===32)
                {
                    continue
                }
                else
                {   alert("Username cannot contain special characters(!,@,#,$,%,^,&,*)");
                    return false
                }
            }
            return true
        }
        checkContact()
        {
            const str1 = this.state.mob;
            if(str1.length > 10)
            {
                alert("Check contact number");
                return false
            }
            for(var i=0;i<str1.length;i++)
            {
                var ch = str1.charCodeAt(i);

                console.log(ch);
                if(ch>=48 && ch<=57)
                {
                    continue
                }
                else
                {   alert("Username cannot contain special characters(!,@,#,$,%,^,&,*)");
                    return false
                }
            }
            return true   
        }
        passwordMatch()
        {
            var pass1 = this.state.pass;
            var pass2 = this.state.cpass;
            if(pass1 === pass2)
            {
                return true
            }
            else
            {
                alert("Password not matching.");
                return false
            }
        }
    onSubmit(event)
    {
        event.preventDefault();
        // const registered = {
        //     username:this.state.username,
        //     email:this.state.email,
        //     mob:this.state.mob,
        //     pass:this.state.pass,
        //     cpass:this.state.cpass
        // }
        if(this.checkFormDetails() && this.checkContact() && this.passwordMatch())
        {
        alert(`Registered Successfully.Your username is ${this.state.email}`);
        this.setState({
            username:'',
            email:'',
            mob:'',
            pass:'',
            cpass:''
        })
        //window.location.href="https://zainul-aziz.github.io/IUEventMaster/";
        }
        
    }
    render(){
        return(
            <div className="container">
        <h2 className="text-center mt-3">User Signup</h2>

        {/* <hr className="mx-auto w-50"/> */}
        <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
                <form onSubmit={this.onSubmit}>
                    <div id="main_div" className="form-group from-label-group">
                        <label htmlFor="uname">Username </label>
                        <input type="text" name="username" onChange={this.changeName} value={this.state.name} className="form-control" placeholder="Enter Username"
                            autoComplete="off" required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label htmlFor="email">Email </label>
                        <input type="text" name="email" onChange={this.changeEmail} value={this.state.email} className="form-control" placeholder="Enter Email" autoComplete="off"
                            required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label htmlFor="mob">Contact Number </label>
                        <input type="text" name="mob" onChange={this.changeMobile} value={this.state.mob} className="form-control" placeholder="Enter Contact Number"
                            autoComplete="off" required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label htmlFor="pass">Password </label>
                        <input type="password" name="pass" onChange={this.changePass} value={this.state.pass} className="form-control" placeholder="Enter Password" required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label htmlFor="cpass">Confirm Password </label>
                        <input type="password" name="cpass" onChange={this.changeCpass} value={this.state.cpass} className="form-control" placeholder="Confirm Password"
                            required/>
                    </div>
                    <div className="form-group from-label-group">
                        <input type="submit" className="btn btnsm btn-outline-primary" value="Submit" />
                    </div>
                </form>
            </div>            
            </div>
            </div>
        );
    }
}
export default SignUp;