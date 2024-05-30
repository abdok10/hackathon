import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsers } from "../context/UserContext";

function UserProfile() {
    const { user, updateUser } = useUsers();
    const [editMode, setEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: user?.email || '',
        phone: user?.password || '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        updateUser(userInfo);
        setEditMode(false);
    };

    return (
        <div className="flex flex-col items-center gap-6 mb-12">
            <Card className="w-full md:w-1/2 bg-muted">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        User Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {editMode ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={userInfo.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <Input
                                    type="tel"
                                    name="phone"
                                    value={userInfo.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            {/* Add more input fields as needed */}
                            <Button onClick={handleSubmit} className="mt-4">
                                Save
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-gray-700">Name</p>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">Email</p>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">Phone</p>
                                <p>{user.phone}</p>
                            </div>
                            {/* Display more user information as needed */}
                            <Button onClick={() => setEditMode(true)} className="mt-4">
                                Edit Profile
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default UserProfile;
