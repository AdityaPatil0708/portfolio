import Link from "next/link"

export function Profile(){
    return(
        <div className="relative rounded-2xl px-10 py-12">
        <h1 className="text-4xl font-semibold text-[#4a4a4a] mb-5 tracking-tight">
          Aditya Patil
        </h1>

        <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px]">
          I&apos;m a{" "}
          <strong className="font-semibold text-[#4a4a4a]">
            Full Stack Developer &amp; DevOps Engineer
          </strong>{" "}
          with a strong focus on building scalable server-side systems and
          creating automated, reliable deployment workflows. Through
          internships, projects, and continuous learning, I&apos;ve gained
          expertise in backend development, API design, database management,
          cloud services, and infrastructure automation. I specialize in
          developing high-performance RESTful APIs, containerizing applications,
          and implementing CI/CD pipelines using tools like Docker, Kubernetes,
          and Jenkins. With experience across Node.js, Express.js, SQL/NoSQL
          databases, AWS and GCP. I enjoy architecting systems that are
          efficient, secure, and easy to maintain.
        </p>

        <div className="flex gap-8 mt-5">
          <button className="hover:border hover:border-[#443da3] transition duration-200 px-3 py-2 rounded-md">
            <Link
              href="https://github.com/AdityaPatil0708"
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-[#4a4a4a] hover:text-[#443da3]"
            >
            ↗ Github
            </Link>
          </button>
          <button className="hover:border hover:border-[#443da3] transition duration-300 px-3 py-2 rounded-md">
            <Link
              href="https://www.linkedin.com/in/aditya-patil-ap2907"
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-[#4a4a4a] hover:text-[#443da3]"
            >
            ↗ LinkedIn
            </Link>
          </button>
        </div>
      </div>
    )
}