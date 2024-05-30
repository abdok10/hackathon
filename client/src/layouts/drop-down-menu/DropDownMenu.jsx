import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";
import { LogOut, PlusCircle, User } from "lucide-react";
import UserApi from "../../services/Api/UserApi.js";
import { useUsers } from "../../context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../router/index.jsx";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
export default function DropDownMenu({ children }) {
    const navigate = useNavigate();
    const { logout: contextLogout, user, setAuthenticated } = useUsers();

    const logout = async () => {
        UserApi.logout().then(() => {
            contextLogout();
            navigate(LOGIN_ROUTE);
            setAuthenticated(false);
            toast.success("Logged out successfully.");
        });
    };

    const goProfile = () => {
        navigate('/dashboard/profile');
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>
                        {" "}
                        <User className="mr-2 h-4 w-4" />
                        {user?.name}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>{children}</DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={logout}
                        className="cursor-pointer"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                        {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                    <Link to={"dashboard/profile"}>
                        <DropdownMenuItem className="cursor-pointer">
                            <PlusCircle onClick={goProfile} className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
