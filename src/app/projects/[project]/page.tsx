import { CustomPortableText } from "@/components/CustomPortableText";
import { PageAnimation } from "@/components/PageAnimation";
import { getSingleProject } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import fallBackImage from "../../../../public/project.png";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { PortableText } from "next-sanity";

type Props = {
    params: Promise<{ project: string }>;
  };
  
  // Dynamic metadata for SEO
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).project;
    const project: ProjectType = await getSingleProject(slug);
  
    return {
      title: `${project.name} | Project`,
      description: project.tagline,
      openGraph: {
        images: project.coverImage?.image || "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
        title: project.name,
        description: project.tagline,
      },
    };
  }


  export default async function Project({ params }: Props) {
    const slug = (await params).project;
    const project: ProjectType = await getSingleProject(slug);
    console.log(project);
  
    return (
      <PageAnimation>
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start justify-between flex-wrap mb-4">
              <h1 className="font-montserrat font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
                {project.name}
              </h1>
  
              <div className="flex items-center gap-x-2">
                <a
                  href={project.projectUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`flex items-center gap-x-2  dark:bg-colors-primary-bg bg-gray-100  dark:text-white text-gray-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                    !project.projectUrl
                      ? "cursor-not-allowed opacity-80"
                      : "cursor-pointer hover:dark:border-gray-700 hover:border-gray-200"
                  }`}
                >
                  <BiLinkExternal aria-hidden="true" />
                  {project.projectUrl ? "Live URL" : "Coming Soon"}
                </a>
  
                <a
                  href={project.repository}
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`flex items-center gap-x-2 dark:bg-colors-primary-bg bg-gray-100  dark:text-white text-gray-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                    !project.repository
                      ? "cursor-not-allowed opacity-80"
                      : "cursor-pointer hover:dark:border-gray-700 hover:border-gray-200"
                  }`}
                >
                  <BiLogoGithub aria-hidden="true" />
                  {project.repository ? "GitHub" : "No Repo"}
                </a>
              </div>
            </div>
  
            <div className="relative w-full h-40 pt-[52.5%]">
              <Image
                className="rounded-xl border dark:border-gray-800 border-gray-100 object-cover"
                fill
                src={project.coverImage?.image ?? fallBackImage}
                alt={project.coverImage?.alt ?? project.name}
                quality={100}
                placeholder={project.coverImage?.lqip ? `blur` : "empty"}
                blurDataURL={project.coverImage?.lqip || ""}
              />
            </div>
  
            <div className="mt-8 dark:text-gray-200 leading-relaxed">
              <PortableText
                value={project.description}
                components={CustomPortableText}
              />
            </div>
          </div>
        </main>
      </PageAnimation>
    );
  }