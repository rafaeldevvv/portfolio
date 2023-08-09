import projects from "./projects.js";
import technologies from "./technologies.js";
import services from "./services.js";
import skills from "./skills.js";

const author = {
   name: "Rafael Maia",
   fullName: "Rafael Maia Sant'Anna Cuerci",
   shortName: "Rafael",
   location: {
      country: "Brazil",
      state: "Espírito Santo",
   },
   status: {
      /* available, busy, unavailable */
      className: "available",
      text: "Available to work",
   },
   learning: "Accessibility",
   job: "Freelance front-end developer",
   languages: ["Portuguese", "English"],
   introduction: "Welcome to my web world! I create stunning, high-performance sites. As a freelance front-end developer, I craft engaging experiences that work on any device and accessible pages for everyone to enjoy them. Let's bring your vision to life with creativity and cutting-edge tech!",
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
   technologies,
   services,
   skills
}

export default author;