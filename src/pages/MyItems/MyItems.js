import React, { useEffect, useState } from 'react';
import './MyItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import MyItem from '../MyItem/MyItem';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [myTools, setMyTools] = useState([])

    useEffect(() => {
        const handleMyItems = async () => {
            const email = user.email;
            const url = `https://arcane-island-70615.herokuapp.com/myItems?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setMyTools(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        handleMyItems()

    }, [user])

    const handleDeleteItem = _id => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            const url = `http://localhost:5000/tool/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Item deleted successfully")
                        const remainingItems = myTools.filter(tool => tool._id !== _id)
                        setMyTools(remainingItems)
                    }
                })
        }

    }
    return (
        <div className='mb-14'>
            <div>
                <h2 className='text-center text-2xl font-bold my-5'>My Items</h2>
                <div className='table-head container mx-auto'>
                    <p className='text-lg ml-5 font-bold'>ID</p>
                    <p className='text-lg ml-5 font-bold'>Name</p>
                    <p className='text-lg ml-5 font-bold'>Email</p>
                    <p className='text-lg ml-5 font-bold'>Price</p>
                    <p className='text-lg ml-5 font-bold'>Quantity</p>
                    <p className='text-lg ml-5 font-bold'>Action</p>
                </div>
                <div className=''>
                    {
                        myTools.map(filterMyItems => <MyItem
                            key={filterMyItems._id}
                            filterMyItems={filterMyItems}
                            handleDeleteItem={handleDeleteItem}
                        ></MyItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;