// These are the responses that will return a template literal string to the terminal
// You can use these on lib/utils.js
const help = [`\
<span class="text-neon-red dark:text-neon-yellow">whois</span>           Summary about me
<span class="text-neon-red dark:text-neon-yellow">resume</span>          My resume
<span class="text-neon-red dark:text-neon-yellow">skills</span>          Tech stacks
<span class="text-neon-red dark:text-neon-yellow">social</span>          My social links
<span class="text-neon-red dark:text-neon-yellow">contact</span>         Copy email to clipboard
<span class="text-neon-red dark:text-neon-yellow">help</span>            Available commands
<span class="text-neon-red dark:text-neon-yellow">template</span>        Get this template
<span class="text-neon-red dark:text-neon-yellow">footer</span>          Show Mar-Shell's footer
<span class="text-neon-red dark:text-neon-yellow">theme</span>           Change the theme
<span class="text-neon-red dark:text-neon-yellow">clear, cls</span>      Clear the commands
`];

const whois = [`\
Name           <span class="text-neon-red dark:text-neon-yellow">Marcel Joshua</span>
Title          <span class="text-neon-red dark:text-neon-yellow">Software Engineer</span>
Location       <span class="text-neon-red dark:text-neon-yellow">North Sumatra, ID</span>
`];

const theme = [
  `<span class="text-neon-red dark:text-neon-yellow">Theme changed</span>`,
];

const contact = [
  `<span class="text-neon-red dark:text-neon-yellow">marceljoshua69@gmail.com</span> has been copied to your clipboard.`,
];

const projects = [
  `All projects are <span class="text-neon-red">private</span>. Please contact me for more information.`,
];

const social = [
  `twitter       <a target="_blank" href="https://twitter.com/buruhkodingg"><span class="text-neon-red dark:text-neon-yellow">https://twitter.com/buruhkodingg</span></a>
github        <a target="_blank" href="https://github.com/marceljsh"><span class="text-neon-red dark:text-neon-yellow">https://github.com/marceljsh</span></a>
linkedin      <a target="_blank" href="https://linkedin.com/in/marceljsh"><span class="text-neon-red dark:text-neon-yellow">https://linkedin.com/in/marceljsh</span></a>
instagram     <a target="_blank" href="https://instagram.com/marceljsh"><span class="text-neon-red dark:text-neon-yellow">https://instagram.com/marceljsh</span></a>
portfolio     <a target="_blank" href="https://marceljsh.vercel.app"><span class="text-neon-red dark:text-neon-yellow">https://marceljsh.vercel.app</span></a>`,
];

const template = [
  `Click <a href="https://github.com/marceljsh" class="text-neon-red dark:text-neon-yellow">here</a> to get the template.`,
];

const resume = [`\
-> Feb 2024 - Present
<span class="text-neon-red dark:text-neon-yellow">Backend Java Cohort</span> at <span class="text-neon-red dark:text-neon-yellow">SYNRGY Academy</span>
-> Mar - Oct 2023
<span class="text-neon-red dark:text-neon-yellow">Deep Learning Researcher</span> at <span class="text-neon-red dark:text-neon-yellow">Institut Teknologi Del</span>
-> Jun - Aug 2023
<span class="text-neon-red dark:text-neon-yellow">Backend Developer</span> at <span class="text-neon-red dark:text-neon-yellow">Aplysit Corp</span>
-> Sep 2022 - Jun 2023
<span class="text-neon-red dark:text-neon-yellow">Assistant Lecturer</span> at <span class="text-neon-red dark:text-neon-yellow">Institut Teknologi Del</span>
-> Jan - May 2023
<span class="text-neon-red dark:text-neon-yellow">Full Stack Developer</span> at <span class="text-neon-red dark:text-neon-yellow">Toba Regency Government</span>
`];

const skills = [`\
Go           Go Gin        PostgreSQL
Java         Spring Boot   MySQL
PHP          Laravel       MongoDB
TypeScript   Next.js       C/C++
JavaScript   React.js
Python       Express.js
`]

const footer = [
  `<div class="flex w-full items-center justify-between"><p class="dark:text-neon-purple text-neon-purple">marceljsh</p><p class="dark:text-neon-yellow text-neon-red" style="margin-left: auto;">2024 All rights reserved</p></div>`,
];

const hello = [`Hello :D`];

export {
  contact,
  footer,
  hello,
  help,
  projects,
  resume,
  social,
  skills,
  template,
  theme,
  whois,
};
