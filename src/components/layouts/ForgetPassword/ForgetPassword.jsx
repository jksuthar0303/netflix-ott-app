import React, {useEffect,useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
    const [error, setError] = useState('');
const navigate = useNavigate(); 

    const [isLoading, setIsLoading] = useState(false);
    const handleForgetPassword = (e) => {
        e.preventDefault();
        
       
        if (!email) {
          setError('Please fill in fields');
          return;
        }else{
            navigate('/update-password')
        }
    
        setIsLoading(true);
        setError('');
    
        setTimeout(() => {
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
        <Card radius="none" className="bg-black bg-opacity-70 h-[400px] w-[450px]">
          <CardBody className="h-full">
            <h1 className="ml-14 text-white text-3xl font-bold mt-8">Forget Password</h1>

            <div className="flex flex-col justify-center items-center mt-6">
            
              <Input
                className="max-w-xs mb-6 text-white"
                variant="bordered"
                radius="sm"
                type="email"
                value={email}
                label="Enter Email or mobile number"
                onChange={(e) => setEmail(e.target.value)}

              />

              {error && <div className="text-red-500 text-center mb-4">{error}</div>}

              <Button
                radius="sm"
                className="w-80 bg-[#e00000] text-white mb-6 hover:bg-[#e00000] focus:outline-none"
                onClick={handleForgetPassword}
                disabled={isLoading}
              >
                {isLoading ? 'Password Forgetting...' : 'Forget Password'}
              </Button>

             
              <span className="mb-6 text-gray-500 text-lg"> OR</span>
              <Button
                radius="sm"
                className="w-80 bg-[#4d4c4c74] text-white hover:bg-[#4d4c4c74] focus:outline-none"
              >
                Sign in Using Password
              </Button>

              
              
</div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ForgetPassword;
