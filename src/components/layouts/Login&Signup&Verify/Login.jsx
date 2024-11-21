import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../Icons/EyeSlashFilledIcon";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Users from "../../../db/Users"; // Assuming this contains an array of user objects

// Initialize the mock adapter
const mock = new MockAdapter(axios);

// Mocking an API for login
mock.onPost("http://localhost:5173/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);
  const user = Users.find(user => user.email === email && user.password === password);
  
  if (user) {
    // Check if user is verified
    if (user.isVerified) {
      return [200, { user }];
    } else {
      return [403, { message: "User is not verified." }];
    }
  } else {
    return [401, { message: "Invalid credentials" }];
  }
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5173/login', { email, password });

      if (response.status === 200) {
        const user = response.data.user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
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
            <h1 className="ml-14 text-white text-3xl font-bold mt-8">Sign in</h1>

            <div className="flex flex-col justify-center items-center mt-6">
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
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Sign In'}
              </Button>

              <span className="mb-6 text-gray-500 text-lg"> OR</span>
              <Button
                radius="sm"
                className="w-80 bg-[#4d4c4c74] text-white hover:bg-[#4d4c4c74] focus:outline-none"
              >
                Use a sign-in code
              </Button>

              <a href="/forget-password" className="text-white mt-6 hover:underline">Forget Password?</a>
            </div>

            <div className="ml-14 mt-4">
              <input type="checkbox" id="myCheckbox" />
              <span className="text-white">Remember me</span>
            </div>

            <div className="ml-14 mt-4">
              <span className="text-gray-500">New to Netflix?</span>
              <a href="/signup" className="text-white ml-2 hover:underline">Sign up Now.</a>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
