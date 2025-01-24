/* eslint-disable @typescript-eslint/no-unused-vars */
import hero_email from "@/public/email.png";
import hero_github from "@/public/hero_github.jpg";
import hero_linkedin from "@/public/hero_linkedin.png";
import hero_google_scholar from "@/public/hero_google_scholar.png";
import ieee from "@/public/ieee.jpg";
import cu from "@/public/cu-logo.png";
import isro from "@/public/isro2.png";
import samsung from "@/public/samsung2.jpg";
import blogSectionIcon from "@/public/blogs.png";
import cicd2 from "@/public/gitops.webp";
import newsSectionIcon from "@/public/news.jpg";
import publicationSectionIcon from "@/public/publication.jpg";
import educationSectionIcon from "@/public/graduationCap.jpg";
import projectSectionIcon from "@/public/project.png";
import interestSectionIcon from "@/public/interests.png";
import githubLogo from "@/public/github.png";
import linkedinimg from "@/public/linkedin.png";
import medium from "@/public/medium.png";
import leetcode from "@/public/leetcode.png";
import kaggle from "@/public/kaggle.png";
import hackerrank from "@/public/hackerrank.png";
import googleScholar from "@/public/ContactgoogleScholar.png";
import briefcase from "@/public/contactBriefcase.png";
import contactSectionIcon from "@/public/contacts.png";
import cryptoPricePrediction from "@/public/cryptoPricePrediction.webp"

const techLinks = {
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  ansible:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  prometheus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  gitlab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  argocd:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  linkedin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  twitter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  digitalOcean:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
  githubActions:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  tensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  streamLit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
};

