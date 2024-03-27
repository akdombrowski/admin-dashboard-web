import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { columns } from "@/features/users/components/columns";
import { DataTable } from "@/features/users/components/data-table";

import Button from "@mui/material/Button";
import Link from "next/link";

export default async function Users() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const users = [
    {
      name: "Maurice Stevenson",
      phone: "873-726-2391",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "56 minutes ago",
      intake: "In Progress",
    },
    {
      name: "Joseph Perez",
      phone: "455-244-7379",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "19 minutes ago",
      intake: "In Progress",
    },
    {
      name: "Renee Nixon",
      phone: "401-512-9504",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "54 minutes ago",
      intake: "Completed",
    },
    {
      name: "Laura Andrews",
      phone: "439-825-2787",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "31 minutes ago",
      intake: "Completed",
    },
    {
      name: "Melvin Nichols",
      phone: "701-817-7488",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "25 minutes ago",
      intake: "In Progress",
    },
    {
      name: "Tonya Garcia",
      phone: "301-946-4084",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "3 minutes ago",
      intake: "Needs Assistance",
    },
    {
      name: "Kevin Gonzalez",
      phone: "322-114-8321",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "41 minutes ago",
      intake: "Needs Assistance",
    },
    {
      name: "Matthew Mathis",
      phone: "589-920-8537",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "4 minutes ago",
      intake: "Needs Assistance",
    },
    {
      name: "Lisa Tran",
      phone: "470-216-2795",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "21 minutes ago",
      intake: "Needs Assistance",
    },
    {
      name: "Christopher Rivera",
      phone: "200-562-8712",
      lastMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      activity: "35 minutes ago",
      intake: "In Progress",
    },
  ];
  return (
    <>
      <div className="md:hidden"></div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome back John!
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a quick overview of your clients.
            </p>
          </div>
          <Link href="api/auth/signout">
            <Button variant="contained">Logout</Button>
          </Link>
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    </>
  );
}
