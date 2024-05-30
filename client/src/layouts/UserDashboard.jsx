import { useUsers } from "../context/UserContext";
import { ArrowBigUp, Link as LinkIcon, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserSideBar from "./sidebars/UserSideBar";

export default function UserDashboard() {
  const { user, getIntervenants } = useUsers();

  const intervenants = getIntervenants();
//   console.log(intervenants)

  return (
    <>
      <div className="flex items-center gap-6 mb-12">
        <p className="text-3xl font-semibold">Welcome back, {user?.name}!</p>
      </div>

      <div className="flex gap-16">
        <div className={"w-full md:w-1/4"}>
          <UserSideBar />
        </div>
        <div
          className={"w-full md:w-3/4 rounded-xl bg-gray-200 dark:bg-gray-900"}
        >
          <div
            className="pt-4 pl-2 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pb-32"
            style={{ height: "90vh" }}
          >
            {intervenants.length > 0 &&
              intervenants.map((intervenant, index) => (
                <div key={index}>
                  <div className="">
                    <Card className="w-[330px] h-[450px] bg-muted">
                      <CardHeader>
                        {/* <UserAvatar
                                        image={intervenant.user.profile_image}
                                    /> */}
                        <CardTitle className="text-2xl font-bold ">
                          {intervenant.nom}ddd
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-1">
                        <p className="text-sm mb-2 px-4">
                          {intervenant.exam_type}
                        </p>
                        <figure>
                          {/* <Image
                                            src={intervenant.image_url}
                                            width={250}
                                            height={250}
                                            className="w-full h-40 object-cover rounded-lg"
                                            alt="post_img"
                                        /> */}
                        </figure>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <ArrowBigUp size={25} />
                        <div className="flex space-x-2 items-center">
                          <MessageSquare size={20} />
                          {intervenant.comment_count > 0 && (
                            <span>{intervenant.comment_count}</span>
                          )}
                        </div>

                        <LinkIcon size={20} className="cursor-pointer" />
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
