import React from "react";
import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Createcommentform from "../Createcommentform/Createcommentform";
import Commentcard from "../Commentcard/commentcard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  const handleUpdateIssueStatus = (status) => {
    console.log(status);
  };

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border border-gray-800 p-10 rounded-lg ">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              Add Dark Mode Toggle
            </h1>

            <div className="py-5">
              <h2 className="font-semibold text-gray-400">
                Implement a dark mode toggle in the navigation bar. Users should
                be able to switch between light and dark themes seamlessly.
              </h2>
            </div>

            <div className="mt-5">
              <h1 className="pb-3">Activity</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <div className="text-sm">
                    All activities will be shown here
                  </div>
                </TabsContent>
                <TabsContent value="comments">
                  <Createcommentform issueId={issueId} />
                </TabsContent>
                <TabsContent value="history">
                  <div className="text-sm">History will be shown here</div>
                </TabsContent>
                <div>
                  {[1, 1, 1, 1].map(() => (
                    <Commentcard />
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </ScrollArea>
        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">System</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback> A </AvatarFallback>
                    </Avatar>
                    <p>Code with Zosh</p>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Label</p>
                  <Badge>UI/UX</Badge>
                </div>

                
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release</p>
                  <p>19-04-2024</p>
                </div>

                
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Reporter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <p>Raam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
