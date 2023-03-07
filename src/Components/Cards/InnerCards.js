import React from 'react';
import db from '../../firebase-config';
import { deleteDoc, doc } from 'firebase/firestore';

function InnerCards(data) {
    const deleteUser = async (id) => {
        const deletedUser = data.sendToInnerData.user.filter((el) => {
            return el.id !== id.id
        });
        const deleteData = doc(db, 'users', id.id);
        await deleteDoc(deleteData);
        data.sendToInnerData.setUser(deletedUser);
    }

    const editUser = (el) => {
        data.sendToInnerData.setPopup(true);
    }

    return (
        <>
            {

                data.sendToInnerData.user?.length > 0 ? data.sendToInnerData.user.map((el, key) => {
                    return (
                        <>
                            <div className="card mt-5" key={key}>
                                <div className="card-body">
                                    <h5 className="card-title mb-2">{el.name}</h5>
                                    <h6 className="card-subtitle mb-3 text-muted">{el.email}</h6>
                                    <p className="card-text">{el.message}</p>
                                    <div className='d-flex justify-content-between'>
                                        <button className="card-link edit" onClick={() => { editUser(el) }}>Edit</button>
                                        <button className="card-link del" onClick={() => { deleteUser(el) }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }) : <h1 className='nomemories'>No User, Create Here</h1>
            }
        </>
    )
}

export default InnerCards