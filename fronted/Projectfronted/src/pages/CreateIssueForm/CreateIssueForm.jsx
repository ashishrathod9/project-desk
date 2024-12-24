import React, { useId } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useDispatch} from "react-redux"
import { createIssue } from "../../Redux/Issue/Action";
import { useParams } from "react-router-dom";

const CreateIssueForm = ({status}) => {
  const dispatch=useDispatch();
  const {id}=useParams()
  const form = useForm({
    defaultValues: {
      name: "",
      description: ""
    }
  });

  const onSubmit = (data) => {
    data.projectId=id;
    dispatch(createIssue({title : data.name,description: data.description,projectId:id,status,}))
    console.log("create issue data", data);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-800 py-5 px-5 mb-4"
                    placeholder="Issue name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="border w-full border-gray-800  py-5 px-5 mb-4 rounded-md"
                    placeholder="Issue description..."
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full my-5">
            Create Issue
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateIssueForm

