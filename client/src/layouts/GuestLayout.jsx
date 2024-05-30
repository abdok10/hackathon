import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../pages/index";
import { useEffect } from "react";
import { USER_DASHBOARD_ROUTE } from "../router";
import { useUsers } from "../context/UserContext";

function GuestLayout() {
    const { authenticated } = useUsers();
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigate(USER_DASHBOARD_ROUTE);
        }
    }, [navigate, authenticated]);
    return (
        <div className="">
            {/* {isLoading && <Loader />} */}

            <Header />

            <div className="">
                <div className="relative h-full w-full bg-slate-950">
                    <div className="absolute bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>
                <Outlet />
            </div>

            {/* <footer className="bg-gray-800 rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a href="#" className="hover:underline">
                            Abd{"'"}Ou™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer> */}
        </div>
    );
}
export default GuestLayout;
