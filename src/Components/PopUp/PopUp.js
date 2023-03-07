import db from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './PopUp.css';

function PopUp(popUp) {
    const userCollection = collection(db, 'users');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(userCollection);
            popUp.props.setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData();
    }, []);

    const handleChange = async (e) => {
        var { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleData = (e) => {
        e.preventDefault();
        const postData = async () => {
            await addDoc(userCollection, formData);
            popUp.props.setUser([...popUp.props.user, formData]);
        }
        postData();
        popUp.props.setPopup(false);
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    }

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <div className={popUp.props.popUp ? 'login-box active' : 'login-box'}>
                <div className='cross' onClick={popUp.props.closePopup}>X</div>
                <form className='PopUp' onSubmit={handleData} onReset={resetForm}>
                    <div className="user-box">
                        <input type="text" value={formData.title} onChange={handleChange} name="name" required />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" value={formData.email} onChange={handleChange} name="email" required />
                        <label>Email ID</label>
                    </div>
                    <div className="user-box">
                        <input type="text" value={formData.discription} onChange={handleChange} name="message" required />
                        <label>Message</label>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button type='submit'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                        <button type='reset'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PopUp;