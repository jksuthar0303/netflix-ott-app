import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react";


const Verify = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // Check if user is already verified
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.isVerified) {
            // If user is verified, redirect to home page
            navigate('/home');
        }
    }, [navigate]);

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
            navigate('/home');
        } else {
            setError('Invalid verification code');
        }
    };
    useEffect(() => {
        document.body.style.backgroundImage = 'url(/assets/images/bg.png)';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';

        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-black bg-opacity-70 p-8 w-96">
                <h1 className="text-white text-2xl mb-4">Verify Your Account</h1>
                <Input
                    label="Verification Code"
                    className="max-w-xs text-white mb-4"
                    variant='bordered'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter the verification code"
                />
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <Button onClick={handleVerify} className="w-full text-white mb-6 bg-[#e00000] hover:bg-[#e00000] focus:outline-none" >
                    Verify
                </Button>
            </div>
        </div>
    );
};

export default Verify;
