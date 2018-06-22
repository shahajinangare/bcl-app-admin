import React from 'react';
import { DataTable } from 'react-data-components';


var columns = [
    { title: 'userid', prop: 'userid' },
    { title: 'NAME', prop: 'NAME' },
    { title: 'emailid', prop: 'emailid' },
    { title: 'mobileno', prop: 'mobileno' }
];

  
const UserListContent = ({userdata}) => (

    
<div>

     <DataTable
        className="container"
        keys="userid"
        columns={userdata.columns}
        initialData={userdata.state.outData}
        initialPageLength={5}
        initialSortBy={{ prop: 'NAME', order: 'descending' }}
        pageLengthOptions={[5, 20, 50]}
    />
    
</div>
);

export default UserListContent;