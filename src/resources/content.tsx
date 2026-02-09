import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Asinu",
  lastName: "Kumarage",
  name: `Asinu Kumarage`,
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  email: "asinuu07@gmail.com",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Sinhala"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/asinugit",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/asinu/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/asinuu._/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Asinu Kumarage</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hello! I'm Asinu, a passionate Software Engineer specializing in web development and designing intuitive user experiences. I love building innovative solutions and exploring new technologies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  cv: {
    display: true,
    file: "/cv/asinuCV.pdf",
    label: "Download CV",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Motivated and adaptable third-year undergraduate pursuing a BSc (Hons) in Information
        Technology with a specialization in Software Engineering at SLIIT. Passionate about solving
        real-world problems at the intersection of full stack development and app development. Strong
        foundation in web development, mobile app and UI design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Certificates and Licenses",
    experiences: [
      {
        company: "Node.js",
        timeframe: "2024",
        role: "Certified Developer",
        achievements: [
          <>
            Official certification demonstrating expertise in Node.js runtime environment, server-side JavaScript development, and modern backend technologies.
          </>,
        ],
        images: [
          {
            src: "/images/certificate/node.jpeg",
            alt: "Node.js Certificate",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sri Lanka Institute of Information Technology",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Esoft Metro Campus",
        description: <>Studied IT diploma.</>,
      },
      {
        name: "Kalutara Vidyalaya",
        description: <>Completed Advanced Level education.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Using Now",
        description: (
          <>My primary tech stack for building modern web and mobile applications.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        images: [],
      },
      {
        title: "Learning & Exploring",
        description: (
          <>Technologies I'm currently learning and exploring for future projects.</>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Dart",
            icon: "dart",
          },
        ],
        images: [],
      },
      {
        title: "Mobile Development",
        description: (
          <>Cross-platform mobile development technologies.</>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Kotlin",
            icon: "kotlin",
          },
          {
            name: "Dart",
            icon: "dart",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
