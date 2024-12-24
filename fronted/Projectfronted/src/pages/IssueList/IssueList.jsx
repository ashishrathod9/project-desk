import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Issuecard from "../Issuecard/Issuecard";
import CreateIssueForm from "../CreateIssueForm/CreateIssueForm";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons"; // Ensure the Button component is correctly imported
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIssueById, fetchIssues } from "../../Redux/Issue/Action";
import { store } from '../../Redux/Store';


const IssueList = ({ title, status }) => {
  const dispatch=useDispatch()
  const {id}=useParams()
  const {issue}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(fetchIssues(id))
  },[id])
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-2">
            {issue.issues.filter((issue=>issue.status==status)).map((item)=><Issuecard projectId={id}  item={item} key={item} /> ) }
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <PlusIcon className="w-4 h-4" /> Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm status={status}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;