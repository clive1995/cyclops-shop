import React  from "react";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }

handelSubmit=(event) =>{
    event.preventDefault();
    this.setState({email:"",password:""});
}

handlechange = event =>{
    const {name,value} = event.target;
    this.setState({[name]:value});
}

    render(){
        return(
            <div className="sign-in">
                <h2>i have an account</h2>
                <span>sign in with your password </span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handlechanges={this.handlechange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handlechanges={this.handlechange} label="Password" required />
                    <CustomButton type="submit" >Sign In</CustomButton> 
                </form>
            </div>
        )
    }
}

export default SignIn