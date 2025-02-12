import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSelector, useDispatch } from "react-redux";
import { assignIssueToUser } from "../../Redux/Issue/Action";
import { useParams } from "react-router-dom";

const Userlist = ({issueDetails,project}) => {
  
  
  
  const dispatch=useDispatch();

console.log(project);


// console.log(res);



  // Handle user click to assign the issue
  const handleAssignUser = (userId) => {
    dispatch(assignIssueToUser(issueDetails.id, userId));
  };

  return (
    <div className="space-y-2">
      {/* Display Current Assignee */}
      <div className="border rounded-md">
        <p className="py-2 px-3">
          {issueDetails?.assignee
            ? `Assigned to: ${issueDetails.assignee.username}`
            : "Unassigned"}
        </p>
      </div>

      {/* User List */}
      <p className="text-gray-400">Click a user to assign the issue:</p>
      {console.log(project)
      }
      {project?.team?.map((user) => (
        <div
          key={user.id}
          onClick={() => handleAssignUser(user.id)} // Assign issue on click
          className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
        >
          <Avatar>
            <AvatarFallback>{user.username?.[0] || "?"}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm leading-none">{user.username}</p>
            <p className="text-sm leading-none">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Userlist;
