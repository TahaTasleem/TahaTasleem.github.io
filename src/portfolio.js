/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Taha Tasleem",
  title: "Hi all, I'm Taha",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Angularjs / Nodejs / Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dukoCljmvnGWJyZjqD_eyeWmLYjVIsRf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TahaTasleem",
  linkedin: "https://www.linkedin.com/in/tahatasleem/",
  gmail: "tahatasleem01@gmail.com",
  facebook: "https://www.facebook.com/taha.tasleem",
  instagram:"https://www.instagram.com/taha.tasleem",
  number: "+923352288767",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ?",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO LEARN AND EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop robust RESTful APIs and utilizing API frameworks like Express.js, or Django REST Framework to enable seamless communication between the components."),
    emoji(
      "⚡ Architect scalable and secure backend systems, to handle complex business logic and ensure optimal performance."
    ),
    emoji(
      "⚡ Implement efficient data management solutions, including database design, querying, and optimization to ensure seamless data storage and retrieval."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "devicon:html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "devicon:react",
    },
    {
      skillName: "AngularJs",
      fontAwesomeClassname: "logos:angular-icon",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "logos:nodejs",
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "skill-icons:django",
    },
    {
      skillName: "Rest Framework",
      fontAwesomeClassname: "devicon:djangorest",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "vscode-icons:file-type-python",
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "devicon:dot-net-wordmark",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "logos:npm-icon",
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "logos:android-vertical",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "devicon:sqldeveloper",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "logos:mongodb-icon",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "devicon:azure",
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "logos:mysql",
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "devicon:figma",
    },
    {
      skillName: "Adobe Illustrator",
      fontAwesomeClassname: "skill-icons:illustrator",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST National University of Computer and Emerging Sciences (NUCES)",
      logo: require("./assets/images/FAST_Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 19 - Jun 23",
      desc: "National University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for the quality and impact of its students in the development of local software and other industries.",
      descBullets: [
        "I have successfully completed my bachelor's degree with a CGPA of 3.3",
        "I have studied core computer science subjects, including Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems (OS), Object-Oriented Programming (OOP), and Software Engineering (SE).",
        "In addition to that, I have studied various computer science courses, such as DevOps, Data Warehousing, Fundamentals of Software Project Management, Design Defects & Refactoring, and Deep Learning.",
        "I have been included in the Dean's List of Honors, which recognizes students who achieve a semester grade point average (SGPA) of 3.5 or higher"
      ]
    },
    {
      schoolName: "Dehli Inter Science College",
      logo: require("./assets/images/College_Logo.jpg"),
      subHeader: "Intermediate, Pre-Engineering",
      duration: "Aug 17 - Jun 19",
      desc: "Govt. Dehli College, one of the most beautiful, maintained & disciplined college in Karachi. It imparts best education among all Colleges of Government Sector of Sindh.",
      descBullets: [
        "I have completed my intermediate education with an A grade."
      ]
    },
    {
      schoolName: "S.M. Public Academy",
      logo: require("./assets/images/School_Logo.png"),
      subHeader: "Matriculation, Pre-Engineering",
      duration: "Aug 2015 - Jun 2017",
      desc: "S.M.PUBLIC ACADEMY was established in 1964 by a group of educationists. It stands amongst the top ranking schools of Karachi as the Board of Secondary Education results speak for itself year after year.",
      descBullets: [
        "I have completed my matriculation with an A+ Grade."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "HinoPak Motors Limited",
      companylogo: require("./assets/images/Hino_Logo.png"),
      date: "Jun 2022 – Aug 2022",
      desc: "Hino Motors, Ltd., commonly known as HinoPak, is a manufacturer of commercial vehicles and diesel engines including those for trucks, buses and other vehicles. My role as intern was:",
      descBullets: [
        "To develop a fully functional, Visitors Management System.",
        "To develop Frontend using Angularjs",
        "To develop Backend using Django",
        "To design Database schema on Oracle SQL Developer.",
        "Tech Stack: Angular Js, Python Django, Oracle SQL."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "CoalDev",
      companylogo: require("./assets/images/CoalDev_Logo.png"),
      date: "Oct 2022 – Dec 2022",
      desc:"CoalDev is a customer-centric information technology company and offers comprehensive, cost effective and efficient software solutions. CoalDev specializes in the domain of data science, custom software development, cloud and blockchain. My role as an intern was:",
      descBullets: [
        "To co-ordinate in the development of a Stock Investment Website.",
        "To design Frontend Screens using Reactjs.",
        "To develop REST API's using Django Rest Framework.",
        "Tech Stack: React Js, Python Django, SQLite."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */


// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL AND COURSE PROJECTS THAT I HAVE DEVELOPED!",
  projects: [
    {
      image: require("./assets/images/ADRS_Logo.jpeg"),
      projectName: "Accident Detection And Reporting System (Final Year Project)",
      projectDesc: "An accident detection and reporting system, developed specifically for motorcycle riders. The system comprises an Android application and a web application. Upon accident detection, a report, including location is sent to both the rescue services and the rider's relatives for immediate notification. Simultaneously, the web application enables rescue services to access the report and dispatch an ambulance. The web application is developed using the MERN (MongoDB, Express.js, React, Node.js) stack, while the app is developed using Java.",
      footerLink: [
        {
          name: "View Mobile App Code",
          url: "https://gitfront.io/r/user-6717960/vPiGhAbmnFR9/ADRS-FinalYearProject-MobileApp/"
        },
        {
          name: "View Web App Code",
          url: "https://gitfront.io/r/user-6717960/rd9pCpC7QD5h/ADRS-FinalYearProject-Web-Frontend/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ecom_Logo.png"),
      projectName: "E-Commerce Website",
      projectDesc: "The E-Commerce store is designed to provide users with the ability to browse, purchase, and review products. It offers comprehensive functionality, including categorization, rating and reviews, payment integration, as well as authorization and authentication features. Additionally, the admin has the capability to perform CRUD operations on both products and categories. The MERN Stack is utilized as the technology stack for this project",
      footerLink: [
        {
          name: "View Frontend Code",
          url: "https://github.com/TahaTasleem/Ecommerce-Website-Frontend"
        },
        {
          name: "View Backend Code",
          url: "https://github.com/TahaTasleem/Ecommerce-Website-Backend-"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "I have achieved the Microsoft Azure fundamentals certification, showcasing my understanding of key Azure concepts and opening up new opportunities in cloud computing.",
      image: require("./assets/images/microsoft.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Credentials",
          url: "https://www.credly.com/badges/9566b5c5-2a17-43c5-bd5a-5fd3b2f71933/linked_in_profile"
        },
      ]
    },
    {
      title: "Databricks Certified: Lakehouse Fundamentals",
      subtitle:
        "I have completed the Databricks Lakehouse Fundamentals certification, gaining a solid foundation in the principles and practices of utilizing Databricks for building and managing data lakehouses, enabling me to leverage its capabilities effectively.",
      image: require("./assets/images/databricks.png"),
      imageAlt: "Databricks Logo",
      footerLink: [
        {
          name: "View Credentials",
          url: "https://credentials.databricks.com/19fef465-056a-4ed7-b118-55959ab0c760#gs.140yl8"
        }
      ]
    },
    {
      title: "Codefest '23 Winner",
      subtitle: "Won Codefest '23, hosted by Royal Cyber Asia",
      image: require("./assets/images/code_winner.png"),
      imageAlt: "Competition Winner Logo",
      footerLink: [
        {
          name: "View Award",
          url: "https://www.linkedin.com/posts/royalcyberasia_announcing-the-winners-of-royal-cyber-codefest-activity-7054030379535450114-A3Jy/?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "Modernizing Data Lakes and Data Warehouses",
      subtitle: "Google Cloud Platform",
      image: require("./assets/images/GCP.png"),
      imageAlt: "Google Cloud Platform Logo",
      footerLink:[]
    },
    {
      title: "Google Cloud Big Data and Machine Learning Fundamentals",
      subtitle: "Google Cloud Platform",
      image: require("./assets/images/GCP.png"),
      imageAlt: "Google Cloud Platform Logo",
      footerLink:[]
    },
    {
      title: "Building Batch Data Pipeline on Google Cloud Platform",
      subtitle: "Google Cloud Platform",
      image: require("./assets/images/GCP.png"),
      imageAlt: "Google Cloud Platform Logo",
      footerLink:[]
    },
    {
      title: "Writing Efficient Python Code",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Introduction to PySpark",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Introduction to Shell",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Data Processing in Shell",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Streamlined Data Ingestion with Pandas",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Introduction to PowerBI",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Introduction to Deep Learning",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Python Data Science Toolbox Part I and II",
      subtitle: "Datacamp",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Datacamp Logo",
      footerLink:[]
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle: "Google",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink:[]
    },
    {
      title: "Python Data Structures",
      subtitle: "University of Michigan",
      image: require("./assets/images/uni_of_mic.png"),
      imageAlt: "University of Michigan Logo",
      footerLink:[]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-335-2288767",
  email_address: "tahatasleem01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};