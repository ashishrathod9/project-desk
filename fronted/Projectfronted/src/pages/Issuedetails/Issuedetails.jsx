import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Createcommentform from "../Createcommentform/Createcommentform";
import CommentCard from "../Commentcard/Commentcard";
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
import { fetchCommentsByIssueId } from "../../Redux/Comment/Action";
import { useDispatch, useSelector } from "react-redux";

const IssueDetails = () => {
  const { issueId } = useParams();
  const dispatch = useDispatch();

  // Access issue and comments from Redux state
  const issue = useSelector((store) => store.issue.issueDetails);
  const comments = useSelector((store) => store.comment.comments);

  useEffect(() => {
    dispatch(fetchIssueById(issueId));
    dispatch(fetchCommentsByIssueId(issueId));
  }, [dispatch, issueId]);

  const handleUpdateIssueStatus = (status) => {
    dispatch(updateIssueStatus(issueId, status));
  };

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border border-gray-800 p-10 rounded-lg">
        {/* Left Section: Issue Details */}
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">{issue?.title}</h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">{issue?.description}</h2>
            </div>
            <div className="mt-5">
              
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  
                </TabsList>
                <TabsContent value="all">
                  <div className="text-sm">All activities will be shown here</div>
                </TabsContent>
                <TabsContent value="comments">
                  <Createcommentform issueId={issueId} />
                  <div className="mt-4 space-y-4">
                    {comments?.map((item) => (
                      <CommentCard key={item} item={item} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  <div className="text-sm">History will be shown here</div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        {/* Right Section: Issue Actions */}
        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee</p>
                  {issue?.assignee?.username ? (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback>
                          {issue.assignee.username[0]}
                        </AvatarFallback>
                      </Avatar>
                      <p>{issue.assignee.username}</p>
                    </div>
                  ) : (
                    <p>No Assignee</p>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Label</p>
                  <Badge>{issue?.status}</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release</p>
                  <p>{new Date().toLocaleDateString()}</p>
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
