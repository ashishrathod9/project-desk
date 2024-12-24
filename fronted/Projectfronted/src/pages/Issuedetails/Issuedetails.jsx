import React, { useDebugValue, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
import { fetchIssueById, updateIssueStatus } from "../../Redux/Issue/Action";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/Store";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  const {issue}=useSelector(store=>store)
  const dispatch=useDispatch();
  const handleUpdateIssueStatus = (status) => {
    dispatch(updateIssueStatus( issueId,status))
  };









  useEffect(()=>{
    dispatch(fetchIssueById(issueId))
  },[issueId])

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border border-gray-800 p-10 rounded-lg ">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              {issue.issueDetails?.title}
            </h1>

            <div className="py-5">
              <h2 className="font-semibold text-gray-400">
                {issue.issueDetails?.description}
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
                  {issue.issueDetails?.assignee?<div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback> A </AvatarFallback>
                    </Avatar>
                    <p>Code with Zosh</p>
                  </div>:<p></p>}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Label</p>
                  <Badge>{issue.issueDetails?.status}</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Label</p>
                  <Badge>{issue.issueDetails?.status}</Badge>
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
