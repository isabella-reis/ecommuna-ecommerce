
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4 bg-red-300">
      <UserButton afterSignOutUrl="/"/>
      <Button variant={"outline"}><p>aaaaaaaaaaaaaaaaaaaaaaaaa</p></Button>
      
    </div>
  );
}

export default SetupPage;