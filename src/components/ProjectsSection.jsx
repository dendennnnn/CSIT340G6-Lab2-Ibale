import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="A React portfolio project built using components and Tailwind CSS."
          tech="React · Tailwind CSS"
          link="https://github.com/"
        />

        <ProjectCard
          year="2026"
          title="GameFiTa"
          description="A proposed application for tracking crypto earnings and expenses for Web3 gamers."
          tech="React · Tailwind CSS"
          link="https://github.com/"
        />

        <ProjectCard
          year="2026"
          title="Spring Boot Application"
          description="A school project for learning the basics of building a backend application with Spring Boot."
          tech="Java · Spring Boot"
          link="https://github.com/"
        />

        <ProjectCard
          year="2026"
          title="Database Project"
          description="A school project focused on managing data using relational databases and MySQL."
          tech="Java · MySQL"
          link="https://github.com/"
        />
      </div>
    </section>
  )
}

export default ProjectsSection