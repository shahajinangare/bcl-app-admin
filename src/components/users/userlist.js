import React, { Component } from 'react';
import UserListContent from '../../view/users/userlist';
import { DataTable } from 'react-data-components';
//import {Table, Column, Cell,TableHeader} from 'fixed-data-table';
import ReactTable from "react-table";
import "react-table/react-table.css";
var columns = [
    { title: 'userid', prop: 'userid' },
    { title: 'NAME', prop: 'NAME' },
    { title: 'emailid', prop: 'emailid' },
    { title: 'mobileno', prop: 'mobileno' }
];


class UserList extends Component {

    outData = [];
    constructor(props) {
        super(props);

        this.state = {          
            outData: []          
        };

        this.getusers = this.getusers.bind(this);
    }


    getusers() {

        fetch('http://localhost:7000/admin/getusers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                i_emailid: ''
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.result);
                this.setState({
                    outData: responseJson.result
                });
                
                console.log(this.state.outData);
                return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        alert('ss');
        this.getusers();
    }


     render() {
        console.log(this.state.outData);
      return <div>
        
        <ReactTable
  data={this.state.outData}
  columns={[
         {
          Header: "First Name",
          accessor: "NAME"
        },
        {
          Header: "emailid",        
          accessor: "NAME"
        }
      ]     
  }
  defaultPageSize={10}
  className="-striped -highlight"
/>

            {/* <DataTable
                className="container"
                keys="userid"
                columns={columns}
                initialData={this.state.outData}
                initialPageLength={5}
                initialSortBy={{ prop: 'NAME', order: 'descending' }}
                pageLengthOptions={[5, 20, 50]}>              
                
                </DataTable> */}
            </div>



    }
}

export default UserList;