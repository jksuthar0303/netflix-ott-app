import React, {useEffect,useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
const UpdatePassword = () => {
  const [newpassword, setNewPassword] = useState('');
  const [reenterpassword, setReEnterPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate(); 

const onCLickNavigate =()=>{
    navigate('/login');
}
    const handleForgetPassword = (e) => {
        e.preventDefault();
        
       
        if (!newpassword || !reenterpassword) {
          setError('Please fill in both fields');
          return;
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
        <Card radius="none" className="bg-black bg-opacity-70 h-[500px] w-[450px]">
          <CardBody className="h-full">
            <h1 className="ml-14 text-white text-3xl font-bold mt-8">Update Password</h1>

            <div className="flex flex-col justify-center items-center mt-6">
            
              <Input
                className="max-w-xs mb-6 text-white"
                variant="bordered"
                radius="sm"
                type="newpassword"
                value={newpassword}
                label="Enter New Password"
                onChange={(e) => setNewPassword(e.target.value)}

              />
              <Input
                className="max-w-xs mb-6 text-white"
                variant="bordered"
                radius="sm"
                type="reenterpassword"
                value={reenterpassword}
                label="Re-Enter Password"
                onChange={(e) => setReEnterPassword(e.target.value)}

              />

              {error && <div className="text-red-500 text-center mb-4">{error}</div>}

              <Button
                radius="sm"
                className="w-80 bg-[#e00000] text-white mb-6 hover:bg-[#e00000] focus:outline-none"
                onClick={handleForgetPassword}
                disabled={isLoading}
              >
                {isLoading ? 'Password Updating...' : 'Update Password'}
              </Button>

             
              <span className="mb-6 text-gray-500 text-lg"> OR</span>
              <Button
                radius="sm"
                className="w-80 bg-[#4d4c4c74] text-white hover:bg-[#4d4c4c74] focus:outline-none"
                onClick={onCLickNavigate}
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