const {
    nodejs,
    mongodb,
    nextjs,
    tailwindcss,
    git,
    linux,
    kubernetes,
    jenkins,
    terraform,
    ansible,
    python,
    docker,
    java,
    aws,
    prometheus,
    figma,
    gitlab,
    argocd,
    react,
    javascript,
    typescript,
    linkedin,
    twitter,
    github,
    githubActions,
    tensorFlow,
    streamLit
    
  } = techLinks;


  
  




  export const ProjectList = [
    {
        id: 1,
        tag: "top",
        title: "Cryptocurrency Price Prediction",
        category: "aiml",
        image: cryptoPricePrediction,
        description:
          "Online tool to predit crypto price using advanced AI.",
        tech: [github, python, tensorFlow, streamLit],
        url: "https://cryptocurrency-price-prediction-ashishsaha.streamlit.app/", // URL for the project
        github: "https://github.com/Ashish1100/Cryptocurrency-Price-Prediction",
        features: ["Responsive", "Fast", "Secure", "SEO Friendly"],
        ppt: "https://example.com/project1/ppt", // URL for the project presentation
        report: "https://example.com/project1/report", // URL for the project report
        detailedDescription:
          "An online tool that uses artificial intelligence and web technology to predict digital currency market values. LSTM neural networks operate on this online tool to examine data patterns and determine which direction cryptography will move.",
      },
    {
        id: 2,
        tag: "top",
        title: "data science project",
        category: "aiml",
        image: cicd2,
        description:
          "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
        tech: [githubActions, argocd, kubernetes, docker],
        url: undefined,
        github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
        detailedDescription:
          "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
      },
    {
        id: 3,
        tag: "top",
        title: "web dev project",
        category: "genai",
        image: cicd2,
        description:
          "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
        tech: [githubActions, argocd, kubernetes, docker],
        url: undefined,
        github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
        detailedDescription:
          "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
      },
    {
        id: 4,
        tag: "top",
        title: "devops project",
        category: "aiml",
        image: cicd2,
        description:
          "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
        tech: [githubActions, argocd, kubernetes, docker],
        url: "https://example.com/project4", // URL for the project
        github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
        detailedDescription:
          "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
      },
    {
        id: 5,
        tag: "top",
        title: "aiml project 2",
        category: "qml",
        image: cicd2,
        description:
          "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
        tech: [githubActions, argocd, kubernetes, docker],
        url: undefined,
        github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
        detailedDescription:
          "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
      },
      {
        id: 6,
        tag: "top",
        title: "web dev project 2",
        category: "more",
        image: cicd2,
        description:
          "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
        tech: [githubActions, argocd, kubernetes, docker],
        url: undefined,
        github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
        detailedDescription:
          "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
      },
      {
        id: 7,
        tag: "top",
        title: "web dev project 2",
        category: "mlops",
        image: cicd2,
        description:
          "Automated CI/CD Pipeline for Node.js Application with Github Actions and Kubernetes",
        tech: [githubActions, argocd, kubernetes, docker],
        url: undefined,
        github: "https://github.com/ankitrajxd/nodeapp-gha-argocd-cicd",
        detailedDescription:
          "This project demonstrates setting up a CI/CD pipeline for a Node.js application. The pipeline test the application code,builds a Docker image of the application, pushes it to Docker Hub, and then deploys it in kubernetes environment (local) via argocd.",
      },
  ]



  export const workList = [
    {
      id: 1,
      title: "Machine Learning Intern",
      url: "https://www.isro.gov.in",
      image: isro,
      locationPeriod: "ISRO, Govt. of India | Sep 2024 - Dec 2024 | Ahmedabad, India.",
      description: 'Working on the "real-time satellite data".'
    },
    {
      id: 2,
      title: "Research & Development Intern",
      url: "https://www.isro.gov.in",
      image: samsung,
      locationPeriod: "Samsung Research | Feb 2023 - Sep 2023 | Bangalore, India.",
      description: [
        "Developed graph-based \"recommendation system\" enhancing ",
        "user experiences and increasing engagement metrics."
      ]
    }
    // },
    // {
    //   id: 3,
    //   title: "Research & Development Intern",
    //   url: "https://www.isro.gov.in",
    //   image: samsung,
    //   locationPeriod: "Samsung Research | Feb 2023 - Sep 2023 | Bangalore, India.",
    //   description: [
    //     "Developed graph-based \"recommendation system\" enhancing ",
    //     "user experiences and increasing engagement metrics."
    //   ]
    // },
    // {
    //   id: 4,
    //   title: "Research & Development Intern",
    //   url: "https://www.isro.gov.in",
    //   image: samsung,
    //   locationPeriod: "Samsung Research | Feb 2023 - Sep 2023 | Bangalore, India.",
    //   description: [
    //     "Developed graph-based \"recommendation system\" enhancing ",
    //     "user experiences and increasing engagement metrics."
    //   ]
    // },
    // {
    //   id: 5,
    //   title: "Research & Development Intern",
    //   url: "https://www.isro.gov.in",
    //   image: samsung,
    //   locationPeriod: "Samsung Research | Feb 2023 - Sep 2023 | Bangalore, India.",
    //   description: [
    //     "Developed graph-based \"recommendation system\" enhancing ",
    //     "user experiences and increasing engagement metrics."
    //   ]
    // },
  ];



  export const educationData = [
    {
      id: 1,
      university: "Chandigarh University",
      degree: "Bachelors Degree (B.E/B.Tech), Computer Science and Engineering",
      duration: "June 2021 - June 2025",
      location: "Mohali, Punjab, India",
      image: cu,
      link: "https://www.cuchd.in"
    }
  ];


  export const publicationsData = [
    {
      id: 1,
      image: ieee,
      title: "BERT-NER: A Transformer-Based Approach For Named Entity Recognition.",
      year: 2024,
      doi: "https://ieeexplore.ieee.org/document/10724703",
      conference: "15th International Conference on Computing Communication and Networking Technologies (ICCCNT). IIT Mandi, India."
    },
    {
      id: 2,
      image: isro,
      title: "BERT-NER: A Transformer-Based Approach For Named Entity Recognition.",
      year: 2024,
      doi: "https://ieeexplore.ieee.org/document/10724703",
      conference: "15th International Conference on Computing Communication and Networking Technologies (ICCCNT). IIT Mandi, India."
    }
  ];
  

  export const newsData = [
    {
      id: 1,
      date: "[Sep-2024]",
      content:
        "We launched an AI-powered startup, simplifying business development with tools for market research, product design, and efficient scaling.",
    },
    {
      id: 2,
      date: "[Sep-2024]",
      content:
        "Our AI startup is helping businesses innovate faster with cutting-edge tools for market insights and efficient operations.",
    },
    {
      id: 3,
      date: "[Sep-2024]",
      content:
        "Our AI startup is helping businesses innovate faster with cutting-edge tools for market insights and efficient operations.",
    },
    {
      id: 4,
      date: "[Sep-2024]",
      content:
        "Our AI startup is helping businesses innovate faster with cutting-edge tools for market insights and efficient operations.",
    },
    {
      id: 5,
      date: "[Sep-2024]",
      content:
        "Our AI startup is helping businesses innovate faster with cutting-edge tools for market insights and efficient operations.",
    },
  ];


  export const blogsData = [
    {
      id: 1,
      title: "Empowering Dreams: How We Built an AI-Driven Startup to Simplify Business Development and Revolutionize the Entrepreneurial Journey.",
      link: "https://example.com/blog1" // URL for the blog post
    },
    {
      id: 2,
      title: "Unlocking the Future: How Artificial Intelligence is Changing the Face of Digital Marketing.",
      link: "https://example.com/blog2" // URL for the blog post
    }
    // Add more blogs as needed
  ];
  

 export const contactLinks = [
    { label: "GitHub", image: githubLogo, href: "https://github.com" },
    { label: "LinkedIn", image: linkedinimg, href: "https://linkedin.com" },
    { label: "Google Scholar", image: googleScholar, href: "https://scholar.google.com" },
    { label: "LeetCode", image: leetcode, href: "https://leetcode.com" },
    { label: "HackerRank", image: hackerrank, href: "https://hackerrank.com" },
    { label: "Medium", image: medium, href: "https://medium.com" },
    { label: "Kaggle", image: kaggle, href: "https://kaggle.com" },
    { label: "Portfolio", image: briefcase, href: "https://portfolio.com" },
  ];



  export const navMenuItems = [
    { name: "Home", link: "#" },
    { name: "About Me", link: "/experience" },
    { name: "Resume", link: "https://drive.google.com/file/d/1LXza54-VOX4Cb7VbzT0LSDygksIeTSkY/view?usp=sharing" },
    { name: "Contacts", link: "#contact" },
  ];



// hero section
export const name = "Ashish Saha"
export  const socialLinks = [
  { href: "https://www.linkedin.com/in/your-profile", image: hero_linkedin },
  { href: "https://github.com/your-profile", image: hero_github },
  { href: "https://scholar.google.com/citations?user=your-id", image: hero_google_scholar },
  { href: "mailto:your-email@example.com", image: hero_email },
];



// work section
export const workTitle = "Experience"


// Education section
export const educationTitle = "Education"
export const educationTitleImage = educationSectionIcon

// Project section
export const projectTitle = "Projects"
export const projectTitleImage = projectSectionIcon


// publication section
export const publicationTitle = "Publications"
export const publicationTitleImage = publicationSectionIcon

// News Section
export const newsTitle = "News and Updates"
export const newsTitleImage = newsSectionIcon

// Interest Section
export const interestTitle = "Interests"
export const interestTitleImage = interestSectionIcon

// blogs section
export const blogTitle = "Blogs"
export const blogTitleImage = blogSectionIcon


// contact section
export const contactTitle = "Contacts"
export const contactTitleImage = contactSectionIcon