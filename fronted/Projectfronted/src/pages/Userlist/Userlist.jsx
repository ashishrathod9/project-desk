import React from 'react'
import { Avatar , AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Redux/Store';
import { assignIssueToUser } from '../../Redux/Issue/Action';

const Userlist = ({issueDetails}) => {
  const {project}=useSelector(store=>store)
  const dispatch=useDispatch()
  const handleAssignIssueTouser=(userId)=>
  {
      dispatch(assignIssueToUser(issueDetails.id,userId))
  }   

  
return (
    <div className="space-y-2">
  
  <div className="border rounded-md">
    <p className="py-2 px-3">
      {issueDetails.assignee?.username || "Unassigned"}
    </p>
  </div>

  
  {project.projectDetails?.team.map((item)=><div onClick={handleAssignIssueTouser(item.id)}
  
  
  
  key={item} className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
    <Avatar>
      <AvatarFallback> {item.username[0]} </AvatarFallback>
    </Avatar>
    <div className="space-y-1">
      <p className="text-sm leading-none">{item.username}</p>
      <p className="text-sm leading-none">{item.email}</p>
    </div>
  </div>)}
</div> 
 )
}

export default Userlist
