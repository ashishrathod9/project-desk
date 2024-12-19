import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
import Createprojectform from '../Project/Createprojectform'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { PersonIcon } from '@radix-ui/react-icons'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='border-b py-4 px-5 flex items-center'>
        <div className='flex items-center gap-3'>
            <p onClick={()=> navigate("/")}className='cursor-pointer'>Project-magemet</p>

            <Dialog>
                <DialogTrigger>
                     <Button variant="ghost">new project</Button>
                </DialogTrigger>
                <DialogContent>
                     <DialogHeader>Create project</DialogHeader>
                     <Createprojectform/>
                </DialogContent>
                
            </Dialog>

        </div>
        <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button className="rounded-full" variant="outline" size="icon">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>

                </DropdownMenuContent>
                
            </DropdownMenu>
            <p>Ashish</p>
        </div>

      
    </div>
  )
}

export default Navbar
