import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useDispatch } from "react-redux";
import { createComment } from "../../Redux/Comment/Action";


const Createcommentform = ({issueId}) => {
  const dispatch= useDispatch()
  const form = useForm({
    defaultValues: {
      content: "",
    }
  });

  const onSubmit = (data) => {
    dispatch(createComment({content:data.content,issueId}))
    console.log("create issue data", data);
  }

  return (
    <div>
      <Form {...form}>
        <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
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

