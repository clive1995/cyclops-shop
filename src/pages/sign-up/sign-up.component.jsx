import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            password:"",
            confirmpassword:""     
        }
    }

    handlechange = (event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handlesubmit = (event)=>{
        event.preventDefault();
        this.setState({name:"",email:"",password:"",confirmpassword:""});
    }

    render(){
        return(
            <div>
                <h2>I dont not have an account</h2>
                <p>sign in with username and pasword</p>
                <form>
                    <FormInput type="text" name="name" label="name" value={this.state.name} onChange={this.handlechange} />
                    <FormInput type="email" name="email" label="email" value={this.state.email} onChange={this.handlechange} />
                    <FormInput type="password" name="password" label="password" value={this.state.password} onChange={this.handlechange} />
                    <FormInput type="password" name="confirmpassword" label="confirmpassword" value={this.state.confirmpassword} onChange={this.handlechange} />
                    <CustomButton type="submit">Log In</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;