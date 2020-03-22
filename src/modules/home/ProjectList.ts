import { Project } from "./models/Project"
import Salad from "../../assets/photos/salad.io.png"
import Doggo from "../../assets/photos/RandomDog.png"
import Snake from "../../assets/photos/snake.png"
import Zendesk from "../../assets/photos/zendesk.png"
import Discord from "../../assets/photos/discord.jpg"
import Instagram from "../../assets/photos/instagram.png"

export const ProjectList: Project[] = [
  {
    title: "Salad.io App",
    imageUrl: Salad,
    role: "Front-End Dev",
    snippet: "Best way to earn money with your gaming PC whilst AFK.",
    description: "",
    buttonText: "Make Money",
    repoUrl: "https://github.com/SaladTechnologies/salad-applications",
    demoUrl: "", //TODO:
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "Front-End",
      "Git",
      "Mobx",
      "Jss"
    ]
  },
  {
    title: "Instagram Bot",
    imageUrl: Instagram,
    role: "Sole Dev",
    snippet: "A little console bot that gets followers that don't follow you.",
    description:
      "A simple Python script built to open Chrome, navigate to Instagram and login, go to your profile, open and record both followers and following lists, then compare and return the usernames of the users that do not follow you back.",
    buttonText: "See Repo",
    repoUrl: "https://github.com/dsorensen00/Insta-Bot",
    demoUrl: "", //TODO:
    tags: ["Python", "Back-End", "Git", "Selenium"]
  },
  {
    title: "Snake Game",
    imageUrl: Snake,
    role: "Sole Dev",
    snippet:
      "A Nostalgic little Javascript game. It is most iconically paired with a Nokia.",
    description: "", //TODO:
    buttonText: "Play Game",
    repoUrl: "https://github.com/dsorensen00/snake-game",
    demoUrl: "", //TODO:
    tags: ["JavaScript", "Node", "Front-End", "Git"]
  },
  {
    title: "Zendesk Bots",
    imageUrl: Zendesk,
    role: "Sole Dev",
    snippet: "A little console app that auto-replies to tickets and more.",
    description:
      "A simple python package that auto-responds to new tickets, reminds agents of old open ones, and can lower first reply time stats by impersonating a user, create tickets, then go in and solve those tickets as an agent.",
    buttonText: "See Repo",
    repoUrl: "https://github.com/dsorensen00/zendesk-bot",
    demoUrl: "", //TODO:
    tags: ["Python", "Back-End", "Git"]
  },
  {
    title: "Random Dogs",
    imageUrl: Doggo,
    role: "Sole Dev",
    snippet: "Get to see random Dogs, and rate them to save for later!",
    description:
      "Full front-end website built around the Dog-API. The site presents one random dog picture to the user and allows the user to optionally select a breed for random pictures. For each dog picture, the user can assign a numeric rating to the dog. As numeric ratings are assigned, the rating and picture are stored locally. Finally, there is a dashboard page to allow the user to see all of the dogs they have rated.",
    buttonText: "See Dogs!",
    repoUrl: "https://github.com/dsorensen00/doggo",
    demoUrl: "", //TODO:
    tags: ["JavaScript", "Node", "CSS", "Git", "Front-End"]
  },
  {
    title: "Discord Bot",
    imageUrl: Discord,
    role: "Sole Dev",
    snippet: "Little Discord bot to show Salad users how much they can make.",
    description:
      "A Very Simple Discord Bot used to get user's earning rates, and post them in the channel where summoned.",
    buttonText: "See Repo",
    repoUrl:
      "https://github.com/SaladTechnologies/discord-bots/tree/master/Earning%20Bot",
    demoUrl: "", //TODO:
    tags: ["Python", "Back-End", "Git"]
  }
]
