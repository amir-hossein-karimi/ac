import { Button } from "@/core/components/ui/button";
import { Badge } from "@/core/components/ui/badge";
import { Avatar } from "@/core/components/ui/avatar";
import { User } from "@/features/auth/store/authSlice";
import "./ProfileHeader.css";

interface ProfileHeaderProps {
  user: User | null;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-white">
            <div className="w-full h-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-semibold">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
          </Avatar>
          <div className="text-center md:text-left flex-1">
            <h1 className="mb-2 text-white">{user?.name || "User"}</h1>
            <p className="text-blue-100 mb-3">
              {user?.email || "user@example.com"}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="secondary">Professional Plan</Badge>
              <Badge variant="secondary">Verified User</Badge>
            </div>
          </div>
          <Button variant="secondary">Edit Profile</Button>
        </div>
      </div>
    </section>
  );
}
