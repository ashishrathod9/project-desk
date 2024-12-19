import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import InviteUser from '../Inviteuser/Inviteuser';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {Button } from "@/components/ui/button";
import { PlusIcon } from '@radix-ui/react-icons';
import IssueList from '../IssueList/IssueList'
import Chatbox from '../Chatbox/Chatbox';


function ProjectDetails() {

    const handleProjectInvite=()=>{
        
    }
  return (
    <div className="mt-5 lg:px-10">
  <div className="lg:flex gap-5 justify-between pb-4">
    {/* Main Content Area */}
    <ScrollArea className="h-screen lg:w-[69%] pr-2">
      <div className="text-gray-400 pb-3 w-full">
        <h1 className="text-lg font-semibold pb-5">Create Ecommerce Website</h1>
      </div>
      <div className="space-y-5 pb-10">
        <p className="w-full md:max-w-lg lg:max-w-xl">
          Developed a full-stack e-commerce application allowing users to browse products, add items to their cart, and securely complete purchases.
        </p>
        <div className="flex">
          <p className="w-36">Project lead</p>
          <p>Ashish</p>
        </div>
        <div className="flex">
          <p className="w-36">Members</p>
          <p>Ashish</p>
          <div className="flex items-center gap-2">
            {[1, 1, 1, 1].map((item) => (
              <Avatar className="cursor-pointer" key={item}>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button size="sm" variant="outline" onclick={handleProjectInvite}>
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
          <p>Ashish</p>
        </div>
        <div className="flex">
          <p className="w-36">Project lead</p>
          <Badge>Ashish</Badge>
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
      <Chatbox/>
    </ScrollArea>
  </div>
</div>
  )
}

export default ProjectDetails
