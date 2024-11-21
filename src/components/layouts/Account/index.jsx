import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button
} from "@nextui-org/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
export const AuthUserPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function showPopover() {
    console.log("on hover executed");
    setIsOpen(true);
  }

  function hidePopover() {
    setIsOpen(false);
  }

  function handleLogout(){
    localStorage.removeItem("currentUser");
    navigate('/login')
  }
  return (
    <div onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      <Popover
        isOpen={isOpen}
        triggerType="menu"
        placement="bottom"
        backdrop="opaque"
        className="mr-4"
        radius="none"
      >
        <PopoverTrigger>
          <Avatar radius="sm" src="/assets/images/profiles/profile1.jpg" />
        </PopoverTrigger>
        <PopoverContent className="bg-black w-[200px] h-[350px] justify-start items-center mt-2">
          <div className="inline">
            <div className="flex justify-start items-start text-white mb-6">
              <Avatar radius="sm" src="/assets/images/profiles/profile1.jpg" />
              <span className="mt-2 ml-2">Jaikishan Kulriya</span>
            </div>
            <div className="flex justify-start items-start text-white mb-6">
              <Avatar radius="sm" src="/assets/images/profiles/profile3.jpg" />
              <span className="mt-2 ml-2">Children</span>
            </div>
            <div className="flex justify-start items-start text-white mb-6">
              <FontAwesomeIcon icon={faPen} className="text-white text-2xl" />
              <span className="ml-4">ManageProfiles</span>
            </div>
            <div className="flex justify-start items-start text-white">
              <FontAwesomeIcon icon={faUser} className="text-white text-2xl mb-6" />
              <span className="ml-5">Account</span>
            </div>
            <div className="flex justify-start items-start text-white">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-white text-2xl" />
              <span className="ml-5">Help Center</span>
            </div>
            <hr className="mt-4 mb-4"></hr>
            <div className="flex justify-center">
            <Button
                radius="sm"
                onClick={handleLogout}
                className="w-20 bg-[#e00000] text-white mb-6 hover:bg-[#e00000] focus:outline-none"
               
              >
                Logout
              </Button>
            </div>

          </div>

        </PopoverContent>
      </Popover>
    </div>
  );
};
