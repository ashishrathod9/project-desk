import React, { useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
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
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../Redux/Project/Action';

function ProjectDetails() {
  const dispatch = useDispatch();
  const project = useSelector((store) => store.project);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id, dispatch]);

  const handleProjectInvite = () => {
    // Add logic for inviting a user to the project
  };

  return (
    <div className="mt-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        {/* Main Content Area */}
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="text-gray-400 pb-3 w-full">
            <h1 className="text-lg font-semibold pb-5">
              {project.projectDetails?.name || 'Project Name'}
            </h1>
          </div>
          <div className="space-y-5 pb-10">
            <p className="w-full md:max-w-lg lg:max-w-xl">
              {project.projectDetails?.description || 'No description available.'}
            </p>
            <div className="flex">
              <p className="w-36">Owner</p>
              <p>{project.projectDetails?.owner?.username || 'No owner assigned'}</p>
            </div>
            <div className="flex">
              <p className="w-36">Members</p>
              <div className="flex items-center gap-2">
                {project.projectDetails?.team?.map((member, index) => (
                  <Avatar className="cursor-pointer" key={index}>
                    <AvatarFallback>
                      {member.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )) || 'No members added.'}
              </div>
            </div>
            <Dialog>
              <DialogTrigger>
                <Button size="sm" variant="outline" onClick={handleProjectInvite}>
                  <span>Invite</span>
                  <PlusIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>Invite User</DialogHeader>
                <InviteUser />
              </DialogContent>
            </Dialog>
            <div className="flex">
              <p className="w-36">Category</p>
              <p>{project.projectDetails?.category || 'No category assigned'}</p>
            </div>
            <section>
              <p className="py-5 border-b text-lg tracking-wider">Tasks</p>
              <div className="lg:flex md:flex gap-3 justify-between py-5">
                <IssueList status="pending" title="Todo List" />
                <IssueList status="in_progress" title="In Progress" />
                <IssueList status="done" title="Done" />
              </div>
            </section>
          </div>
        </ScrollArea>

        {/* Chat Box Section */}
        <ScrollArea className="h-screen lg:w-[30%] p-2">
          <Chatbox />
        </ScrollArea>
      </div>
    </div>
  );
}

export default ProjectDetails;
