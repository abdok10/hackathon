/* eslint-disable no-unused-vars */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { axiosClient } from "../api/axios";

import { Textarea } from "@/components/ui/textarea";
const pricingCards = [
    {
        title: "Starter",
        description: "Perfect for trying out plura",
        price: "Free",
        duration: "",
        highlight: "Key features",
        features: ["3 Sub accounts", "2 Team members", "Unlimited pipelines"],
        priceId: "",
    },
    {
        title: "Unlimited Saas",
        description: "The ultimate agency kit",
        price: "$199",
        duration: "month",
        highlight: "Key features",
        features: ["Rebilling", "24/7 Support team"],
        priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
    },
    {
        title: "Basic",
        description: "For serious agency owners",
        price: "$49",
        duration: "month",
        highlight: "Everything in Starter, plus",
        features: ["Unlimited Sub accounts", "Unlimited Team members"],
        priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
    },
];
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string({message: "Name is required"}).min(3),
    email: z.string({message: "Email is required"}).email("Invalid email address"),
    message: z.string({message: "Message is required"}).min(5),
});

function LandingPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // name: "Test 1",
            // email: "teacher@gmail.com",
            // message: "description for Test number 1",
        },
    });
    const {
        // setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (data) => {
        console.log(data);
        await axiosClient.post('/contact', data);
        toast.success("Form submitted successfully");
    };

    return (
        <>
            <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

                {/* <p className="text-center">Run your agency, in one place</p> */}
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="text-9xl font-bold text-center md:text-[200px]">
                        TrainTech 
                    </h1>
                </div>
                <div className="flex justify-center items-center relative md:mt-[-70px]">
                    <img
                        src={"/assets/preview.png"}
                        alt="banner image"
                        height={1200}
                        width={1200}
                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                    />
                    <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
                </div>
            </section>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-1/3 space-y-6 m-auto my-12"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Name</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder="Name"
                                        {...field}
                                        className="dark:bg-gray-900"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Email</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder="Email"
                                        {...field}
                                        className="dark:bg-gray-900"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Message</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder="Message"
                                        className="dark:bg-gray-900"
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
                            <Loader className={"mx-2 my-2 animate-spin"} />
                        )}{" "}
                        Login
                    </Button>
                </form>
            </Form>
        </>
    );
}
export default LandingPage;
