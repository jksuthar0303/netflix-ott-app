import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../Icons/EyeSlashFilledIcon";
import Users from "../../../db/Users";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (e) => {
    e.preventDefault();


    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const user = Users.find(user => user.email === email && user.password === password);

      if (user) {
        setError('');
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/manageprofiles');
      } else {

        const newUser = {
          id: Users.length + 1,
          name: 'Jaikishan Kulriya',
          email,
          password,
          profilePic: '/assets/images/profiles/profile1.jpg',
        };

        Users.push(newUser);


        localStorage.setItem('users', JSON.stringify(Users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        navigate('/manageprofiles');
      }

      setIsLoading(false);
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
