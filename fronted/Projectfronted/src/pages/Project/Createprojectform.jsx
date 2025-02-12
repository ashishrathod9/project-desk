import React from "react"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X } from 'lucide-react'
import { useDispatch } from "react-redux"
import { createProject } from "../../Redux/Project/Action"
import { useNavigate } from "react-router-dom"

const tags = [
  "JavaScript", "React", "Node.js", "Python", "Spring Boot", "Vue.js", "Angular", "CSS", "HTML"
]

const CreateProjectForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: []
    }
  })

  const selectedTags = form.watch("tags")

  const onSubmit = async (data) => {
    try {
      await dispatch(createProject(data))
      form.reset()
      if (onClose) {
        onClose()
      }
      navigate("/projects")
    } catch (error) {
      console.error("Error creating project:", error)
    }
  }

  const handleTagSelect = (value) => {
    if (value && !selectedTags.includes(value)) {
      form.setValue("tags", [...selectedTags, value])
    }
  }

  const removeTag = (tagToRemove) => {
    form.setValue(
      "tags",
      selectedTags.filter((tag) => tag !== tagToRemove)
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border border-gray-700 py-5 px-5"
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
                    className="border border-gray-700 py-5 px-5"
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
                    <SelectTrigger className="border border-gray-700 py-5 px-5">
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
            render={() => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={handleTagSelect}>
                    <SelectTrigger className="border border-gray-700 py-5 px-5">
                      <SelectValue placeholder="Select tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.filter(tag => !selectedTags.includes(tag)).map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <div className="flex gap-2 flex-wrap mt-2">
                  {selectedTags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1 rounded-full bg-gray-900 border border-violet-800 px-3 py-1"
                    >
                      <span className="text-sm">{tag}</span>
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors"
                        onClick={() => removeTag(tag)}
                      />
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Create Project
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateProjectForm