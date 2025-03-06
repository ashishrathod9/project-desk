// import React, { useEffect, useState } from 'react';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import InviteUser from '../Inviteuser/Inviteuser';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { PlusIcon } from '@radix-ui/react-icons';
// import IssueList from '../IssueList/IssueList';
// import Chatbox from '../Chatbox/Chatbox';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchProjectById } from '../../Redux/Project/Action';
// import { X } from 'lucide-react';

// function ProjectDetails() {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         setLoading(true); // Start loading
//         const token = localStorage.getItem('jwt'); // Retrieve token from localStorage (or wherever it's stored)
//         const res = await fetch(`http://localhost:8080/api/projects/${id}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`, // Add the token to the Authorization header
//           },
//         });
  
//         if (!res.ok) {
//           throw new Error('Failed to fetch project details');
//         }
  
//         const data = await res.json(); // Parse response as JSON
//         setProject(data); // Set the project data
//         console.log('Project Details:', data);
//       } catch (error) {
//         console.error('Error fetching project:', error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };
  
//     fetchProject();
//   }, [id, dispatch]);
  

//   const handleProjectInvite = () => {
//     console.log('Invite user logic triggered');
//   };

//   if (loading) {
//     return (
//       <div className="text-gray-500 w-full text-center py-10">
//         Loading project details...
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="text-gray-500 w-full text-center py-10">
//         No project data available.
//       </div>
//     );
//   }

//   return (
//     <div className="mt-5 lg:px-10">
//       <div className="lg:flex gap-5 justify-between pb-4">
//         {/* Main Content Area */}
//         <ScrollArea className="h-screen lg:w-[69%] pr-2">
//           <div className="text-gray-400 pb-3 w-full">
//             <h1 className="text-lg font-semibold pb-5">
//               {project?.name || 'Project Name'}
//             </h1>
//           </div>
//           <div className="space-y-5 pb-10">
//             <p className="w-full md:max-w-lg lg:max-w-xl">
//               {project.description || 'No description available.'}
//             </p>
//             <div className="flex">
//               <p className="w-36">Owner</p>
//               <p>{project.owner?.username || 'No owner assigned'}</p>
//             </div>
//             <div className="flex">
//               <p className="w-36">Members</p>
//               <div className="flex items-center gap-2">
//                 {project.team?.length > 0 ? (
//                   project.team.map((member, index) => (
//                     <Avatar className="cursor-pointer" key={index}>
//                       <AvatarFallback>
//                         {member.username.charAt(0).toUpperCase()}
//                       </AvatarFallback>
//                     </Avatar>
//                   ))
//                 ) : (
//                   <p>No members added.</p>
//                 )}
//               </div>
//             </div>
//             <Dialog>
//               <DialogTrigger>
//                 <Button size="sm" variant="outline" onClick={handleProjectInvite}>
//                   <span>Invite</span>
//                   <PlusIcon />
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>Invite User</DialogHeader>
//                 <InviteUser />
//               </DialogContent>
//             </Dialog>
//             <div className="flex">
//               <p className="w-36">Category</p>
//               <p>{project.category || 'No category assigned'}</p>
//             </div>
//             <section>
//               <p className="py-5 border-b text-lg tracking-wider">Tasks</p>
//               <div className="lg:flex md:flex gap-3 justify-between py-5">
//               <IssueList status="pending" title="Todo List" project={project} />
//     <IssueList status="in_progress" title="In Progress" project={project} />
//     <IssueList status="done" title="Done" project={project} />
//               </div>
//             </section>
//           </div>
//         </ScrollArea>

//         {/* Chat Box Section */}
//         <ScrollArea className="h-screen lg:w-[30%] p-2">
//           <Chatbox />
//         </ScrollArea>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;


import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import InviteUser from '../Inviteuser/Inviteuser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import IssueList from '../IssueList/IssueList';
import Chatbox from '../Chatbox/Chatbox';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../Redux/Project/Action';

function ProjectDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('jwt');
        const res = await fetch(`https://ample-solace-production-90a8.up.railway.app/api/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch project details');
        }

        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, dispatch]);

  if (loading) {
    return <div className="text-gray-500 w-full text-center py-10">Loading project details...</div>;
  }

  if (!project) {
    return <div className="text-gray-500 w-full text-center py-10">No project data available.</div>;
  }

  return (
    <div className="mt-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="pb-5 border-b border-gray-600">
            <h1 className="text-2xl font-bold text-gray-700">{project?.name || 'Project Name'}</h1>
          </div>
          <p className="text-gray-500 text-lg mt-4 leading-relaxed">{project.description || 'No description available.'}</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center p-3 rounded-lg">
              <p className="w-36 font-semibold">Owner:</p>
              <p className="text-gray-500">{project.owner?.username || 'No owner assigned'}</p>
            </div>

            <div className="flex items-center p-3 rounded-lg relative">
              <p className="w-36 font-semibold">Members:</p>
              <div className="flex items-center gap-2">
                {project.team?.length > 0 ? (
                  project.team.map((member, index) => (
                    <div key={index} className="relative group">
                      <Avatar className="cursor-pointer">
                        <AvatarFallback>{member.username.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1 top-10 -left-2">
                        {member.username}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No members added.</p>
                )}
                <Dialog>
                  <DialogTrigger>
                    <Button size="sm" variant="outline" className="ml-3">
                      <span>Invite</span>
                      <PlusIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>Invite User</DialogHeader>
                    <InviteUser />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex items-center p-3 rounded-lg">
              <p className="w-36 font-semibold">Category:</p>
              <p className="text-gray-500">{project.category || 'No category assigned'}</p>
            </div>

            <section className="mt-8">
              <p className="py-5 border-b border-gray-700 text-lg tracking-wider">Tasks</p>
              <div className="lg:flex md:flex gap-3 justify-between py-5">
                
                  <IssueList status="pending" title="Todo List" project={project} />
                  <IssueList status="in_progress" title="In Progress" project={project} />
                  <IssueList status="done" title="Done" project={project} />
              </div>
            </section>
          </div>
        </ScrollArea>

        <ScrollArea className="h-screen lg:w-[30%] p-2">
          <Chatbox />
        </ScrollArea>
      </div>
    </div>
  );
}

export default ProjectDetails;
