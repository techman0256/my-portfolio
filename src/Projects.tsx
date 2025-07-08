import PageHeader from "./utils/PageHeader";
import Title from "./utils/Title";
import StickyNote from "./utils/StickyNotes";
import metadata from "./metadata.json"
// import { useEffect, useState } from "react";

// type Project = {
//     image?: string
//     title: string
//     description: string
//     isLive?: string
//     github? :string
//     techstack: string
//     children?: React.ReactNode
//     className?: string
//   };

function Projects() {
    const projectList = metadata.completed_projects;
    const smallProjectList = metadata.small_projects;
    // const [projectList, setProjectList] = useState<Project[]>([]);
    // const [smallProjectList, setSmallProjectList] = useState<Project[]>([]);

    // useEffect(() => {
    //     setProjectList(project.completed_projects);
    //     setSmallProjectList(project.small_projects)
    // })
    return (
        <div className="projectContainer flex flex-col items-start mt-[53px]">
            <div className="header">
                <PageHeader pageName="projects" description="List of my projects"></PageHeader>

            </div>
            <div className="">
                <Title className="mt-[68px] mb-[48px]">complete-apps</Title>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4">
                   {projectList.map((project, index) => {
                        return <div className="min-w-[250px]"><StickyNote key={index} {...project} /></div>
                    })}
                </div>
            </div>
            <div>
                <Title className="mt-[68px] mb-[48px]">small-projects</Title>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4">
                    {smallProjectList.map((project, index) => {
                        return <div className="min-w-[250px]"><StickyNote key={index} {...project} /></div>
                    })}
                </div>
            </div>

            <div className="line"> <br></br></div>
        </div>
    )
}

export default Projects;