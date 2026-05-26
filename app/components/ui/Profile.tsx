import { Links } from "./Links";

const skills = [
  { label: "Languages", value: "Python, JavaScript, Typescript" },
  { label: "Technologies", value: "Express.js, Node.js, Next.js, Websockets" },
  { label: "Databases", value: "MongoDB, PostgreSQL" },
  { label: "DevOps & Tools", value: "Docker, Kubernetes, GitHub, Jenkins, GitHub Actions, AWS, GCP" },
  { label: "General", value: "Linux, Networking, Operating Systems" },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "The Fast Way, Navi Mumbai",
    period: "Feb 2026 – Aug 2026",
    description:
      "Developed a full-stack Web3 NFT marketplace using React.js, Next.js, Node.js, and PostgreSQL with wallet authentication and blockchain transactions. Integrated scalable REST APIs for user management, asset trading, and transaction handling in a production environment.",
  },
  {
    role: "Web Developer",
    company: "Codolog, Naigaon",
    period: "Nov 2025 – Feb 2026",
    description:
      "Built and maintained the company's official website and admin panel using Next.js and Node.js. Developed responsive UI components and integrated backend APIs, improving usability and internal workflow efficiency.",
  },
];

export function Profile() {
  return (
    <div className="relative rounded-2xl px-10 py-10">
      {/* Top: avatar + skills */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start">
        {/* Left: avatar + name */}
        <div className="flex flex-col items-center gap-2 shrink-0 sm:pt-5">
          <img
            src="./profile.png"
            alt=""
            className="rounded-full h-28 sm:h-35"
          />
          <p className="font-semibold text-[#4a4a4a] dark:text-zinc-300 text-sm text-center">
            Aditya Patil
          </p>
        </div>

        {/* Right: skills */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-2xl font-bold text-[#4a4a4a] underline underline-offset-4 dark:text-zinc-300 text-left">
            Skills
          </h2>
          {skills.map(({ label, value }) => (
            <p key={label} className="text-[12px] sm:text-[13px] text-gray-600 dark:text-zinc-300 leading-relaxed">
              <strong className="text-[#4a4a4a] dark:text-zinc-300">{label} : </strong>
              {value}
            </p>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#4a4a4a] underline underline-offset-4 dark:text-zinc-300 mb-5">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map(({ role, company, period, description }) => (
            <div key={role} className="relative pl-4 border-l border-gray-200 dark:border-zinc-400">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-1">
                <div>
                  <span className="text-[14px] font-semibold text-[#4a4a4a] dark:text-zinc-200">
                    {role}
                  </span>
                  <span className="text-[13px] text-gray-500 dark:text-zinc-300 ml-2">
                    @ {company}
                  </span>
                </div>
                <span className="text-[12px] text-gray-400 dark:text-zinc-300 shrink-0">
                  {period}
                </span>
              </div>
              <p className="text-[13px] text-gray-600 dark:text-zinc-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-8 mt-8 sm:mt-10">
        <Links />
      </div>
    </div>
  );
}