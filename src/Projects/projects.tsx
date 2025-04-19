import PageHeader from "../utils/PageHeader";
import Title from "../utils/Title";
import StickyNote from "../utils/StickyNotes";

function Projects() {
    return (
        <div className="projectContainer flex flex-col items-start mt-[53px]">
            <div className="header">
                <PageHeader pageName="projects" description="List of my projects"></PageHeader>

            </div>
            <div>
                <Title className="mt-[68px] mb-[48px]">complete-apps</Title>
                <div className="grid gird-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StickyNote image="https://picsum.photos/330/200"
                        title="ChertNodes"
                        description="Minecraft servers hosting "
                        isLive="https://github.com/techman0256/my-portfolio"
                        github="https://github.com/techman0256/my-portfolio"
                        techstack="HTML SCSS Python Flask"
                        ></StickyNote>

                        <StickyNote
                        image="https://picsum.photos/330/200"
                        title="Lenscape"
                        description="A minimalist Instagram-like app"
                        isLive="https://lenscape.vercel.app"
                        github="https://github.com/techman0256/lenscape"
                        techstack="React Tailwind MongoDB Ruby on Rails"
                        />

                        <StickyNote
                        image="https://picsum.photos/330/201"
                        title="Job Portal"
                        description="Find and post jobs"
                        isLive="https://job-portal-app-3-1.onrender.com"
                        github="https://github.com/techman0256/job-portal"
                        techstack="Node.js Express MongoDB React"
                        />

                </div>
            </div>
            <div>
                <Title className="mt-[68px] mb-[48px]">small-projects</Title>

            </div>
        </div>
    )
}

export default Projects;