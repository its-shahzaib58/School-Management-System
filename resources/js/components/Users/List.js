import React, { Component } from 'react';
import axios from 'axios';
class List extends Component {
    constructor()
    {
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/users/list')
        .then(resp=>{
            this.setState({users:resp.data});
            console.log(this.users);
        });
    }
    render() {
        return (
            <div >
                <table className="table mt-5">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Updated at</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(userData=>{
                               return(
                                <tr>
                                <td>{userData.id}</td>
                                <td>{userData.user}</td>
                                <td>{userData.created_at}</td>
                                <td>{userData.updated_at}</td>
                                <td>Action</td>
                                </tr>
                               )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
