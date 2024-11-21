import React, { useEffect, useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useNavigate, useLocation } from 'react-router-dom';
import { EyeFilledIcon } from "../../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../Icons/EyeSlashFilledIcon";
import Users from "../../../db/Users";
import { z } from 'zod';

const UpdatePassword = () => {
    const location = useLocation();
    const { user } = location.state;
    const [newpassword, setNewPassword] = useState('');
    const [reenterpassword, setReEnterPassword] = useState('');
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toggleVisibility = () => setIsVisible(!isVisible);

    const signUpSchema = z.object({
    newpassword: z.string().min(6, "Password must be at least 6 characters"),
    });
    const handleUpdatePassword = (e) => {
        e.preventDefault();
        const result = signUpSchema.safeParse({
            newpassword,
        });
        if (!result.success) {
            const errorMessage = result.error.errors.map((err) => err.message).join(", ");
            setError(errorMessage);
            return;
        }
        if (newpassword !== reenterpassword) {
            setError('Passwords do not match');
            return;
        }

        const updatedUser = { ...user, password: newpassword };
        const userIndex = Users.findIndex(u => u.email === user.email);
        if (userIndex !== -1) {
            Users[userIndex] = updatedUser;
            console.log("Password Updated");

        }

        setIsLoading(true);
        setError('');

        setTimeout(() => {
            setIsLoading(false);
            navigate('/login');
        }, 1000);
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
                <Card radius="none" className="bg-black bg-opacity-70 h-[500px] w-[450px]">
                    <CardBody className="h-full">
                        <h1 className="ml-14 text-white text-3xl font-bold mt-8">Update Password</h1>

                        <div className="flex flex-col justify-center items-center mt-6">

                            <Input
                                className="max-w-xs mb-6 text-white"
                                variant="bordered"
                                radius="sm"
                                value={newpassword}
                                label="Enter New Password"
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
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <Input
                                className="max-w-xs mb-6 text-white"
                                variant="bordered"
                                radius="sm"
                                value={reenterpassword}
                                label="Re-Enter Password"
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
                                onChange={(e) => setReEnterPassword(e.target.value)}
                            />

                            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                            <Button
                                radius="sm"
                                className="w-80 bg-[#e00000] text-white mb-6 hover:bg-[#e00000] focus:outline-none"
                                onClick={handleUpdatePassword}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Password Updating...' : 'Update Password'}
                            </Button>

                            <span className="mb-6 text-gray-500 text-lg"> OR</span>
                            <Button
                                radius="sm"
                                className="w-80 bg-[#4d4c4c74] text-white hover:bg-[#4d4c4c74] focus:outline-none"
                                onClick={() => navigate('/login')}
                            >
                                Back to Login
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default UpdatePassword;
