import React from 'react';
import { Component } from 'react';
class Contact extends Component
{
    constructor()
    {
        super();
        this.state = {
                name:'',
                email:'',
                contact:'',
                query:''
            }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeContact = this.changeContact.bind(this);
        this.changeQuery = this.changeQuery.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeName(event)
    {
        this.setState({
            name:event.target.value
        })
    }
    changeEmail(event)
    {
        this.setState({
            email:event.target.value
        })
    }
    changeContact(event)
    {
        this.setState({
            contact:event.target.value
        })
    }
    changeQuery(event)
    {
        this.setState({
            query:event.target.value
        })
    }
    checkName()
        {
            const str1 = this.state.name;
            for(var i=0;i<str1.length;i++)
            {
                var ch = str1.charCodeAt(i);
                //console.log(ch);
                if((ch>=97 && ch<=122) || (ch>=65 && ch<=90) || ch===32)
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
    onSubmit(event)
    {
        event.preventDefault();
        alert(`Details entered by you are : ${this.state.name} ${this.state.email} ${this.state.contact} ${this.state.query}`)
        // const queryInfo = {
        //     name:this.state.name,
        //     email:this.state.email,
        //     contact:this.state.contact,
        //     query:this.state.query
        // }
        if(this.checkName())
        {            
        this.setState({
            name:'',
            email:'',
            contact:'',
            query:''
        })
    }
    }
    render()
    {
    return (
        <div className="container my-3">
            <div className="rows">
                <div className="mt-5 col-md-6 col-lg-6 m-auto">
                    <h2 className="text-center">Contact Us</h2>
                    <form className="mt-3" onSubmit={this.onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name"  name="name" value={this.state.name} onChange={this.changeName}  required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email"  placeholder="Enter your email" name="email" value={this.state.email} onChange={this.changeEmail} required/>
                        </div>                        
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contact"  placeholder="Enter contact number" name="contact" value={this.state.contact} onChange={this.changeContact} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="query" className="form-label">Query/Suggestion</label>
                            <textarea type="text" className="form-control" id="query" placeholder="Enter your query/suggestion" name="query" value={this.state.query} onChange={this.changeQuery}  required/>
                        </div> 
                        <div className="form-group from-label-group">
                        <input type="submit" className="btn btnsm btn-outline-primary" value="Submit" />
                    </div>
                        {/* <Button
                            type="submit"            
                            variant="contained"
                            color="primary"
                            className="px-4 btn btnsm btn-outline-primary"
                            // className={classes.submit}
                        >
                        Submit
                        </Button>                        */}
                        {/* <button type="submit"  className="btn btn-outline-primary">Submit</button> */}
                        {/* <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input> */}
                    </form>
                </div>
            </div>
        </div>
    );
                    }
};
export default Contact;