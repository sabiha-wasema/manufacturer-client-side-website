import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    /*   const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user' , {
          method: 'GET',
          headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      }).then(res => res.json()));  */
    // const { isLoading } = useParams();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    /* if (isLoading) {
        return <Loading></Loading>
    } */
    return (
        <div className='mt-20'>
            {/* <h2 className="text-2xl">All Users: {users.length} </h2> */}
            <h1 className='text-2xl text-red-800 mt-10 font-bold text-center'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            // refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;