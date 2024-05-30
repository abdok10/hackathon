/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, USER_DASHBOARD_ROUTE } from "../router";
import { GaugeIcon } from "lucide-react";
import { ModeToggle } from "../components/mode-toggle";
import { useEffect, useRef, useState } from "react";
import { useUsers } from "../context/UserContext";
import DropDownMenu from "./drop-down-menu/DropDownMenu";
import UserSidebar from "./sidebars/UserSideBar";
import { usePosts } from "../context/PostContext";


function UserDashboardLayout() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { authenticated, setAuthenticated, user, getUser, setUser, logout } =
        useUsers();

    useEffect(() => {
        if (authenticated) {
            setIsLoading(false);
            getUser()
                .then(({ data }) => {
                    setUser(data);
                    setAuthenticated(true);
                })
                // eslint-disable-next-line no-unused-vars
                .catch((_) => {
                    logout();
                    navigate(LOGIN_ROUTE);
                });

        } else {
            navigate(LOGIN_ROUTE);
        }
    }, [authenticated, navigate, setUser]);

    if (isLoading) {
        return <></>;
    }
    return (
        <>
            <header>
                <div className="items-center justify-between flex bg-opacity-90 px-12 py-4 mb-4 mx-auto">
                    <Link to={"/"} className="flex items-center gap-2">
                        <img
                            src="/assets/plura-logo.svg"
                            width={40}
                            height={40}
                            alt="Plura"
                        />
                        <span className="text-xl font-bold"> Plura.</span>
                    </Link>

                    <ul className="flex place-items-center">
                        <li className="ml-5 px-2 py-1 hidden md:block">
                            <Link className={"flex"} to={USER_DASHBOARD_ROUTE}>
                                <GaugeIcon className={"mx-1"} />
                                Dashboard
                            </Link>
                        </li>
                        <li className="ml-5 px-2 py-1">
                            <DropDownMenu />
                        </li>
                        <li className="px-2 py-1">
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
            </header>
            <hr />
            <main className={"w-[90%] mx-auto px-10 space-y-4 py-4 m-10"}>
                <Outlet />
            </main>
        </>
    );
}
export default UserDashboardLayout;
