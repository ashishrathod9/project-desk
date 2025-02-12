import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"

const ProjectCard = ({ project, onDelete }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    onDelete(project.id)
  }

  return (
    <Card className="p-5 w-full lg:max-w-3xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={() => navigate(`/project/${project.id}`)}
                className="cursor-pointer font-bold text-lg transition-colors"
              >
                {project.name}
              </h1>
              <p className="text-sm">{project.category}</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="rounded-full" variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleClick}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-500 text-sm">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {project.tags?.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard

