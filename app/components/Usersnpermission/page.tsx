'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';

const UserNpermissions = () => {
    return ( 
    <div className="flex min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-3/4 min-h-screen px-12 py-8 flex flex-col justify-between">
          <div>Users and Permissions</div>
        </div>
      </div>
     );
}
 
export default UserNpermissions;