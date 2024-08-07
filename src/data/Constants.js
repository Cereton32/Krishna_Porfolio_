// constants.js
export const constants = {
  header: "My Portfolio",
  about: {
    title: "About Me",
    description: "This is about me.",
  },
  skills: [
    {
      title: "Data Engineer",
      skills: [
        {
          name: "PowerBI",
          image:
            "https://images.datacamp.com/image/upload/v1714478776/re388xshtgihucfiiavf.png",
        },

        {
          name: "SQL",
          image:
            "https://optim.tildacdn.one/tild6238-3035-4335-a333-306335373139/-/resize/824x/-/format/webp/IMG_3349.jpg",
        },

        ,
      ],
    },
    {
      title: "Web-Developer",
      skills: [
        {
          name: "Javascript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/440px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          name: "HTML",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1920px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          name: "CSS",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmjt9vXR1O9iMUY-heqmfLmNQpuFLvrAKow&s",
        },
      ],
    },

    // Add more skill categories as needed
  ],
  experience: [
    {
      company: "NullClass PVT.LTD",
      role: "Data Analyst Trainee",
      duration: "2 Months",
      description:
        "Conducted a comprehensive analysis of social media engagement metrics, resulting in a 25% improvement in content strategy effectiveness by uncovering key trends and optimizing user interactions.",
      skills: ["PowerBI"],
      img: "https://media.licdn.com/dms/image/C560BAQGCs07yzlcG9Q/company-logo_200_200/0/1630646786601/nullclassdotcom_logo?e=2147483647&v=beta&t=swPjGdwVpzCqJPU5FFUqejF71uxSk4dQtw9dBTUo8wA",
      doc: "",
    },
    // Add more experiences as needed
  ],
  projects: [
    {
      title: "Advanced Twitter Engagement Visualization",
      description:
        "Analyzed Twitter engagement metrics to uncover trends and patterns that drive higher interaction rates, with potential of achieving up to a 40% increase in user engagement by optimizing content strategies based on data insights.",
      image: "path/to/projectA_image.png",
      tags: ["PowerBI"],
      date: "2024-04-06",
      member: [
        {
          img: "https://images.datacamp.com/image/upload/v1714478776/re388xshtgihucfiiavf.png",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlv-mh38r5cMojn5W_EV7wUkwZhvv9hQePRg&s",
        },
      ],
    },
    {
      title: "Notes Web Application",
      description:
        "Crafted a responsive Notes Web Application using HTML, CSS, JavaScript, achieving a 50% improvement in code efficiency and maintainability through modular design.",
      image: "",
      tags: ["JavaScript", "HTML", "Css"],
      date: "",
      member: [
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/440px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
        },
      ],
    },
    // Add more projects as needed
  ],
  education: [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/9/96/Poornima_College_logo.png", // Optional image for the school
      institution: "Poornima College of enigneering",
      degree:
        "Bachelor of Technology - BTech, Computer Science and Engineering Oct 2021",
      year: "2021",
      grade: "Currently with 5.6 SCGPA",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Poornima college of engineeering. I have completed 4 semesters and have a CGPA of 7.2. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
      doc: "", // Optional document link
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCVj99cEIc5z0Znvll3AjIMkV5mb-hdNH_A&s", // Optional image for the school
      institution: "",
      degree: "C.B.S.E - Higher Secondary Education",
      year: "2020",
      grade: "Total GPA : 3.41/5.0",
      desc: "I completed my higher secondary education under the C.B.S.E (Central Board of Secondary Education) curriculum. The program provided a comprehensive education in various subjects, helping to build a strong academic foundation for further studies. My performance was evaluated based on continuous assessment and final exams, achieving a GPA of 3.41 out of 5.0.",
      doc: "", // Optional document link
    },
    // Add more education entries as needed
  ],
};
