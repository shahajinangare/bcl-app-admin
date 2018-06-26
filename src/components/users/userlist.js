import React, { Component } from 'react';
import UserListContent from '../../view/users/userlist';
import ReactTable from "react-table";
import VWRegisterContent from "../../view/users/register";
import "react-table/react-table.css";
import PopoutWindowut from 'react-popout';

class UserList extends Component {

    outData = [];
    constructor(props) {
        super(props);

        this.state = {
            outData: [],
            emailid: ''
        };

        this.getusers = this.getusers.bind(this);
        this.unlockuser = this.unlockuser.bind(this);
    }

    activeinactiveuser(selectedrow) {

        // console.log(selectedrow.row.emailid);

        fetch('http://localhost:7000/admin/activeinactiveuser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailid: selectedrow.row.emailid
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.result.o_errcode);    
                //return responseJson.result;
                if (responseJson.code === 200)
                    alert(responseJson.message);
            })
            .catch((error) => {
                console.error(error);
            });

        window.location.reload();
    }

    unlockuser(selectedrow) {

        // console.log(selectedrow.row.emailid);

        fetch('http://localhost:7000/admin/userunlock', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailid: selectedrow.row.emailid //'nileslh.patil@bajalcapital.com'
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.result.o_errcode);    
                //return responseJson.result;
                if (responseJson.code === 200)
                    alert(selectedrow.row.NAME + ' is unlocked now.');
            })
            .catch((error) => {
                console.error(error);
            });

        window.location.reload();
    }

    getusers() {

        fetch('http://localhost:7000/admin/getusers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                i_emailid: '',
                i_userid: ''
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

    editusers(selectedrow) {

        return 
        <PopoutWindowut containerId='tearoff'>
    <VWRegisterContent register={this}/>
</PopoutWindowut>
      

    }



    render() {
        console.log(this.state.outData);
        return <div>
            <br />
            <br />
            <br />
            <br />
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
                        Header: 'Actions',
                        Cell:
                            selectedrow => {
                                if (selectedrow.original.isactive === 'N') {
                                    return (
                                        <div>
                                            <a className="badge"
                                                onClick={e => this.activeinactiveuser(selectedrow)}>Activate</a>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div>
                                            <a className="badge"
                                                onClick={e => this.activeinactiveuser(selectedrow)}>Deactivate</a>
                                        </div>
                                    )
                                }



                            }
                    },
                    {
                        Header: 'Unlock',
                        Cell:
                            selectedrow => {
                                if (selectedrow.original.lockstatus === 'Y') {
                                    return (
                                        <div>
                                            <a className="badge"
                                                onClick={e => this.unlockuser(selectedrow)}>Unlock</a>
                                        </div>
                                    )
                                }

                            }
                    },
                    {
                        Header: 'Edit',
                        Cell:
                            selectedrow => {
                                return (
                                    <div>
                                        <a className="badge"
                                       onClick={e => this.editusers(selectedrow)} >Edit</a>
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