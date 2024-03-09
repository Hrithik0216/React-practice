import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backToNormal } from '../login/LoginSlice';


const Profile = () => {
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Mail: {user.mail}</p>
            <p>Age: {user.age}</p>
            <button onClick={() => dispatch(backToNormal())}>Back to Default</button>
        </div>
    );
}

export default Profile;
