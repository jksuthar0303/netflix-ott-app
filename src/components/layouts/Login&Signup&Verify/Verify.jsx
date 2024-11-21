// Verify.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@nextui-org/react';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Users from "../../../db/Users"; // This can be a mock users list

// Mock adapter for verification
const mock = new MockAdapter(Axios);

// Mock API for verifying the user
mock.onPost('http://localhost:5173/verify').reply((config) => {
    const { email, verificationCode } = JSON.parse(config.data);

    // Simulate verification logic
    const user = Users.find(u => u.email === email);
    
    if (!user) {
        return [400, { message: "User not found" }];
    }

    if (verificationCode !== '123456') { // Hardcoded verification code
        return [400, { message: "Invalid verification code" }];
    }

    // Set user as verified
    user.isVerified = true;

    return [200, { message: "User verified successfully" }];
});

const Verify = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await Axios.post('http://localhost:5173/verify', { email, verificationCode });
            alert(response.data.message);

            // Redirect to manage profiles after successful verification
            navigate('/manage-profiles');
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Something went wrong');
            } else {
                setError('An error occurred');
            }
        }

        setIsLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 bg-white rounded-md shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Verify Your Account</h2>
                <Input
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4"
                />
                <Input
                    type="text"
                    label="Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="mb-4"
                />
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <Button onClick={handleVerify} disabled={isLoading}>
                    {isLoading ? 'Verifying...' : 'Verify'}
                </Button>
            </div>
        </div>
    );
};

export default Verify;
