/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { useUsers } from "../../context/UserContext";
import { USER_DASHBOARD_ROUTE } from "../../router";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

export default function RegisterAuth() {
  const navigate = useNavigate();
  const { register, login, setAuthenticated, getUser, setUser } = useUsers();
  const [loading, setLoading] = useState(false);
  const [authState, setAuthState] = useState({
    roles_id: null,
    email: "",
    password: "",
    password_confirmation: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({
    roles_id: [],
    email: [],
    password: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    console.log(authState);

    try {
      // Register the user
      const response = await register(authState);
      toast.success("Account created successfully!");

      // Log the user in
      const loginResponse = await login(authState.email, authState.password);
      if (loginResponse.status === 204) {
        setAuthenticated(true);

        // Get the user data
        const userResponse = await getUser();
        setUser(userResponse.user);

        // Navigate to the user dashboard
        navigate(USER_DASHBOARD_ROUTE);
        toast.success("Welcome back.");
      }

      console.log(response);
      if (response?.status === 204) {
        console.log("inside if");
      }

      // Clear the auth state
      setAuthState({});
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 422) {
        setErrors(error.response?.data?.errors);
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    }
  };
  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Welcome to Daily Dev.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="roles_id">Role</Label>

              <select
                name="roles_id"
                id="roles_id"
                value={authState.roles_id}
                onChange={(e) =>
                  setAuthState({
                    ...authState,
                    roles_id: e.target.value,
                  })
                }
              >
                <option value={1}>Admin</option>
                <option value={2}>User Central</option>
                <option value={3}>User Regional</option>
                <option value={4}>User Local</option>
                <option value={5}>Intervenant</option>
                <option value={6}>Entreprise</option>
              </select>

              {/* <span className="text-red-500">{errors?.name?.[0]}</span> */}
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Type here.."
                onChange={(e) =>
                  setAuthState({
                    ...authState,
                    email: e.target.value,
                  })
                }
              />
              <span className="text-red-500">{errors?.email?.[0]}</span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type here.."
                value={authState.password}
                onChange={(e) =>
                  setAuthState({
                    ...authState,
                    password: e.target.value,
                  })
                }
              />
              <span className="text-red-500">{errors?.password?.[0]}</span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                id="cpassword"
                type="password"
                name="password_confirmation"
                placeholder="Type here.."
                value={authState.password_confirmation}
                onChange={(e) =>
                  setAuthState({
                    ...authState,
                    password_confirmation: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <Button className="w-full" disabled={loading}>
                {loading && <Loader className={"mx-2 my-2 animate-spin"} />}{" "}
                Register
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
