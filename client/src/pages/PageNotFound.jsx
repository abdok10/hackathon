import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src="/404.svg"
        alt="404"
        width={500}
        height={500}
        className="object-contain"
      />

      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}