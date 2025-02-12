// import React, { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import Issuecard from "../Issuecard/Issuecard";
// import CreateIssueForm from "../CreateIssueForm/CreateIssueForm";
// import { Button } from "@/components/ui/button";
// import { PlusIcon } from "@radix-ui/react-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchIssues } from "../../Redux/Issue/Action";

// const IssueList = ({ title, status,project }) => {
//   console.log(project);
  
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const { issue } = useSelector((store) => store);
//   const [IsDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

//   useEffect(() => {
//     dispatch(fetchIssues(id));
//   }, [id]);

//   return (
//     <div>
//       <Dialog open={IsDialogOpen} onOpenChange={setIsDialogOpen}>
//         <Card className="w-full md:w-[300px] lg:w-[310px]">
//           <CardHeader>
//             <CardTitle>{title}</CardTitle>
//           </CardHeader>
//           <CardContent className="px-2">
//             <div className="space-y-2">
//               {issue.issues
//                 .filter((issue) => issue.status === status)
//                 .map((item) => (
//                   <Issuecard projectId={id} item={item} key={item.id} project={project}/>
//                 ))}
//             </div>
//           </CardContent>
//           <CardFooter>
//             <DialogTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="w-full flex items-center gap-2 border-4"
//                 onClick={() => setIsDialogOpen(false)} // Open the dialog on button click
//               >
//                 <PlusIcon className="w-4 h-4" /> Create Issue
//               </Button>
//             </DialogTrigger>
//           </CardFooter>
//         </Card>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Create New Issue</DialogTitle>
//           </DialogHeader>
//           {/* Pass dialog control to the form */}
//           <CreateIssueForm
//             status={status}
//             closeDialog={() => setIsDialogOpen(false)}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default IssueList;


import React, { useEffect, useState } from "react";
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
import { PlusIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIssues } from "../../Redux/Issue/Action";

const IssueList = ({ title, status, project }) => {
  console.log(project);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { issue } = useSelector((store) => store);
  const [IsDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

  useEffect(() => {
    dispatch(fetchIssues(id));
  }, [id]);

  return (
    <div>
      <Dialog open={IsDialogOpen} onOpenChange={setIsDialogOpen}>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          {/* Card Header with Title */}
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          {/* Card Content with Scrollable Issue List */}
          <CardContent className="px-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="space-y-2">
              {issue.issues
                .filter((issue) => issue.status === status)
                .map((item) => (
                  <Issuecard projectId={id} item={item} key={item.id} project={project} />
                ))}
            </div>
          </CardContent>

          {/* Card Footer with Create Issue Button */}
          <CardFooter>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 border-4"
                onClick={() => setIsDialogOpen(false)} // Open the dialog on button click
              >
                <PlusIcon className="w-4 h-4" /> Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>

        {/* Dialog Content for Creating a New Issue */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          {/* Pass dialog control to the form */}
          <CreateIssueForm
            status={status}
            closeDialog={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
