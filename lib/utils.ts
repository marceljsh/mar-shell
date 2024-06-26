import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  contact,
  footer,
  hello,
  help,
  resume,
  social,
  theme,
  whois,
  template,
  projects,
  skills,
} from "@/lib/cmd";

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

export function command(cmd: string): string {
  switch (cmd.toLowerCase()) {
    case "help":
      return help;
    case "contact":
      return contact;
    case "whois":
      return whois;
    case "theme":
      return theme;
    case "projects":
      return projects;
    case "social":
      return social;
    case "skills":
      return skills;
    case "resume":
      return resume;
    case "footer":
      return footer;
    case "template":
      return template;
    case "hello":
    case "hi":
    case "hey":
    case "ola":
    case "yo":
      return hello;
    default:
      return `\
Command not found.
Type <span class="text-neon-red dark:text-neon-yellow">"help"</span> for available commands.
`;
  }
}
