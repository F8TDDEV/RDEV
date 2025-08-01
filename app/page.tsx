"use client"

import { useState, useEffect } from "react"
import ContainerTextFlipDemo from "@/components/container-text-flip-demo"
import { GridBackground } from "@/components/ui/grid-background"
import { FloatingDock } from "@/components/ui/floating-dock"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { CometCard } from "@/components/ui/comet-card"
import { CardStack } from "@/components/ui/card-stack"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { MultiStepLoader } from "@/components/ui/multi-step-loader"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ColourfulText } from "@/components/ui/colourful-text"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { ContainerScroll } from "@/components/ui/container-scroll"
import { Spotlight } from "@/components/ui/spotlight"
import { Footer } from "@/components/ui/footer"
import { IconHome, IconUser, IconBriefcase, IconMail, IconCode, IconHeart, IconSettings } from "@tabler/icons-react"
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "@/components/ui/text-reveal-card"
import { ScrollTimeline } from "@/components/ui/timeline"

export default function Home() {
  // Toggle between Comet Effect and 3D Card Effect - easily reversible
  const USE_COMET_EFFECT = true // Set to false to revert to 3D Card effect

  // Customize your name here - easily editable
  const nameWords = [
    {
      text: "Rusal",
    },
    {
      text: "Perera",
    },
    {
      text: "Developer",
    },
    {
      text: "Designer",
    },
  ]

  // Loading state for the multi-step loader
  const [loading, setLoading] = useState(true)

  // Loading states for the multi-step loader
  const loadingStates = [
    {
      text: "Loading assets...",
    },
    {
      text: "Initializing UI components...",
    },
    {
      text: "Preparing animations...",
    },
    {
      text: "Almost ready...",
    },
  ]

  // Hide loader after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
  ]

  // Card stack data - easily editable
  const cardStackItems = [
    {
      id: 1,
      name: "Logan Ermens",
      designation: "Grandmaster G**ner",
      content: (
        <p>
          "WE are ALL talking about how good of a developer Rusal is, I love his work and he gets projects done on
          time."
        </p>
      ),
    },
    {
      id: 2,
      name: "Zach Wood",
      designation: "B.B. Brainrot Historian, Maj: Skibidi Toilet",
      content: <p>"Ts cheeks bruh 😭💀💔🙏"</p>,
    },
    {
      id: 3,
      name: "Daniel Deverson",
      designation: "Game developer/Milk Drinker",
      content: <p>"Yes, he is cool, also drink milk. Kill Billy. And beat your-"</p>,
    },
    {
      id: 4,
      name: "Elon Musk",
      designation: "CEO, Cancer",
      content: <p>"@Grok is this real?"</p>,
    },
  ]

  // About section items with spotlight and hover effects
  const aboutItems = [
    {
      title: "Development",
      description: "Able to produce modern web development with React, Next.js, and TypeScript",
      icon: <IconCode className="h-12 w-12 text-blue-400 mx-auto" />,
    },
    {
      title: "Design",
      description: "Can design beautiful UI/UX design with attention to detail built with intuitiveness in mind",
      icon: <IconHeart className="h-12 w-12 text-red-400 mx-auto" />,
    },
    {
      title: "Optimization",
      description: "Can build a performance optimized webapp, retaining the best practices for your browser",
      icon: <IconSettings className="h-12 w-12 text-green-400 mx-auto" />,
    },
  ]

  // Project images - easily customizable
  const projectImages = [
    "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
    "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
    "/placeholder.svg?height=400&width=600&text=Mobile+App+UI",
    "/placeholder.svg?height=400&width=600&text=Dashboard+Design",
    "/placeholder.svg?height=400&width=600&text=Landing+Page",
    "/placeholder.svg?height=400&width=600&text=Web+Application",
  ]

  // Apple Carousel data for skills - images
  const skillsData = [
    {
      category: "Frontend Development",
      title: "Next.js and React apps",
      src: "/ReactNext.svg?height=600&width=600&text=React+Development",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal mb-8">
            Expert in building modern web applications with React and Next.js. Proficient in server-side rendering,
            static site generation, and creating performant user interfaces.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Key Skills:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Component-based architecture</li>
              <li>State management with Redux/Zustand</li>
              <li>Server-side rendering (SSR)</li>
              <li>Static site generation (SSG)</li>
              <li>API routes and middleware</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      category: "Styling & Design",
      title: "CSS & Tailwind",
      src: "/CSS.svg?height=600&width=600&text=CSS+Design",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal mb-8">
            Skilled in creating beautiful, responsive designs using modern CSS techniques and Tailwind CSS framework.
            Focus on user experience and accessibility.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Expertise:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Responsive web design</li>
              <li>CSS Grid and Flexbox</li>
              <li>Tailwind CSS utility-first approach</li>
              <li>CSS animations and transitions</li>
              <li>Design systems and component libraries</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      category: "Programming Languages",
      title: "TypeScript & JavaScript",
      src: "/tsjs.svg?height=600&width=600&text=TypeScript+Code",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal mb-8">
            Proficient in both TypeScript and JavaScript, with a strong understanding of modern ES6+ features and
            type-safe development practices.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Capabilities:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Type-safe development with TypeScript</li>
              <li>Modern JavaScript (ES6+)</li>
              <li>Async/await and Promise handling</li>
              <li>Functional programming concepts</li>
              <li>Testing with Jest and React Testing Library</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      category: "Backend Development",
      title: "Node.js & APIs",
      src: "/nodejs.svg?height=600&width=600&text=Backend+APIs",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal mb-8">
            Experience in building scalable backend services with Node.js, creating RESTful APIs, and working with
            databases.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Technologies:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>RESTful API development</li>
              <li>Database design and optimization</li>
              <li>Authentication and authorization</li>
              <li>Server deployment and DevOps</li>
              <li>GraphQL and tRPC</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      category: "Tools & Workflow",
      title: "Development Tools",
      src: "/tools.svg?height=600&width=600&text=Dev+Tools",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal mb-8">
            Proficient with modern development tools and workflows that enhance productivity and code quality.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Tools:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Git version control</li>
              <li>VS Code and development environments</li>
              <li>Package managers (npm, yarn, pnpm)</li>
              <li>Build tools (Webpack, Vite)</li>
              <li>CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  const cards = skillsData.map((card, index) => <Card key={card.src} card={card} index={index} />)

  // Project Card Component - switches between Comet and 3D Card effects
  const ProjectCard = ({
    project,
    index,
  }: {
    project: number
    index: number
  }) => {
    const cardContent = (
      <div className="bg-gray-900/50 relative backdrop-blur-sm border border-gray-800 w-auto sm:w-[350px] h-auto rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
        <p className="text-gray-400 text-sm max-w-sm mb-4">Coming Soon lil bro</p>
        <div className="w-full mb-6">
          <img
            src={projectImages[index] || "/placeholder.svg"}
            alt={`Project ${project}`}
            className="h-48 w-full object-cover rounded-xl transition-all duration-300"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-gray-800 transition-colors">
            Try now →
          </button>
          <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors">
            View Project
          </button>
        </div>
      </div>
    )

    if (USE_COMET_EFFECT) {
      return (
        <CometCard key={project} className="inter-var">
          {cardContent}
        </CometCard>
      )
    } else {
      return (
        <CardContainer key={project} className="inter-var">
          <CardBody className="group/card">
            <CardItem translateZ="50" className="text-xl font-bold text-white mb-2">
              Project {project}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-gray-400 text-sm max-w-sm mb-4">
              Coming soon gng 💔
            </CardItem>
            <CardItem translateZ="100" className="w-full mb-6">
              <img
                src={projectImages[index] || "/placeholder.svg"}
                alt={`Project ${project}`}
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
              />
            </CardItem>
            <div className="flex justify-between items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-gray-800 transition-colors"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                View Project
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      )
    }
  }

  return (
    <>
      {/* Multi-step loader */}
      <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={750} loop={false} />

      {/* Scroll Timeline - Fixed position throughout the entire website */}
      <ScrollTimeline />

      <main className="min-h-screen bg-black">
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <GridBackground className="min-h-screen">
            {/* Hero section with simple name display */}
            <div className="relative h-[280px] w-full flex items-center justify-center">
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <TypewriterEffect words={nameWords} />
                <div className="text-lg md:text-xl lg:text-2xl font-medium text-center">
                  <span className="text-gray-300">Professional </span>
                  <ColourfulText text="Dumbass" />
                </div>

                {/* Blue glowing underline */}
                <div className="relative w-80 h-1 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent h-px"></div>
                  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[3px] blur-sm"></div>
                </div>
              </div>
            </div>

            {/* Main content section with text flip and client testimonials */}
            <div className="flex items-center justify-center p-8 gap-12 mt-4 max-w-7xl mx-auto">
              {/* Text flip section - removed boxy styling */}
              <div className="flex-shrink-0 max-w-lg ml-8">
                <ContainerTextFlipDemo />
              </div>

              {/* Client testimonials - moved more to center */}
              <div className="flex-shrink-0">
                <div className="text-center">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">Client Testimonials</h2>
                  <CardStack items={cardStackItems} />
                </div>
              </div>
            </div>

            {/* Text Reveal Card Section - positioned below the main content */}
            <div className="flex items-center justify-center p-8 mt-4">
              <TextRevealCard
                text="Squashed 526 bugs in programming"
                revealText="Written 7,957 lines of code, multiple languages"
                className="w-full max-w-4xl"
              >
                <TextRevealCardTitle>Development Stats</TextRevealCardTitle>
                <TextRevealCardDescription>
                  Hover over the text below to reveal my coding achievements
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>
          </GridBackground>
        </section>

        {/* About Section with Card Spotlight and Hover Effects */}
        <section id="about" className="min-h-screen">
          <GridBackground className="min-h-screen">
            <div className="flex items-center justify-center p-8 min-h-screen">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">About Rusal</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-12">
                  Rusal is a passionate developer creating amazing web experiences with cutting-edge technology. His
                  focus is set on making beautiful, functional, and user-friendly webpages that attract attention.
                </p>

                {/* Cards with Spotlight and Hover Effects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {aboutItems.map((item, index) => (
                    <CardSpotlight key={index} className="h-96 w-full" radius={300} color="#1e293b">
                      <div className="text-center relative z-20">
                        <div className="mb-6">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </CardSpotlight>
                  ))}
                </div>
              </div>
            </div>
          </GridBackground>
        </section>

        {/* Container Scroll Section with Spotlight Effect */}
        <section className="bg-black relative overflow-hidden">
          {/* Spotlight Effect */}
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(280, 100%, 85%, .12) 0, hsla(280, 100%, 55%, .04) 50%, hsla(280, 100%, 45%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .08) 0, hsla(280, 100%, 55%, .03) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .06) 0, hsla(280, 100%, 45%, .02) 80%, transparent 100%)"
            translateY={-200}
            width={800}
            height={1200}
            smallWidth={300}
            duration={8}
            xOffset={150}
          />

          <ContainerScroll
            titleComponent={
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center relative z-50">
                Featured Showcase
              </h2>
            }
          >
            <div className="h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 flex items-center justify-center relative z-50">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">Scroll Dependent UI</h3>
                <p className="text-lg md:text-xl opacity-90">
                  Scroll to see the magic happen with my container scroll animation i coded this at 1:24 am shut up
                </p>
              </div>
            </div>
          </ContainerScroll>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <GridBackground className="min-h-screen">
            <div className="flex items-center justify-center p-8 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((project, index) => (
                    <ProjectCard key={project} project={project} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </GridBackground>
        </section>

        {/* Skills Section with Apple Carousel */}
        <section id="skills" className="min-h-screen">
          <GridBackground className="min-h-screen">
            <div className="flex items-center justify-center p-8 min-h-screen">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">My Skills</h2>
                <Carousel items={cards} />
              </div>
            </div>
          </GridBackground>
        </section>

        {/* Contact Section with Canvas Reveal Effect - Extended with grid background */}
        <section id="contact" className="min-h-screen">
          <GridBackground className="min-h-screen">
            <div className="flex items-center justify-center p-8 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Get In Touch/Socials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Email Card */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                    <CanvasRevealEffect
                      animationSpeed={0.4}
                      containerClassName="bg-black rounded-3xl overflow-hidden"
                      colors={[[59, 130, 246]]} // Blue for email
                      dotSize={2}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                      <div className="relative z-20 text-center p-8">
                        <svg
                          className="h-16 w-16 text-blue-400 mx-auto mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <h3 className="text-2xl font-bold mb-2">Email</h3>
                        <p className="text-blue-200">itsrusalperera211@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Instagram Card */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                    <CanvasRevealEffect
                      animationSpeed={0.4}
                      containerClassName="bg-black rounded-3xl overflow-hidden"
                      colors={[[236, 72, 153]]} // Pink for Instagram
                      dotSize={2}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                      <div className="relative z-20 text-center p-8">
                        <svg className="h-16 w-16 text-pink-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                        <p className="text-pink-200">@iamrusal</p>
                      </div>
                    </div>
                  </div>

                  {/* YouTube Card */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                    <CanvasRevealEffect
                      animationSpeed={0.4}
                      containerClassName="bg-black rounded-3xl overflow-hidden"
                      colors={[[239, 68, 68]]} // Red for YouTube
                      dotSize={2}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                      <div className="relative z-20 text-center p-8">
                        <svg className="h-16 w-16 text-red-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <h3 className="text-2xl font-bold mb-2">YouTube</h3>
                        <p className="text-red-200">@corruptedrust</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GridBackground>
        </section>
      </main>

      {/* Floating Dock - Fixed at bottom center */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={dockItems}
          desktopClassName="bg-gray-900/80 backdrop-blur-md border border-gray-700"
          mobileClassName="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full"
        />
      </div>

      {/* Footer - No gap, seamless transition */}
      <Footer />
    </>
  )
}
