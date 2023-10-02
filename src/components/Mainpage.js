import React from 'react';
import { auth } from '../firebase.js';
import QRCode from 'react-qr-code';
import Scanner from './Scanner.js';

const Mainpage = () => {

    const logout = () => {
        auth.signOut();
    }

    return (
        <div style={{ marginTop: 250 }}>
            <center>
                <h3>Welcome{auth.currentUser.phoneNumber}</h3>
                <button style={{ "marginLeft": "20px" }}
                    onClick={logout}>Logout</button>
            </center>

            <QRCode
                size={200}
                bgColor='white'
                fgColor='black'
                value='urlsfdas'
            />
            <Scanner />
        </div>
    );
}

export default Mainpage;
