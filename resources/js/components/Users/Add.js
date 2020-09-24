import Axios from 'axios';
import React, { Component } from 'react';

class Add extends Component {
    constructor()
    {
        super();
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            user_name:''
        }
    }
    onChangeUserName(e){
        this.setState({
            user_name:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        const user = {
            user_name : this.state.user_name
        }

        axios.post('http://127.0.0.1:8000/user/store',user).then(res=> console.log(res.data));
    }
    render() {
        return (
            <div className="col-4 bg-dark offset-4 rounded p-5 text-light">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" class="form-control" id="userName" aria-describedby="emailHelp"
                        value={this.state.user_name}
                        onChange={this.onChangeUserName}
                        placeholder="Enter user name"/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        );
    }
}

export default Add;
