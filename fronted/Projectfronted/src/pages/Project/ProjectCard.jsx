import React from 'react'
import { Card, CardContent, } from "@/components/ui/card"
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';

const ProjectCard = () => {
  const navigate=useNavigate()
  return (
    
    <Card className="p-5 w-full lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
            <h1 onClick={()=>navigate("/project/3")}className="cursor-pointer font-bold text-lg">
              create project
            </h1>
            <p className="text-sm">fullstack</p>
            </div>
            <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Button className="rounded-full" variant="ghost" size="icon">
              <DotsVerticalIcon/>
          </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent>
            <DropdownMenuItem>
              Update
            </DropdownMenuItem>
            <DropdownMenuItem>
              delete
            </DropdownMenuItem>
          </DropdownMenuContent>

        </DropdownMenu>
      </div>
          </div>
          <p className="text-gray-500 text-sm">
          Developed a full-stack e-commerce application allowing users to browse products, add items to their cart, and securely complete purchases.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {[1,1,1,1].map((item)=><Badge key={item} variant="outline">{item}</Badge>)}

        </div>
      </div>
      
    </Card>
  )
}

export default ProjectCard