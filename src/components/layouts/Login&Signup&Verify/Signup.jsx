import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../Icons/EyeSlashFilledIcon";
import { z } from 'zod';
import Users from "../../../db/Users";
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toggleVisibility = () => setIsVisible(!isVisible);

    // Zod validation schema for the form fields
    const signUpSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Please enter a valid email address"), // Email validation
        password: z.string().min(6, "Password must be at least 6 characters"),
    });

    const handleSignUp = (e) => {
        e.preventDefault();  // Prevent form from reloading the page

        // Validate the fields with the zod schema
        const result = signUpSchema.safeParse({
            name,
            email,
            password,
        });

        if (!result.success) {
            // If validation fails, set the error message
            const errorMessage = result.error.errors.map((err) => err.message).join(", ");
            setError(errorMessage);
            return;
        }

        // Check if passwords match
        if (password !== confirmpassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);
        setError('');

        setTimeout(() => {
            const user = Users.find(user => user.email === email);

            if (user) {
                setError('User with this email already exists');
                setIsLoading(false);
                return;
            }

            const newUser = {
                id: Users.length + 1,
                name,
                email,
                password,
                profilePic: '/assets/images/profiles/profile1.jpg',
            };

            Users.push(newUser);
            localStorage.setItem('users', JSON.stringify(Users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            navigate('/manage-profiles');
            setIsLoading(false);
        }, 1000);
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
                                type="Name"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                className="max-w-xs mb-6 text-white"
                                variant="bordered"
                                radius="sm"
                                type="email"
                                label="Email or mobile number"
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
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? 'text' : 'password'}
                                className="max-w-xs text-white mb-6"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />


                            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                            <Button
                                radius="sm"
                                className="w-80 bg-[#e00000] text-white mb-6 hover:bg-[#e00000] focus:outline-none"
                                onClick={handleSignUp}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign Up'}
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
                            <input type="checkbox" id="myCheckbox" />
                            <span className="text-white">Remember me</span>
                        </div>


                        <div className="ml-14 mt-4">
                            <span className="text-gray-500">Already have a Account</span>
                            <a href="/login" className="text-white ml-2 hover:underline">Login Now</a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default SignUp;