import { Activity, Mail, Phone, MapPin, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import { Badge } from "@/core/components/ui/badge";
import { Progress } from "@/core/components/ui/progress";
import { User } from "@/features/auth/store/authSlice";
import "./ProfileOverview.css";

interface ProfileOverviewProps {
  user: User | null;
}

const activities = [
  {
    action: "Updated profile information",
    time: "2 hours ago",
    type: "update",
  },
  {
    action: "Completed Web Development service",
    time: "1 day ago",
    type: "complete",
  },
  {
    action: "Changed password",
    time: "3 days ago",
    type: "security",
  },
  {
    action: "Subscribed to Professional plan",
    time: "1 week ago",
    type: "subscription",
  },
  {
    action: "Joined BluePro",
    time: "2 weeks ago",
    type: "milestone",
  },
];

export function ProfileOverview({ user }: ProfileOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Your account details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">Email</p>
                <p>{user?.email || "user@example.com"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">Member Since</p>
                <p>October 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Progress</CardTitle>
            <CardDescription>
              Complete your profile to unlock all features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Profile Completion</span>
                <span className="text-blue-600">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Add profile photo</span>
                <Badge variant="secondary">Done</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Verify email</span>
                <Badge variant="secondary">Done</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Add phone number</span>
                <Badge variant="secondary">Done</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Complete bio</span>
                <Badge>Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-4 border-b last:border-0"
              >
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p>{activity.action}</p>
                  <p className="text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
