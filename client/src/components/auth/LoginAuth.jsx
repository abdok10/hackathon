/* eslint-disable no-unused-vars */
import { Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUsers } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { USER_DASHBOARD_ROUTE } from "../../router";
import toast from "react-hot-toast";

const formSchema = z.object({
    email: z.string().email().min(5).max(30),
    password: z.string().min(8).max(30),
});

export default function LoginAuth() {
    const navigate = useNavigate();
    const { login, setAuthenticated, getUser, setUser } = useUsers();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "ali@gmail.com",
            password: "password",
        },
    });
    const {
        setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values) => {
        console.log(values)
    
        await login(values.email, values.password)
            .then((value) => {
                if (value.status === 204) {
                    setAuthenticated(true);
                    // getUser().then(({ user }) => {
                    //     setUser(user);
                    //     // if (user.role === "teacher") {
                    //     //     navigate("/teacher/dashboard");
                    //     // }
                    // });

                    // navigate(USER_DASHBOARD_ROUTE);
                    toast.success("Welcome back.");
                }
            })
            .catch(({ response }) => {
                // setError("email", {
                //     message: response.data.errors.email.join(),
                // });

                toast.error("Invalid Credentials");
            });
    };

    return (
        <TabsContent value="login">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Welcome back to Daily Dev.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type={"password"}
                                                placeholder="Password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                className={"mt-5"}
                                disabled={isSubmitting}
                                type="submit"
                            >
                                {isSubmitting && (
                                    <Loader
                                        className={"mx-2 my-2 animate-spin"}
                                    />
                                )}{" "}
                                Login
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </TabsContent>
    );
}
