import React, { Component } from 'react';
import UserListContent from '../../view/users/userlist';
import { DataTable } from 'react-data-components';
//import {Table, Column, Cell,TableHeader} from 'fixed-data-table';
import ReactTable from "react-table";
import { Link } from 'react-router';
import "react-table/react-table.css";

class UserList extends Component {

    outData = [];
    constructor(props) {
        super(props);

        this.state = {
            outData: [],
            emailid:''
        };

        this.getusers = this.getusers.bind(this);
    }
    unlockuser(emailid)
    {

        alert(emailid.emailid);

        fetch('http://localhost:7000/admin/userunlock', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailid: 'nileslh.patil@bajalcapital.com'
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.result);    
                return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });
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
       
        this.getusers();
    }


    render() {
        console.log(this.state.outData);
        return <div>
<br/>
<br/>
<br/>
<br/>
            <ReactTable
                data={this.state.outData}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id.toLowerCase]) === filter.value.toLowerCase}
                columns={[
                    {
                        Header: "Name",
                        accessor: "NAME",
                         filterMethod: (filter, row) =>
                         row[filter.id].startsWith(filter.value) ||
                         row[filter.id].endsWith(filter.value)
                        // filterAll: true
                    },
                    {
                        Header: "Email",
                        accessor: "emailid",
                        filterMethod: (filter, row) =>
                         row[filter.id].startsWith(filter.value) ||
                         row[filter.id].endsWith(filter.value)
                           
                             
                    },
                    {
                        Header: "Mobile No",
                        accessor: "mobileno",
                        filterMethod: (filter, row) =>
                        row[filter.id].startsWith(filter.value) ||
                        row[filter.id].endsWith(filter.value)
                          
                    },
                    {
                        header: '',
                        id: 'links',
                        Cell: row => {
                            return (
                              <div>
                                <a className="class-for-name" onClick={this.unlockuser} >Unlock</a>                               
                              </div>
                            )
                          }
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