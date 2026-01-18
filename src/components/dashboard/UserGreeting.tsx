import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "../../types/user";
import TypewriterText from "../ui/TypewriterText";

interface UserGreetingProps {
  userData: UserData | null;
}

const UserGreeting = ({ userData }: UserGreetingProps) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 border-2 border-primary">
          {userData?.profileImage ? (
            <AvatarImage src={userData.profileImage} alt="Profile" className="object-cover" />
          ) : (
            <AvatarFallback className="bg-primary">
              <span className="text-primary-foreground text-lg">👤</span>
            </AvatarFallback>
          )}
        </Avatar>
        <h2 className="text-lg font-semibold text-foreground">
          Hi, <TypewriterText text={userData?.fullName || "User"} speed={100} className="font-semibold" />
        </h2>
      </div>
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <span className="text-sm">🔔</span>
      </div>
    </div>
  );
};

export default UserGreeting;
