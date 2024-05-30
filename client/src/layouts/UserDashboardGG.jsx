/* eslint-disable no-unused-vars */
import { useUsers } from "../context/UserContext";
import { usePosts } from "../context/PostContext";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function UserDashboard() {
    const { posts } = usePosts();
    return (
        <div
            className="pt-4 pl-2 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pb-32"
            style={{ height: "90vh" }}
        >
            User Dashboard
        </div>
    );
}
