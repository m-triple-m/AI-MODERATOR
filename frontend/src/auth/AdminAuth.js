import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminAuth = ({children}) => {

    const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

    if(currentAdmin!==null){
        return children;
    }

    else{
        Swal.fire({
            icon : 'error',
            title: 'Error',
            text : 'sorry wrong credentials '
        });

        return <Navigate to='/main/login' />
    }
}

export default AdminAuth