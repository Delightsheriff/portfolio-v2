import { EmptyState } from "@/components/EmptyState";
import { PageAnimation } from "@/components/PageAnimation";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project | Amadi-Sheriff Delight",
  metadataBase: new URL("https://www.delightsheriff.tech/projects"),
  description: "Explore projects built by Amadi-Sheriff Delight",
  openGraph: {
    title: "Projects | Amadi-Sheriff Delight",
    url: "https://www.delightsheriff.tech/projects",
    description: "Explore projects built by Amadi-Sheriff Delight",
    images:
      "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
  },
};

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();
  return (
    <PageAnimation>
       <main className="max-w-7xl mx-auto md:px-16 px-6">
        <section className="max-w-2xl mb-16">
          <h1 className="text-3xl font-bold font-montserrat tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
            Projects That Define My Development Journey
          </h1>
          <p className="text-base dark:text-gray-200 leading-relaxed">
            Over the years, I&apos;ve built a diverse range of projects that
            have played a significant role in my evolution as a developer. These
            personal projects have not only allowed me to explore new tools and
            technologies but also to tackle challenges that have helped me grow.
            While I am still on the path of contributing to open-source, these
            projects highlight key moments in my learning journey and
            demonstrate my continuous drive to improve and innovate in the tech
            space.
          </p>
        </section>

        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-gray-700 p-4 rounded-lg ease-in-out"
              >
                <Image
                  src={project.logo}
                  width={60}
                  height={60}
                  alt={project.name}
                  className="bg-gray-800 rounded-md p-2"
                />
                <div>
                  <h2 className="font-semibold font-montserrat text-white mb-1">
                    {project.name}
                  </h2>
                  <div className="text-sm dark:text-gray-400 text-gray-600 ">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState />
        )}
      </main>
    </PageAnimation>
  );
}
