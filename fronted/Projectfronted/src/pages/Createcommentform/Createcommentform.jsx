import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Createcommentform = ({issueId}) => {
  const form = useForm({
    defaultValues: {
      name: "",
    }
  });

  const onSubmit = (data) => {
    console.log("create issue data", data);
  }

  return (
    <div>
      <Form {...form}>
        <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2">
                    <div>
                    <Avatar>
                        <AvatarFallback> A </AvatarFallback>
                        
                    </Avatar>
                    </div>
                
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="w-[20rem]"
                    placeholder="Issue name..."
                  />
                </FormControl>
                <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button type="submit" >
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Createcommentform

