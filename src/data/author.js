import projects from "./projects.js";
import skillsAndTechnologies from "./skills-and-technologies.js";
import services from "./services.js";

const author = {
   name: "Rafael Maia",
   shortName: "Rafael",
   logo: {
      src: 'images/logo.png',
      alt: "A piece of text displaying RAFAEL in uppercase and an HTML code mark within a circle to the right of it"
   },
   location: {
      country: "Brazil",
      state: "Espírito Santo",
   },
   availability: {
      /* available, busy, unavailable */
      /* When busy or unavailable write "(Busy|Unavailable) - (reason)" */
      className: "available",
      text: "Available to work",
   },
   spokenLanguages: [
      {
         name: "Portuguese",
         percentage: 100,
         level: "Native"
      },
      {
         name: "English",
         percentage: 85,
         level: "Advanced"
      }
   ],
   introduction: "Welcome to my website! I'm a passionate freelance front-end developer dedicated to creating responsive, accessible, and performant web experiences. Explore my portfolio and see for yourself how I can bring your ideas to life.",
   aboutParagraphs: [
      "Hello, again!",
      "I'm a self-taught front-end developer based in Espírito Santo, Brazil. I'm on a journey to becoming a skilled freelance front-end developer. Web page creation is my true passion. My approach is all about simplicity and meaningful design.",
      "I can develop responsive, performant and accessible pages from scratch, transforming them into modern user-friendly web experiences. I am always striving to learn about the latest technologies and frameworks to keep my knowledge up-to-date."
   ],
   introImage: {
      src: "images/intro.jpeg",
      alt: "A man with light brown hair wearing a white T-shirt looking to the left"
   },
   aboutImage: {
      src: "images/about.jpg",
      alt: "A guy looking to the left with a black turtleneck"
   },
   email: "rafaelmaiaw@gmail.com",
   phoneNumber: "5527996904603",
   formattedPhoneNumber: "+55 27 996904603",
   socials: {
      instagram: "https://www.instagram.com/rafaeldevvv",
      github: "https://github.com/rafaeldevvv",
      youtube: "https://www.youtube.com/channel/UC_QOvDZdUskTSJ59eMDjuEg",
      twitter: "https://www.twitter.com/rafaeldevvv"
   },
   projects,
   skillsAndTechnologies,
   services
}

export default author;