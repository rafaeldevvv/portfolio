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
   introduction: "Welcome to my web world! I create stunning, high-performance sites. As a freelance front-end developer, I craft engaging and accessible experiences that work on any device for everyone to enjoy them. Let's bring your vision to life with creativity and cutting-edge tech!",
   about: "Hey there! I'm Rafael Maia, and I'm on a journey to becoming a skilled freelance front-end developer. Web page creation is my true passion, and I bring to the table a solid foundation in JavaScript, HTML, CSS, SASS, React.js, Git, GitHub, and object-oriented programming (OOP). My approach is all about simplicity and meaningful design.",
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