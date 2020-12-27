import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
    class Register extends Component 
    {
      constructor()
      {
          super();
          this.state = {
            fname:'',
            lname:'',
            uname:'',
            ucity:'',
            ustate:'',
            university:'',
            ucourse:'',
            ubranch:'',
            uyear:'',
            uevent:'',
            tname:'',
            tsize:''            
          }
          this.changeFname = this.changeFname.bind(this);
          this.changeLname = this.changeLname.bind(this);
          this.changeUname = this.changeUname.bind(this);
          this.changeCity = this.changeCity.bind(this);
          this.changeState = this.changeState.bind(this);
          this.changeUniv = this.changeUniv.bind(this);
          this.changeBranch = this.changeBranch.bind(this);
          this.changeCourse = this.changeCourse.bind(this);
          this.changeYear = this.changeYear.bind(this);
          this.changeEvent = this.changeEvent.bind(this);
          this.changeTname = this.changeTname.bind(this);
          this.changeTsize = this.changeTsize.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
      }
      changeFname(event){
          this.setState({
              fname:event.target.value
          })
      }
      changeLname(event){
          this.setState({
              lname:event.target.value
          })
      }
      changeUname(event){
        this.setState({
            uname:event.target.value
        })
      }
    changeCity(event){
          this.setState({
              ucity:event.target.value
          })
      }
      changeState(event){
          this.setState({
              ustate:event.target.value
          })
      }
      changeUniv(event){
          this.setState({
              university:event.target.value
          })
      }
      changeBranch(event){
        this.setState({
            ubranch:event.target.value
        })
      }
      changeCourse(event){
        this.setState({
          ucourse:event.target.value
        })
      }
      changeYear(event){
        this.setState({
          uyear:event.target.value          
        })
      }
      changeEvent(event){
        this.setState({
          uevent:event.target.value
        })
      }
      changeTname(event){
        this.setState({
          tname:event.target.value
        })
      }

      checknotEmpty()
      {
        var str1 = this.state.ustate;
        var str2 = this.state.university;
        var str3 = this.state.uyear;
        var str4 = this.state.uevent;
        if(str1.length === 0 || str2.length === 0 || str3.length === 0 || str4.length === 0)
        {
          alert("Empty spaces not allowed.");
          return false;
        }
        return true;
      }
      changeTsize(event){
          this.setState({
          tsize:event.target.value
        })
      }
      checkTeamSize(year)
      {
        if(year>10 || year<1)
        {
          alert('Team size must be in range(1-10).');
          return false;
        }
        return true
      }
      checkFormData(strval)
      {
        var str = strval.trim();
        if(str.length === 0)
        {
          alert("Empty field not allowed.");
          return false;
        }               
        console.log(str);
        for(var i=0;i<str.length;i++)
        {
          var ch = str.charAt(i);
          console.log(ch);
          if(ch==='!' || ch==='@' || ch==='#' || ch==='$' || ch==='%' || ch==='^' || ch==='&' || ch==='*')
          {
            alert('Special characters are not allowed.(!,@,#,$,%,^,&,*)');
            return false;
          }
        }
        return true
      }
      onSubmit(event)
      {        
          event.preventDefault();
          if(this.checknotEmpty() && this.checkFormData(this.state.fname) && this.checkFormData(this.state.lname) && this.checkFormData(this.state.ucity) && this.checkFormData(this.state.ubranch) && this.checkFormData(this.state.tname) && this.checkTeamSize(this.state.tsize))
          {                    
          alert(`Congratulations..Team ${this.state.tname} is Successfully Registered in ${this.state.uevent}`);
          this.setState({
              fname:'',
              lname:'',
              uname:'',
              ucity:'',
              ustate:'',
              university:'',
              ucourse:'',
              ubranch:'',
              uyear:'',
              uevent:'',
              tname:'',
              tsize:''
          });
          // window.location.href="https://zainul-aziz.github.io/IUEventMaster/";
          
          }
          
      }
      render(){
      return(
        <div className="container px-5">
        <h1 className="text-center mt-2 ">Event Registration Form</h1>
<form onSubmit={this.onSubmit} className="row g-3 mt-2">
  <div className="col-md-4">
    <label htmlFor="fname" className="form-label">First name</label>
    <input type="text" name="fname" className="form-control"  placeholder="Enter First Name" onChange={this.changeFname} value={this.state.fname} required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="lname" className="form-label">Last name</label>
    <input type="text" name="lname" className="form-control"  placeholder="Enter Last Name" onChange={this.changeLname} value={this.state.lname} required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="email" name="uname" className="form-control"  aria-describedby="inputGroupPrepend2" placeholder="Enter Userame" onChange={this.changeUname} value={this.state.uname} required/>
    </div>
  </div>
  <div className="col-md-6 mt-3">
    <label htmlFor="ucity" className="form-label">City</label>
    <input type="text" name="ucity" className="form-control" placeholder="Enter City" onChange={this.changeCity} value={this.state.ucity} required/>
  </div>
  <div className="col-md-3  mt-3">
    <label htmlFor="validationDefault04" className="form-label">State</label>
    <select className="form-select form-control" name="ustate" onChange={this.changeState} value={this.state.ustate} id="validationDefault04"  required>
      <option selected disabled >Choose State</option>
      <option></option>
      <option>Uttar Pradesh</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Gujarat</option>
      <option>Bihar</option>
      <option>Rajasthan</option>
      <option>Punjab</option>
    </select>
    {/* <label for="ustate" className="form-label">State</label>
    <input type="text" name="ustate" className="form-control" placeholder="Enter state" onChange={this.changeState} value={this.state.ustate} required/> */}
  </div>
  <div className="col-md-3  mt-3">
    {/* <label for="university" className="form-label">University</label>
    <input type="text" name="university" className="form-control" placeholder="Enter University/College Name" onChange={this.changeUniv} value={this.state.university} required/> */}
    <label htmlFor="university" className="form-label">University</label>
    <select className="form-select form-control" name="university" onChange={this.changeUniv} value={this.state.university} id="university"  required>
      <option selected disabled >Choose University</option>
      <option></option>
      <option>Integral University</option>
      
    </select>
  </div>
  
  <div className="col-md-3  mt-3">
    <label htmlFor="ucourse" className="form-label">Course</label>
    <input type="text" name="ucourse" className="form-control" placeholder="Enter Course" onChange={this.changeCourse} value={this.state.ucourse} required/>
  </div>
  <div className="col-md-3  mt-3">
    <label htmlFor="ubranch" className="form-label">Branch</label>
    <input type="text" name="ubranch" className="form-control" placeholder="Enter Branch" onChange={this.changeBranch} value={this.state.ubranch} required/>
  </div>
  <div className="col-md-3  mt-3">
    {/* <label for="uyear" className="form-label">Year</label>
    <input type="number" name="uyear" className="form-control" placeholder="Enter Year" onChange={this.changeYear} value={this.state.uyear} required/> */}
    <label htmlFor="uyear" className="form-label">Year</label>
    <select className="form-select form-control" name="uyear" onChange={this.changeYear} value={this.state.uyear}   required>
      <option selected disabled >Choose Year</option>
      <option></option>            
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      
    </select>
  </div>
  <div className="col-md-3  mt-3">
    {/* <label for="uevent" className="form-label">Event</label>
    <input type="text" name="uevent" className="form-control" placeholder="Enter Event" onChange={this.changeEvent} value={this.state.uevent} required/> */}
    <label htmlFor="uevent" className="form-label">Event</label>
    <select className="form-select form-control" name="uevent" onChange={this.changeEvent} value={this.state.uevent}  required>
      <option selected disabled >Choose Event</option> 
      <option></option>     
      <option>Treasure Hunt</option>
      <option>Beg Borrow Steal</option>
      <option>Andaz-E-Awadh</option>
      <option>Nukkad Natak</option>
      <option>Photography</option>
      <option>Quizaholic</option>
    </select>
  </div>
  <div className="col-md-6  mt-3">
    <label htmlFor="tname" className="form-label">Team Name</label>
    <input type="text" name="tname" className="form-control" placeholder="Enter Team Name" onChange={this.changeTname} value={this.state.tname} required/>
  </div>
  <div className="col-md-6 mt-3">
    <label htmlFor="tsize" className="form-label">Team Size</label>
    <input type="number" name="tsize" className="form-control" placeholder="Enter Team Size" onChange={this.changeTsize} value={this.state.tsize} required/>    
  </div>
  <div className="form-group form-label-group mt-4 mx-3">
      <input type="submit" className="btn btnsm btn-outline-primary" value="Submit" />
  </div>
</form>

</div>



    )
};
    }
export default Register;