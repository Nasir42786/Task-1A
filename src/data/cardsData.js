import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import pic from "../assets/pic.png";
import profile from "../assets/profile.png";
import l from "../assets/l.png";
import r from "../assets/r.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

export const headerData = {
  note: "Note: Hover the component to view the animation & Click the arrow icon",
  title: "Your SkillShikshya Journey",
  subtitle: {
    prefix: "",
    highlights: ["Step", "Skill", "Stand"],
    suffix: "In. Up. Out. 🚀",
  },
};

export const hoverCardsData = [
  {
    id: "hov-1",
    cardClass: "card-1",
    cardImage: one,
    cardTitle: "Start with Clarity",
    cardSubtitle: "Step into a better learning path.",
    cardDescription:
      "Overwhelmed by too many learning<br/> options? SkillShikshya provides a clear,<br/> curated roadmap from the start. Whether<br/> you're a beginner or upskilling, we have a<br/> path tailored to your growth.",
    subtractClass: "subtract-1",
    subtractImages: [
      { src: pic, className: "pic" },
      { src: profile, className: "profile" },
      { src: l, className: "l" },
      { src: r, className: "r" },
    ],
    subtractText: "Clarity unlocked—\nstickers, sips, and skills\nall in one go!",
    hasToggle: false,
  },
  {
    id: "hov-2",
    cardClass: "card-2",
    cardImage: two,
    cardTitle: "Learn by Doing",
    cardSubtitle: "Practical skills, real projects.",
    cardDescription:
      "Theory is great, but action is better. At<br/> SkillShikshya, you learn by doing. Hands-on<br/> projects and real-world scenarios help you<br/> build, break, and create—leading to true<br/> mastery.",
    hasToggle: true,
    subtractCards: [
      {
        id: "subtract-2",
        className: "subtract-2",
        image: second,
        imageClass: "second-pic",
        text: "Focused faces—learning\nmode: ON!",
        showLeftArrow: true,
        showRightArrow: true,
        isRightArrowClickable: true,
      },
      {
        id: "subtract-3",
        className: "subtract-3",
        image: third,
        imageClass: "third-pic",
        text: "Laptops, lessons, and a whole lot of\n growth!",
        showLeftArrow: true,
        showRightArrow: true,
        isLeftArrowClickable: true,
      },
    ],
  },
];

export const staticCardsData = [
  {
    id: "card-3",
    cardClass: "card-3",
    image: three,
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's<br/> community of mentors and learners<br/> has your back with live support,<br/> interactive discussions, and expert<br/> insights. You're never on your own.",
  },
  {
    id: "card-4",
    cardClass: "card-4",
    image: four,
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each<br/> completed project builds a portfolio<br/> showcasing your skills and job readiness,<br/> bringing you closer to that dream job,<br/> promotion, or your own venture.",
  },
];
