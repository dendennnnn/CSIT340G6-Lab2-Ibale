import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 - Present"
          title="BS Information Technology Student"
          place="Cebu Institute of Technology - University"
          description="Learning web development, databases, programming, and systems analysis through coursework and projects."
        />

        <TimelineItem
          period="2026"
          title="Software Development Student"
          place="Cebu Institute of Technology - University"
          description="Worked on React, Spring Boot, Java, MySQL, and other software development activities for school."
        />

        <TimelineItem
          period="2022 – 2024"
          title="Senior High School"
          place="Englis Riverside Cebu City"
          description="Developed my interest in technology and started learning programming and web development."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection