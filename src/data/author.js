import projects from "./projects.js";
import skills from "./skills.js";
import services from "./services.js";

const author = {
   name: "Rafael Maia",
   fullName: "Rafael Maia Sant'Anna Cuerci",
   shortName: "Rafael",
   location: {
      country: "Brazil",
      state: "Espírito Santo",
   },
   status: {
      /* available, working, unavailable */
      className: "available",
      text: "Available to work",
   },
   learning: "Accessibility",
   job: "Freelance front-end developer",
   languages: ["Portuguese", "English"],
   introduction: `I am a freelance front-end developer with a highly qualified skill set
                  specialized in creating responsive and accessible web pages. My
                  portfolio shows you my skills, projects and how you can reach me!`,
   profilePicture: null,
   hero: null,
   email: "rafaelmaiaw@gmail.com",
   phoneNumber: "+55 27 996904603",
   socials: {
      instagram: "https://www.instagram.com/rafaeldevvv",
      github: "https://github.com/rafaeldevvv",
      youtube: "https://www.youtube.com/channel/UC_QOvDZdUskTSJ59eMDjuEg",
      twitter: "https://www.twitter.com/rafaeldevvv"
   },
   projects,
   skills,
   services
}

export default author;