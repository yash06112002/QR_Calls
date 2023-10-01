// login.js
import React, { useState } from 'react';
// import { firebase, auth } from '../firebase.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    const signin = () => {
        if (mynumber === "" || mynumber.length < 13) return;

        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, mynumber, appVerifier)
            .then((result) => {
                // console.log("first")
                window.confirmationResult = result;
                setfinal(result);
                // alert("code sent")
                setshow(true);
            })
            .catch((err) => {
                console.log("second")
                alert(err);
                // window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    return (
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={mynumber} onChange={(e) => {
                        setnumber((e.target.value))
                    }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    );
}

export default Login;
