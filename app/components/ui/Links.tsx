import Link from "next/link";

const links = [
  { href: "https://github.com/AdityaPatil0708", label: "Github" },
  {
    href: "https://www.linkedin.com/in/aditya-patil-ap2907",
    label: "LinkedIn",
  },
];

export function Links() {
  return (
    <div className="flex gap-3">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          className="flex items-center gap-1.5 text-sm text-[#4a4a4a] dark:text-zinc-300 hover:text-[#443da3] dark:hover:text-indigo-400 border border-transparent hover:border-[#443da3] dark:hover:border-indigo-400 transition-colors duration-200 px-3 py-2 rounded-md"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>{" "}
          {label}
        </Link>
      ))}
    </div>
  );
}
