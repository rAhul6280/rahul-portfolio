import Intro from "./components/intro"
import Projects from "./components/projects"
import Skill from "./components/skill"
import lms from './assets/lms.png'
import auth from './assets/auth.png'
import task from './assets/taskManager.png'

function App() {
  const projectData = [ 
  {
    projectThumbnail: lms,
    projectTitle: "LMS",
    projectDescription: "A lightweight LMS project to practice authentication with Clerk and AuthContext, handle webhooks via Svix, and integrate Stripe for subscription payments.",
    projectLink: "https://rahul-lms.vercel.app/",
    sourceCodeLink: "https://github.com/rAhul6280/lms" 
  },
  {
    projectThumbnail: auth,
    projectTitle: "Auth-project",
    projectDescription: "A custom auth system using Express and MongoDB with access refresh tokens It uses Axios interceptors for automatic token refresh and session handling.",
    projectLink: "https://auth-frontend-fawn.vercel.app/",
    sourceCodeLink: "https://github.com/rAhul6280/ImgProject" 
  },
  {
    projectThumbnail: task,
    projectTitle: "Task Manager",
    projectDescription:"A React-based task manager application that organizes tasks into all, updated, and completed sections, with data persistence using local storage to ensure tasks remain saved across sessions for a seamless user experience.",
    projectLink: "https://task-manager-rahul.vercel.app/",
    sourceCodeLink: "https://github.com/rAhul6280/taskManager" 
  },
    ]
 
  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row font-outfit  bg-[#121213] text-white text-[16px] px-8 pb-12 gap-8 md:gap-16 ">
        
          <div className=" md:w-1/2  gap-10  py-8   flex flex-col">
            
            <div className="">
              
              <Intro/>
            </div>
            <div>
              
              <Skill/>  
            </div>
          </div>
          <div className=" md:w-1/2 gap-6  pt-8   flex flex-col">
        
            {projectData.map((project, index) => (
              <Projects
                key={index}
                projectThumbnail={project.projectThumbnail}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                projectLink={project.projectLink}
                sourceCodeLink={project.sourceCodeLink}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  )
}

export default App
