import { Button } from "@/components/ui/button.jsx";
import { useUsers } from "../../context/UserContext";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function UserSideBar({ className }) {
    const { user } = useUsers();
    return (
        <div className="bg-gray-200 rounded-xl dark:bg-gray-900">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                    Administration
                </h2>
                <div className="space-y-1">
                    <Link to={"/login"}>
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-xl font-bold"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >
                                <rect width="7" height="7" x="3" y="3" rx="1" />
                                <rect
                                    width="7"
                                    height="7"
                                    x="14"
                                    y="3"
                                    rx="1"
                                />
                                <rect
                                    width="7"
                                    height="7"
                                    x="14"
                                    y="14"
                                    rx="1"
                                />
                                <rect
                                    width="7"
                                    height="7"
                                    x="3"
                                    y="14"
                                    rx="1"
                                />
                            </svg>
                            All 
                        </Button>
                    </Link>
                </div>
            </div>

            {user?.roles_id === "teacher" && (
                <div className="py-2">
                    <Link to={'exam'} className="flex justify-center">
                            <Button
                                variant="ghost"
                                className="text-xl font-bold py-3 w-[90%]"
                                >
                                <PlusCircle className="mr-2" />
                                Create Exam
                            </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
