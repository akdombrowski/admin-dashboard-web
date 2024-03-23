import { Metadata } from "next"
import Image from "next/image"

import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"
import { Activity } from "../features/profile/components/activity"
import { Messages } from "../features/profile/components/messages"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
      <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Button variant="outline">Go back to dashboard</Button>
            <div className="ml-auto flex items-center space-x-4">
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">John Smith</h2>
            <div className="flex items-center space-x-2">
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Engagement</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Intake Overview
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Messages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Intake Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">50% completed.</div>
                    <p className="text-xs text-muted-foreground">
                      Last interaction 3d ago
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Age
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">21</div>
                    <p className="text-xs text-muted-foreground">
                      02/05/2003
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Weight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">155 lbs</div>
                    <p className="text-xs text-muted-foreground">
                      +10.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Activity />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>
                      Recent messages sent from John Smith
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Messages />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}