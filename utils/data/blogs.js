import memotech from '/public/image/Memotech.jpg';
import pathperfect from '/public/image/PathPerfect.png';
import frn from '/public/image/FRN.png';
export const blogs = [
    {
      id: 1,
      title: "MemoTech",
      image: memotech,
      link: "https://bonono.netlify.app/",
      Github: "https://github.com/ryanhuang8/memotech",
      description: "Helping students memorize flashcards with feedback from LLMs",
      languages: "Typescript, Flask, MongoDB"
    },
    {
        id: 2,
        title: "PathPerfect",
        image: pathperfect,
        link: "https://devpost.com/software/pathperfect",
        Github: "https://github.com/Eric-04/PathPerfect",
        description: "Finding a scenic, round path to plan a jog, calculated based on the user's desired distance",
        languages: "Javascript, MongoDB"
      },
      {
        id: 3,
        title: "FRN@Brown Website",
        image: frn,
        link: "https://main--frnatbrown.netlify.app/",
        Github: "https://github.com/baileysmoko/frn",
        description: "Informational Website for Brown's chapter of Food Recovery Network",
        languages: "Javascript, EmailJS"
      },
  ]