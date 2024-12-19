import React, { useState } from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InviteUser = ({ setIsOpen }) => {
  const [email, setEmail] = useState('')

  const handleInvite = (e) => {
    e.preventDefault()
    // Here you would typically send the invitation
    console.log('Inviting user:', email)
    setIsOpen(false)
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Invite User</DialogTitle>
        <DialogDescription>
          Enter the email address of the user you'd like to invite to this project.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleInvite}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send Invitation</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

export default InviteUser

