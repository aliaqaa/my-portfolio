"use client";
import Link from "next/link";
import useScrollNavigation from '@/hooks/useScrollNavigation'
const projects = [
  { title: "Project 1", url: "https://yourproject1.vercel.app" },
  { title: "Project 2", url: "https://yourproject2.vercel.app" },
  { title: "Project 3", url: "https://yourproject3.vercel.app" },
  { title: "Project 4", url: "https://yourproject4.vercel.app" },
];
const Portfolio = () => {
  useScrollNavigation()
  return (
    <section className="p-10 text-white p-30" style={{ height: "100vh" }}>
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link key={project.url} href={project.url} target="_blank">
            <div className="p-4 border rounded-lg hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
