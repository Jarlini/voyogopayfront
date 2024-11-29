import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../component/Authcontainer.css'; // Ensure this path is correct
import pic3 from '../component/photos/Screenshot from 2024-09-09 11-25-09.png'; // Corrected import statement

axios.defaults.baseURL = 'http://localhost:5000'; // Backend URL


function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);

            toast.success('Sign In successful!', {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });

            if (response.data.role === 'admin') {
                navigate('/admin-dashboard'); // Redirect to admin dashboard if admin
            } else {
                navigate('/'); // Redirect to user home page if not admin
            }
        } catch (err) {
            toast.error('Invalid email or password!', {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        }
    };

    return (
        <div className="sign-in-container"> <br/><br/><br/><br/>
            <div className="sign-in-wrapper">
                <div className="image-section">
                    <img src={pic3} alt="Sign In" className="sign-in-image" />
                </div>
                <div className="form-section">
                    <h1 className="form-title">Sign In</h1><br/>
                    <form onSubmit={handleSignIn} className="sign-in-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="email-input"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="password-input"
                        />
                     
                    <p className="account-toggle-text">
                        Don't you have an account? <a href="/auth/signup" className="sign-up-link">Sign Up</a>
                    </p>   <button type="submit" className="submit-button">Sign In</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignInPage;
