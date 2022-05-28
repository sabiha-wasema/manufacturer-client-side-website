import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role, _id } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()/*  {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            } */)
            .then(data => {
                /* if (data.modifiedCount > 0) {
                   refetch();
                   toast.success(`Successfully made an admin`); 
               } */
                console.log(data);
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{_id}</td>
            <td>{email}</td>
            <td>  {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs btn-primary">Remove User</button></td>
        </tr>
    );
};

export default UserRow;