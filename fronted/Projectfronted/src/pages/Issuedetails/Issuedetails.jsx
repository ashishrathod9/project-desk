// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Createcommentform from "../Createcommentform/Createcommentform";
// import CommentCard from "../Commentcard/Commentcard";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { fetchIssueById, updateIssueStatus } from "../../Redux/Issue/Action";
// import { fetchCommentsByIssueId } from "../../Redux/Comment/Action";
// import { useDispatch, useSelector } from "react-redux";

// const IssueDetails = () => {
//   const { issueId } = useParams();
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Access issue and comments from Redux state
//   const issue = useSelector((store) => store.issue.issueDetails);
//   const comments = useSelector((store) => store.comment.comments);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         await dispatch(fetchIssueById(issueId));
//         await dispatch(fetchCommentsByIssueId(issueId));
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//         console.error("Failed to fetch issue details:", error);
//       }
//     };

//     fetchData();
//   }, [dispatch, issueId]);

//   const handleUpdateIssueStatus = (status) => {
//     dispatch(updateIssueStatus(issueId, status));
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading issue details</div>;

//   return (
//     <div className="px-20 py-8 text-gray-400">
//       <div className="flex justify-between border border-gray-800 p-10 rounded-lg">
//         {/* Left Section: Issue Details */}
//         <ScrollArea className="h-[80vh] w-[60%]">
//           <div>
//             <h1 className="text-lg font-semibold text-gray-400">{issue?.title}</h1>
//             <div className="py-5">
//               <h2 className="font-semibold text-gray-400">{issue?.description}</h2>
//             </div>
//             <div className="mt-5">
//               <Tabs defaultValue="comments" className="w-[400px]">
//                 <h3>Comments</h3>
//                 {/* <TabsList className="mb-5">
//                   <TabsTrigger value="comments">Comments</TabsTrigger>
//                 </TabsList> */}
//                 <TabsContent value="comments">
//                   <Createcommentform issueId={issueId} />
//                   <div className="mt-4 space-y-4">
//                     {comments?.length > 0 ? (
//                       comments.map((item) => (
//                         <CommentCard key={item.id} item={item} />
//                       ))
//                     ) : (
//                       <div>No comments yet</div>
//                     )}
//                   </div>
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </div>
//         </ScrollArea>

//         {/* Right Section: Issue Actions */}
//         <div className="w-full lg:w-[30%] space-y-2">
//           <Select onValueChange={handleUpdateIssueStatus}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="To Do" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="pending">To Do</SelectItem>
//               <SelectItem value="in_progress">In Progress</SelectItem>
//               <SelectItem value="done">Done</SelectItem>
//             </SelectContent>
//           </Select>

//           <div className="border rounded-lg">
//             <p className="border-b py-3 px-5">Details</p>
//             <div className="p-5">
//               <div className="space-y-7">
//                 <div className="flex gap-10 items-center">
//                   <p className="w-[7rem]">Assignee</p>
//                   {issue?.assignee?.username ? (
//                     <div className="flex items-center gap-3">
//                       <Avatar className="h-8 w-8 text-xs">
//                         <AvatarFallback>
//                           {issue.assignee.username[0]}
//                         </AvatarFallback>
//                       </Avatar>
//                       <p>{issue.assignee.username}</p>
//                     </div>
//                   ) : (
//                     <p>No Assignee</p>
//                   )}
//                 </div>
//                 <div className="flex gap-10 items-center">
//                   <p className="w-[7rem]">Label</p>
//                   <Badge>{issue?.status}</Badge>
//                 </div>
//                 <div className="flex gap-10 items-center">
//                   <p className="w-[7rem]">Release</p>
//                   <p>{new Date().toLocaleDateString()}</p>
//                 </div>
//                 <div className="flex gap-10 items-center">
//                   <p className="w-[7rem]">Reporter</p>
//                   <div className="flex items-center gap-3">
//                     <p>Raam</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IssueDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Createcommentform from "../Createcommentform/Createcommentform";
import CommentCard from "../Commentcard/Commentcard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { fetchIssueById, updateIssueStatus } from "../../Redux/Issue/Action";
import { fetchCommentsByIssueId } from "../../Redux/Comment/Action";
import { useDispatch, useSelector } from "react-redux";

const IssueDetails = () => {
  const { issueId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Access issue and comments from Redux state
  const issue = useSelector((store) => store.issue.issueDetails);
  const comments = useSelector((store) => store.comment.comments);
  const projectOwner = issue?.project?.owner || "Unknown"; // Dynamic project owner

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchIssueById(issueId));
        await dispatch(fetchCommentsByIssueId(issueId));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.error("Failed to fetch issue details:", error);
      }
    };

    fetchData();
  }, [dispatch, issueId]);

  const handleUpdateIssueStatus = (status) => {
    dispatch(updateIssueStatus(issueId, status));
  };

  // Function to dynamically set badge color based on status
  const getBadgeColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-red-500 text-white"; // To Do - Red
      case "in_progress":
        return "bg-yellow-500 text-black"; // In Progress - Yellow
      case "done":
        return "bg-green-500 text-white"; // Done - Green
      default:
        return "bg-gray-500 text-white"; // Default - Gray
    }
  };

  if (isLoading) return <div className="text-center text-gray-400">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error loading issue details</div>;

  return (
    <div className="px-10 py-6 text-gray-400">
      <div className="flex justify-between border  p-6 rounded-lg shadow-md ">
        {/* Left Section: Issue Details */}
        <ScrollArea className="h-[80vh] w-[60%] pr-4">
          <div>
            <h1 className="text-xl font-bold text-white">{issue?.title}</h1>
            <div className="py-4">
              <h2 className="text-lg text-gray-300">{issue?.description}</h2>
            </div>
            <div className="mt-5">
              <Tabs defaultValue="comments" className="w-[400px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-2">Comments</h3>
                <TabsContent value="comments">
                  <Createcommentform issueId={issueId} />
                  <div className="mt-4 space-y-4">
                    {comments?.length > 0 ? (
                      comments.map((item) => <CommentCard key={item.id} item={item} />)
                    ) : (
                      <div className="text-gray-500">No comments yet</div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        {/* Right Section: Issue Actions */}
        <div className="w-full lg:w-[30%] space-y-4 bg-[#1a1a1a] p-4 rounded-lg shadow-lg">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-full  text-white ">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent className=" text-white">
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="border  rounded-lg p-4 ">
            <p className="border-b border-gray-600 pb-2 text-lg text-white">Details</p>
            <div className="mt-4 space-y-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-300">Assignee</p>
                {issue?.assignee?.username ? (
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>{issue.assignee.username[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-white">{issue.assignee.username}</p>
                  </div>
                ) : (
                  <p className="text-gray-400">No Assignee</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Label</p>
                <Badge className={`px-3 py-1 rounded-md ${getBadgeColor(issue?.status)}`}>
                  {issue?.status}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Release</p>
                <p className="text-white">{new Date().toLocaleDateString()}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Reporter</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 text-xs">
                    <AvatarFallback>{projectOwner[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-white">{projectOwner}</p>
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
