// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
//   import { Button } from "@/components/ui/button"
// import Createprojectform from '../Project/Createprojectform'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
// import { PersonIcon } from '@radix-ui/react-icons'
// import { useDispatch, useSelector } from 'react-redux'
// import { store } from '../../Redux/Store'
// import { logout } from '../../Redux/Auth/Action'

// const Navbar = () => {
//     const navigate=useNavigate()
//     const { auth }=useSelector(store=>store)
//     const dispatch=useDispatch()
//     const handlelogout=()=>{
//         dispatch(logout())
//     }
//   return (
//     <div className='border-b py-4 px-5 flex items-center'>
//         <div className='flex items-center gap-3'>
//             <p onClick={()=> navigate("/")}className='cursor-pointer'>Project-magemet</p>

//             <Dialog>
//                 <DialogTrigger>
//                      <Button variant="ghost">new project</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                      <DialogHeader>Create project</DialogHeader>
//                      <Createprojectform/>
//                 </DialogContent>
                
//             </Dialog>

//         </div>
//         <div className='flex gap-3 items-center'>
//             <DropdownMenu>
//                 <DropdownMenuTrigger>
//                     <Button className="rounded-full" variant="outline" size="icon">
//                         <PersonIcon/>
//                     </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                     <DropdownMenuItem onClick={handlelogout}>
//                         Logout
//                     </DropdownMenuItem>

//                 </DropdownMenuContent>
                
//             </DropdownMenu>
//             <p>{auth.username?.username}</p>
//         </div>

      
//     </div>
//   )
// }

// export default Navbar


import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Createprojectform from "../Project/Createprojectform"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PersonIcon, PlusIcon, ExitIcon } from "@radix-ui/react-icons"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../../Redux/Store"
import { logout } from "../../Redux/Auth/Action"

const Navbar = () => {
  const navigate = useNavigate()
  const { auth } = useSelector((store) => store)
  const dispatch = useDispatch()
  const [displayText, setDisplayText] = useState("")
  const fullText = "Project Pro"

  useEffect(() => {
    let currentIndex = 0
    let isPaused = false
    const intervalId = setInterval(() => {
      if (!isPaused) {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          isPaused = true
          setTimeout(() => {
            isPaused = false
            currentIndex = 0
          }, 2000) // 2-second pause
        }
      }
    }, 300) // Slower typing speed (300ms between letters)

    return () => clearInterval(intervalId)
  }, [])

  const handlelogout = () => {
    dispatch(logout())
  }

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between bg-background">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl font-bold w-[180px]" // Fixed width for title
          >
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="inline-block w-[2px] h-[1.125em] bg-pink-500 animate-blink ml-[2px] align-middle translate-y-[2px]">
              &nbsp;
            </span>
          </p>

          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-gray-700 transition-colors ml-2"
                title="New Project"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Create project</DialogHeader>
              <Createprojectform />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="rounded-full hover:bg-gray-500 transition-colors"
              variant="outline"
              size="icon"
              title={auth.username?.username || "User"}
            >
              <PersonIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>{auth.username?.username || "User"}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          onClick={handlelogout}
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-gray-500 transition-colors"
          title="Logout"
        >
          <ExitIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default Navbar

