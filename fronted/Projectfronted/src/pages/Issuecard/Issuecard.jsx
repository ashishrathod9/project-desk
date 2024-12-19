import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { PersonIcon } from "@radix-ui/react-icons"; // Ensure the PersonIcon is correctly imported
import Userlist from "../Userlist/Userlist";
import { useNavigate } from "react-router-dom";

const IssueCard = () => {
  const navigate=useNavigate()
  return (
    <Card className="rounded-md py-1 pb-2">
      {/* Card Header */}
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle onClick={()=> navigate("/project/3/issue/10")}>Create Navbar</CardTitle>
          {/* Dropdown Menu for Status/Actions */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      {/* Card Content */}
      <CardContent>
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>
          {/* Dropdown Menu for User Actions */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                size="icon"
                className="bg-gray-900 hover:text-black text-white rounded-full"
                variant="ghost"
              >
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Userlist/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;