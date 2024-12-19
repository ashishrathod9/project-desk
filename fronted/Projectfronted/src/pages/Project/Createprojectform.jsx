import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Cross1Icon } from "@radix-ui/react-icons";

const tags = ["JavaScript", "React", "Node.js", "Python", "TypeScript", "Vue.js", "Angular", "CSS", "HTML"];

const CreateProjectForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "tags"
  });

  const onSubmit = (data) => {
    console.log(data);
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
                    className="border w-full border-gray-700 py-5 px-5 mb-4"
                    placeholder="Project name..."
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
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5 mb-4"
                    placeholder="Project description..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="w-full border border-gray-700 py-5 px-5 mb-4">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">Full Stack</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value=""
                    onValueChange={(value) => {
                      if (!fields.some(tag => tag.value === value)) {
                        append({ value });
                      }
                    }}
                  >
                    <SelectTrigger className="w-full border border-gray-700 py-5 px-5 mb-4">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <div className="flex gap-2 flex-wrap mt-2">
                  {fields.map((tag, index) => (
                    <div key={tag.id} className="flex items-center rounded-full bg-gray-900 border border-violet-800 px-3 py-1">
                      <span className="text-sm mr-1">{tag.value}</span>
                      <Cross1Icon
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => remove(index)}
                      />
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full my-5">
            Create Project
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateProjectForm

