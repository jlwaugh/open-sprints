type LevelOfDiffulty = "Beginner" | "Intermediate" | "Advanced";

export type Project = {
  id: string;
  goal_statement: string;
  emoji: string;
  project_tags: string[];
  headline: string;
  description: string;
  level_of_difficulty: LevelOfDiffulty;
  roles: string[];
};

export type ProjectsConfigProps = {
  [key: string]: Project;
};

const projectsConfigValue = {
  Akita: {
    id: "akita",
    emoji: "😊",
    goal_statement:
      "Enabling Async Work using Github Pages and CSS Styled Templates",
    project_tags: ["Development", "Github", "DesignSystem"],
    headline: "Project Akita: Implement and Build Docusaurus CMS Site",
    description:
      "Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",
    level_of_difficulty: "Beginner",
    roles: ["HTML and CSS Frontend Developer", "Content Designer"],
  },
  Moonshot: {
    id: "moonshot",
    emoji: "😎",
    goal_statement: "Launch a Reusable Component Library on Storybook",
    project_tags: ["Development", "Github", "DesignSystem"],
    headline: "Project Chihuahua: Implement and Build Docusaurus CMS Site",
    description:
      "Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons.",
    level_of_difficulty: "Intermediate",
    roles: ["Designer", "React Developer"],
  },
} satisfies ProjectsConfigProps;

export default projectsConfigValue;