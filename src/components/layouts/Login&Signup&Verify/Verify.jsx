import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react";

const Verify = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();

        if (code === '') {
            setError('Please enter the verification code');
            return;
        }
        // Simulate verification logic
        if (code === '123456') { // Example correct verification code
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));

            // Mark user as verified
            currentUser.isVerified = true;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            // Navigate to the manage profiles page
            navigate('/manage-profiles');
        } else {
            setError('Invalid verification code');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-black bg-opacity-70 p-8 w-96">
                <h1 className="text-white text-2xl mb-4">Verify Your Account</h1>
                <Input
                    label="Verification Code"
                    className="mb-4"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter the verification code"
                />
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <Button onClick={handleVerify} className="w-full" color="success">
                    Verify
                </Button>
            </div>
        </div>
    );
};

export default Verify;
