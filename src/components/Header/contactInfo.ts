export interface contactInfoType {
  name: string;
  imgSrc: string;
  link: string;
}

export const contactInfo = [
  {
    name: "Instagram",
    // imgSrc: "public/images/header/instagram.svg",
    imgSrc:
      "https://jigeonpark.github.io/Portfolio/images/header/instagram.svg",
    link: "https://www.instagram.com/parkgroundgun/",
  },
  {
    name: "Linkedin",
    imgSrc: "@public/images/header/linkdin.svg",
    link: "www.linkedin.com/in/jigeonpark",
  },
  {
    name: "Email",
    imgSrc: "/portfolio/public/images/header/mail.svg",
    link: "mailto:jkj.zf.work@gmail.com",
  },
  {
    name: "GitHub",
    imgSrc: "/portfolio/public/images/header/gitHub.svg",
    link: "https://github.com/JigeonPark",
  },
];
