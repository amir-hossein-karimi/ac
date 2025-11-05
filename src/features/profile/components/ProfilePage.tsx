import {
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  Activity,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { Switch } from "../../../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Separator } from "../../../components/ui/separator";
import { Progress } from "../../../components/ui/progress";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { useAppSelector } from "../../auth/hooks/useAuth";

export function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user);
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

  const stats = [
    {
      label: "Projects",
      value: "12",
      icon: Activity,
      color: "text-blue-600",
    },
    {
      label: "Services Used",
      value: "5",
      icon: Award,
      color: "text-cyan-600",
    },
    {
      label: "Team Members",
      value: "8",
      icon: User,
      color: "text-indigo-600",
    },
    {
      label: "Growth Rate",
      value: "+23%",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarFallback className="bg-blue-100 text-blue-600">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h1 className="mb-2 text-white">
                {user?.name || "User"}
              </h1>
              <p className="text-blue-100 mb-3">
                {user?.email || "user@example.com"}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary">
                  Professional Plan
                </Badge>
                <Badge variant="secondary">Verified User</Badge>
              </div>
            </div>
            <Button variant="secondary">Edit Profile</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon
                      className={`h-8 w-8 ${stat.color} mx-auto mb-2`}
                    />
                    <div className="mb-1">{stat.value}</div>
                    <p className="text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="overview">
                Overview
              </TabsTrigger>
              <TabsTrigger value="settings">
                Settings
              </TabsTrigger>
              <TabsTrigger value="notifications">
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security">
                Security
              </TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Your account details and contact
                      information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">
                          Email
                        </p>
                        <p>
                          {user?.email || "user@example.com"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">
                          Phone
                        </p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">
                          Location
                        </p>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">
                          Member Since
                        </p>
                        <p>October 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Progress</CardTitle>
                    <CardDescription>
                      Complete your profile to unlock all
                      features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Profile Completion</span>
                        <span className="text-blue-600">
                          75%
                        </span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Add profile photo
                        </span>
                        <Badge variant="secondary">Done</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Verify email
                        </span>
                        <Badge variant="secondary">Done</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Add phone number
                        </span>
                        <Badge variant="secondary">Done</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Complete bio
                        </span>
                        <Badge>Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest actions and updates
                  </CardDescription>
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
                          <p className="text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Update your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        defaultValue={
                          user?.name?.split(" ")[0] || ""
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        defaultValue={
                          user?.name?.split(" ")[1] || ""
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      defaultValue={user?.email || ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">
                          Pacific Time (PT)
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Time (MT)
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Time (CT)
                        </SelectItem>
                        <SelectItem value="est">
                          Eastern Time (ET)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>
                    Customize your experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">
                          English
                        </SelectItem>
                        <SelectItem value="es">
                          Español
                        </SelectItem>
                        <SelectItem value="fr">
                          Français
                        </SelectItem>
                        <SelectItem value="de">
                          Deutsch
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue="light">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          Light
                        </SelectItem>
                        <SelectItem value="dark">
                          Dark
                        </SelectItem>
                        <SelectItem value="auto">
                          Auto
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent
              value="notifications"
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Manage your email notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Newsletter</Label>
                      <p className="text-muted-foreground">
                        Receive our weekly newsletter
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Product Updates</Label>
                      <p className="text-muted-foreground">
                        Get notified about new features
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Emails</Label>
                      <p className="text-muted-foreground">
                        Receive promotional content
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Security Alerts</Label>
                      <p className="text-muted-foreground">
                        Important security notifications
                      </p>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                  <CardDescription>
                    Control mobile and desktop notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Activity Updates</Label>
                      <p className="text-muted-foreground">
                        Notifications about your account
                        activity
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Team Mentions</Label>
                      <p className="text-muted-foreground">
                        When someone mentions you
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Comments</Label>
                      <p className="text-muted-foreground">
                        New comments on your projects
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>
                    Update your password regularly for security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">
                      New Password
                    </Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Two-Factor Authentication
                  </CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your
                    account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>2FA Status</p>
                      <p className="text-muted-foreground">
                        Protect your account with 2FA
                      </p>
                    </div>
                    <Badge variant="outline">Disabled</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Enable 2FA</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Sessions</CardTitle>
                  <CardDescription>
                    Manage your active sessions across devices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p>MacBook Pro - San Francisco, CA</p>
                        <p className="text-muted-foreground">
                          Current session
                        </p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p>iPhone 14 - San Francisco, CA</p>
                        <p className="text-muted-foreground">
                          Last active 2 hours ago
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>
                    Manage your subscription
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Professional Plan</p>
                      <p className="text-muted-foreground">
                        Billed monthly
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600">$79/month</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Next billing date
                      </span>
                      <span>December 5, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Payment method
                      </span>
                      <span>•••• 4242</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline">
                    Cancel Subscription
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Manage your payment information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-8 w-8 text-blue-600" />
                      <div>
                        <p>Visa ending in 4242</p>
                        <p className="text-muted-foreground">
                          Expires 12/2026
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">Default</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">
                    Add Payment Method
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>
                    View and download past invoices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p>November 2024</p>
                      <p className="text-muted-foreground">$79.00</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p>October 2024</p>
                      <p className="text-muted-foreground">$79.00</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
