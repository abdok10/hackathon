import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginAuth from "@/components/auth/LoginAuth";
import RegisterAuth from "@/components/auth/RegisterAuth";

export default function Login() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="hidden lg:flex justify-center items-center">
                <img
                    src="auth_img.svg"
                    width={500}
                    height={500}
                    alt="auth_img"
                    className="w-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="flex flex-col justify-start items-start mb-6 w-full md:w-[500px] px-4">
                    {/* <img
                        src="AK_logo.png"
                        width={150}
                        height={150}
                        alt="logo"
                    /> */}
                    <h1 className="text-cabbage font-bold text-2xl md:text-3xl">
                        {/* Where developers suffer together */}
                    </h1>
                </div>
                <Tabs defaultValue="login" className="w-full px-4 md:w-[500px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>
                    <LoginAuth />
                    <RegisterAuth />
                </Tabs>
            </div>
        </div>
    );
}
