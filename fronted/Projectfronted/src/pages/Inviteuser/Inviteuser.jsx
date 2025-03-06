import React, { useState } from 'react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InviteUser = ({ setIsOpen }) => {
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleInvite = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    try {
      const token = (localStorage.getItem("jwt") || "").trim(); // Retrieve JWT token
      const response = await axios.post(
        'https://ample-solace-production-90a8.up.railway.app/api/projects/invite',
        { email, projectid: id }, // Data payload
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      if (response.status === 200) {
        alert('Invitation sent successfully!');
        setIsOpen(false); // Close the dialog after success
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send invitation');
    }
  };

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
          {error && <p className="text-red-500 col-span-4">{error}</p>}
        </div>
        <DialogFooter>
          <Button type="submit">Send Invitation</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default InviteUser;
