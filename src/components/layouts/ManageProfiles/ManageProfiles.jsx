import { Card, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import profilesData from "../../../db/Users"; 
export default function ManageProfiles() {
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [profiles, setProfiles] = useState(profilesData);
    const [newProfileName, setNewProfileName] = useState("");
    const [editingProfile, setEditingProfile] = useState(null); 
    const [isManagingProfiles, setIsManagingProfiles] = useState(false); 

    useEffect(() => {
        document.body.style.backgroundColor = "black";
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);


    const handleNameChange = (event) => {
        setNewProfileName(event.target.value);
    };

    const handleAddProfile = () => {
        if (newProfileName.trim()) {
            const newProfile = {
                id: profiles.length + 1,
                name: newProfileName,
                profilepic: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
            };
            setProfiles([...profiles, newProfile]);
            setNewProfileName("");
            setEditingProfile(null); 
            onOpenChange(false); 
        }
    };

    const handleEditProfile = (profile) => {
        setEditingProfile(profile);
        setNewProfileName(profile.name);
        onOpen(); 
    };

    const handleDeleteProfile = (profileId) => {
        setProfiles(profiles.filter(profile => profile.id !== profileId));
        setEditingProfile(null); 
        onOpenChange(false);
    };

    const handleSaveEditedProfile = () => {
        if (editingProfile && newProfileName.trim()) {
            const updatedProfiles = profiles.map(profile =>
                profile.id === editingProfile.id ? { ...profile, name: newProfileName } : profile
            );
            setProfiles(updatedProfiles);
            setNewProfileName("");
            setEditingProfile(null); 
            onOpenChange(false); 
        }
    };

    const toggleManageProfiles = () => {
        setIsManagingProfiles(prevState => !prevState); 
    };

    const handleOpenAddProfileModal = () => {
        setEditingProfile(null); 
        setNewProfileName(""); 
        onOpen(); 
    };

    return (
        <div className="ManageProfiles">
            <div className="flex flex-col min-h-screen justify-center items-center">
                <h1 className="text-6xl font-bold text-white my-8">Who's watching?</h1>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    {profiles.map((profile) => (
                        <div key={profile.id} className="flex flex-col items-center relative">
                            <Card isFooterBlurred radius="lg" className="mb-2 relative">
                                <Image
                                    className="bg-cover w-full"
                                    height={200}
                                    src={profile.profilepic}
                                    width={200}
                                />

                                {isManagingProfiles && (
                                    <div className="absolute flex z-10">
                                        <Card
                                            isFooterBlurred
                                            radius="lg"
                                            className=" flex items-center justify-center h-[200px] w-[200px] bg-black bg-opacity-60  mb-2"
                                        >
                                            <FontAwesomeIcon onClick={() => handleEditProfile(profile)} icon={faEdit} className="text-white text-7xl cursor-pointer" />
                                        </Card>
                                    </div>
                                )}
                            </Card>
                            <span className="text-white font-bold">{profile.name}</span>
                        </div>
                    ))}

                    <div className="flex flex-col items-center">
                        <Card
                            isPressable
                            onPress={handleOpenAddProfileModal} 
                            isFooterBlurred
                            radius="lg"
                            className="border-none flex items-center justify-center h-[200px] w-[200px] bg-black mb-2"
                        >
                            <FontAwesomeIcon icon={faPlus} className="text-white text-7xl" />
                        </Card>
                        <span className="text-white font-bold">Add Profile</span>
                    </div>
                </div>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-stone-800" size="3xl">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 text-white text-3xl">
                                    {editingProfile ? 'Edit Profile' : 'Add Profile'}
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-lg text-gray-600">
                                        {editingProfile ? 'Edit the profile name.' : 'Add a profile for another person watching Netflix.'}
                                    </p>
                                    <div className="flex justify-center">
                                        <Avatar
                                            isBordered="false"
                                            radius="none"
                                            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                                            className="w-40 h-40"
                                        />
                                        <Input
                                            className="mt-14 ml-4 max-w-[500px]"
                                            size="sm"
                                            type="text"
                                            placeholder="Name"
                                            value={newProfileName}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter className="justify-start ml-40">
                                    {editingProfile ? (
                                        <>
                                            <Button 
                                                className="mr-4" 
                                                radius="none" 
                                                size="lg"  
                                                onPress={handleSaveEditedProfile}
                                                css={{backgroundColor:'White'}}
                                            >
                                                Save Changes
                                            </Button>
                                            <Button
                                                className=" text-white"
                                                radius="none"
                                                size="lg"
                                                variant="bordered"
                                                onPress={() => handleDeleteProfile(editingProfile.id)}
                                            >
                                                Delete Profile
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            className="mr-4" 
                                            radius="none" 
                                            size="lg"  
                                            onPress={handleAddProfile}
                                            css={{backgroundColor:'White'}}
                                        >
                                            Continue
                                        </Button>
                                    )}
                                    {!editingProfile && (
                                        <Button className="text-white" variant="bordered" radius="none" size="lg" onPress={onClose}>
                                            Cancel
                                        </Button>
                                    )}
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Button
                    size="lg"
                    radius="none"
                    color="default"
                    variant="bordered"
                    className="mt-12 text-white"
                    onClick={toggleManageProfiles}
                >
                    {isManagingProfiles ? 'Done' : 'Manage Profiles'}
                </Button>
            </div>
        </div>
    );
}
