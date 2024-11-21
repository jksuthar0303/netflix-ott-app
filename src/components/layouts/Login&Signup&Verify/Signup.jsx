import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../Icons/EyeSlashFilledIcon";
import { z } from 'zod';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toggleVisibility = () => setIsVisible(!isVisible);

    // Zod validation schema for the form fields
    const signUpSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Please enter a valid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
    });

    const handleSignUp = async (e) => {
        e.preventDefault();  // Prevent form from reloading the page

        // Validate the fields with the zod schema
        const result = signUpSchema.safeParse({
            name,
            email,
            password,
        });

        if (!result.success) {
            const errorMessage = result.error.errors.map((err) => err.message).join(", ");
            setError(errorMessage);
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);
        setError('');

        // Mock Axios request for testing
        const mock = new AxiosMockAdapter(axios);

        // Setup mock response for the signup endpoint
        mock.onPost('http://localhost:5173/signup').reply(200, {
            message: 'User registered successfully',
            user: {
                id: Date.now(),
                name,
                email,
                password,
                isVerified: false, // New user starts with isVerified as false
                profilePic: '/assets/images/profiles/profile1.jpg',
            }
        });

        try {
            // Make the API call
            const response = await axios.post('http://localhost:5173/signup', {
                name,
                email,
                password,
            });

            // If the signup is successful, simulate sending a verification code
            if (response.status === 200) {
                const newUser = response.data.user;
                console.log(newUser);

                // Store the user in localStorage
                localStorage.setItem('currentUser', JSON.stringify(newUser));

                // Simulate sending a verification code
                mock.onPost('http://localhost:5173/verify').reply(200, {
                    message: 'Verification code sent successfully',
                });



                // Navigate to the verification page
                navigate('/verify');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Error signing up:', err);
        } finally {
            setIsLoading(false);
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
        <div className="relative min-h-screen">
            <header className="absolute top-0 left-0 p-4 z-10">
                <img src="/assets/images/logo.png" alt="Logo" className="w-24 h-auto" />
            </header>

            <div className="flex justify-center items-center min-h-screen">
                <Card radius="none" className="bg-black bg-opacity-70 h-[650px] w-[450px]">
                    <CardBody className="h-full">
                        <h1 className="ml-14 text-white text-3xl font-bold mt-8">Sign Up</h1>

                        <div className="flex flex-col justify-center items-center mt-6">
                            <Input
                                className="max-w-xs mb-6 text-white"
                                variant="bordered"
                                radius="sm"
                                type="text"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                className="max-w-xs mb-6 text-white"
                                variant="bordered"
                                radius="sm"
                                type="email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                radius="sm"
                                variant="bordered"
                                placeholder="Enter your password"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                        aria-label="toggle password visibility"
                                    >
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="hidden text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="hidden text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? 'text' : 'password'}
                                className="max-w-xs text-white mb-6"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Input
                                label="Confirm Password"
                                radius="sm"
                                variant="bordered"
                                placeholder="Confirm your password"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                        aria-label="toggle password visibility"
                                    >
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? 'text' : 'password'}
                                className="max-w-xs text-white mb-6"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                            <Button
                                radius="sm"
                                className="w-80 bg-[#e00000] text-white mb-6 hover:bg-[#e00000] focus:outline-none"
                                onClick={handleSignUp}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing up...' : 'Sign Up'}
                            </Button>

                            <span className="mb-6 text-gray-500 text-lg"> OR</span>
                            <Button
                                radius="sm"
                                className="w-80 bg-[#4d4c4c74] text-white hover:bg-[#4d4c4c74] focus:outline-none"
                            >
                                Use a sign-in code
                            </Button>
                        </div>
                        <div className="ml-14 mt-4">
                            <span className="text-gray-500">Already have an Account?</span>
                            <a href="/login" className="text-white ml-2 hover:underline">Login Now</a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default SignUp;
