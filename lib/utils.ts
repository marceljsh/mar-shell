import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  footer,
  hello,
  help,
  resume,
  social,
  theme,
  whatis,
  template,
} from "@/lib/cmd";

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

export function command(cmd: string) {
  switch (cmd.toLowerCase()) {
    case "help":
      return help;
    case "whatis":
      return whatis;
    case "theme":
      return theme;
    case "social":
      return social;
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
      return [
        `Command not found.
Type <span class="text-neon-red dark:text-neon-yellow">"help"</span> for available commands.`,
      ];
  }
}
