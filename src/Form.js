import React, {Component } from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state ={
            username:''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <h1>Form Demo</h1>
                <input
                    type="text"
                    name="username"
                    onChange={this.changeHandler}
                />
                <button>Submit</button>

            </form>
            <h1>{this.state.username}</h1>
            </div>
            
        );
    }
}

export default Form;