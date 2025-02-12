// import React, { useState } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Input } from "@/components/ui/input";
// import ProjectCard from '../Project/ProjectCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { store } from '../../Redux/Store';
// import { fetchProjects, searchProjects ,deleteProject } from '../../Redux/Project/Action';


// const tags = [
//  "All", "JavaScript", "React", "Node.js", "Python", "TypeScript", "Vue.js", "Angular", "CSS", "HTML"
// ];
// const ProjectList = () => {
//   const [keyword, setKeyword] = useState("");
//   const dispatch = useDispatch();
//   const projects = useSelector((state) => state.project?.projects || []);
//   const searchResults = useSelector((state) => state.project?.searchProjects || []); // Access searchResults here
//   const [selectedCategory, setSelectedCategory] = useState();
//   const [selectedTag, setSelectedTag] = useState();
  
//   const handleFilterCategory = async(value) => {
//     setSelectedCategory(value);
//     await dispatch(fetchProjects({ category: value, tag: selectedTag }));
//   };
  
//   const handleFilterTags = async(value) => {
//     setSelectedTag(value);
//     await dispatch(fetchProjects({ category: selectedCategory, tag: value }));
//   };
  
//   const handleSearchChange = async(e) => {
//     setKeyword(e.target.value);
//     await dispatch(searchProjects(e.target.value)); // Dispatch the search action
//   };

//   const handleClick = async (id) => {
//       await dispatch(deleteProject({id:id}));
//       console.log("here");
//       await dispatch(fetchProjects({category:selectedCategory,tag:selectedTag }));
//       console.log("again getting project");
//     };
 

//   return (
//     <>
//       <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
//         <section className='filterSection'>
//           <Card className='p-5 sticky top-10'>
//             <div className='flex justify-between lg:w-[20rem]'>
//               <p className='text-xl tracking-wider'>Filters</p>
//               <button variant='ghost' size='icon'>
//                 {/* <MixerHorizontoalIcon /> */}
//               </button>
//             </div>
//             <CardContent className='mt-5 gap-2'>
//               <ScrollArea className='space-y-7 h-[70vh] gap-2'>
//                 <div>
//                   <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
//                 </div>

//                 <div className='pt-5'>
//                   <RadioGroup className='space-y-2' defaultValue="All" onValueChange={(value) => handleFilterCategory( value)}>
//                     <div className='flex items-center gap-2'>
//                       <RadioGroupItem value='All' id='r1' />
//                       <Label htmlFor='r1'>All</Label>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <RadioGroupItem value='fullstack' id='r2' />
//                       <Label htmlFor='r2'>fullstack</Label>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <RadioGroupItem value='frontend' id='r3' />
//                       <Label htmlFor='r3'>frontend</Label>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <RadioGroupItem value='backend' id='r4' />
//                       <Label htmlFor='r4'>backend</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>

//                 <div className='pt-9'>
//                   <h1 className='pb-3 text-gray-400 border-b'>Tag</h1>
//                 </div>

//                 <div className='pt-5'>
//                   <RadioGroup className='space-y-2' defaultValue="All" onValueChange={(value) => handleFilterTags( value)}>
//                     {tags.map((item) => (
//                       <div key={item} className='flex items-center gap-2'>
//                         <RadioGroupItem value={item} id={`r1-${item}`} />
//                         <Label htmlFor={`r1-${item}`}>{item}</Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                 </div>
//               </ScrollArea>
//             </CardContent>
//           </Card>
//         </section>

//         <section className='projectListSection w-full lg:w-[48rem]'>
//           <div className='flex gap-2 items-center pb-5 justify-between'>
//             <div className='relative p-0 w-full'>
//               <Input
//                 className='w-[40%] px-9'
//                 placeholder="Search Project"
//                 onChange={handleSearchChange}
//                 value={keyword}
//               />
//             </div>
//           </div>

//           <div className="space-y-5 min-h-[74vh]">
//             {keyword
//               ? searchResults.map((project) => <ProjectCard key={project.id} project={project} onDelete={handleClick} />) // Use searchResults here
//               : projects.map((project) => <ProjectCard key={project.id} project={project} onDelete={handleClick} />)}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export {ProjectList,tags};


import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Search, Sliders } from "lucide-react"
// import ProjectCard from "./Project/ProjectCard"
import ProjectCard from '../Project/ProjectCard';

import { useDispatch, useSelector } from "react-redux"
import { fetchProjects, searchProjects, deleteProject } from "../../Redux/Project/Action"

const tags = ["All", "JavaScript", "React", "Node.js", "Python", "Spring Boot", "Vue.js", "Angular", "CSS", "HTML"]

const ProjectList = () => {
  const [keyword, setKeyword] = useState("")
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.project?.projects || [])
  const searchResults = useSelector((state) => state.project?.searchProjects || [])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTag, setSelectedTag] = useState("All")

  const handleFilterCategory = async (value) => {
    setSelectedCategory(value)
    await dispatch(fetchProjects({ category: value, tag: selectedTag }))
  }

  const handleFilterTags = async (value) => {
    setSelectedTag(value)
    await dispatch(fetchProjects({ category: selectedCategory, tag: value }))
  }

  const handleSearchChange = async (e) => {
    setKeyword(e.target.value)
    await dispatch(searchProjects(e.target.value))
  }

  const handleDelete = async (id) => {
    await dispatch(deleteProject({ id: id }))
    await dispatch(fetchProjects({ category: selectedCategory, tag: selectedTag }))
  }

  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between items-center lg:w-[20rem]">
            <p className="text-xl tracking-wider">Filters</p>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Sliders size={24} />
            </button>
          </div>
          <CardContent className="mt-5 gap-2">
            <ScrollArea className="space-y-7 h-[70vh] gap-2">
              <div>
                <h1 className="pb-3 text-gray-400 border-b">Category</h1>
              </div>

              <div className="pt-5">
                <RadioGroup className="space-y-2" value={selectedCategory} onValueChange={handleFilterCategory}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="All" id="r1" />
                    <Label htmlFor="r1">All</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="fullstack" id="r2" />
                    <Label htmlFor="r2">Fullstack</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="frontend" id="r3" />
                    <Label htmlFor="r3">Frontend</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="backend" id="r4" />
                    <Label htmlFor="r4">Backend</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="pt-9">
                <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
              </div>

              <div className="pt-5">
                <RadioGroup className="space-y-2" value={selectedTag} onValueChange={handleFilterTags}>
                  {tags.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <RadioGroupItem value={item} id={`r1-${item}`} />
                      <Label htmlFor={`r1-${item}`}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className="projectListSection w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative w-[40%]">
            <Input
              className="pl-10 pr-4 py-2 rounded-md border focus:ring focus:ring-gray-300"
              placeholder="Search Project"
              onChange={handleSearchChange}
              value={keyword}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="space-y-5 min-h-[74vh]">
          {keyword
            ? searchResults.map((project) => <ProjectCard key={project.id} project={project} onDelete={handleDelete} />)
            : projects.map((project) => <ProjectCard key={project.id} project={project} onDelete={handleDelete} />)}
        </div>
      </section>
    </div>
  )
}

export { ProjectList, tags }

