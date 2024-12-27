import { CustomPortableText } from "@/components/CustomPortableText";
import { PageAnimation } from "@/components/PageAnimation";
import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";


export const metadata: Metadata = {
  title: "About | Amadi-Sheriff Delight",
  metadataBase: new URL("https://www.delightsheriff.tech/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Amadi-Sheriff Delight",
    url: "https://www.delightsheriff.tech/about",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
  },
};

export default async function About() {
  const profile: ProfileType[] = await getProfile();
  return (
    <PageAnimation>
       <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
        {profile &&
          profile.map((data) => (
            <div key={data._id}>
              <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
                <div className="order-2 lg:order-none">
                  <h1 className="font-montserrat lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                    I&apos;m {data.fullName}. Based in {data.location}, creating
                    tomorrow&apos;s technology today.
                  </h1>

                  <div className="flex flex-col gap-y-3 dark:text-gray-200 leading-relaxed">
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                  <div className="sticky top-10">
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      src={data.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={data.profileImage.alt}
                    />

                    <div className="flex flex-col text-center gap-y-4">
                      <div className="flex items-center gap-x-3">
                        <Link
                          href="https://drive.google.com/file/d/1amjF_SzXe91wb9aOtIgqWM9eR9yG30qS/view?usp=sharing"
                          className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-colors-primary-bg bg-gray-100 border border-transparent dark:hover:border-gray-700 hover:border-gray-200 rounded-md py-2 text-lg font-montserrat font-semibold"
                        >
                          View Résumé <BiLinkExternal className="text-base" />
                        </Link>
                        <a
                          href={`${data.resumeURL}?dl=${data.fullName}-resume.pdf`}
                          className="flex items-center justify-center text-center dark:text-colors-primary-color text-colors-secondary-color hover:underline basis-[10%] dark:bg-colors-primary-bg bg-gray-100 border border-transparent dark:hover:border-gray-700 hover:border-gray-200 rounded-md py-3 text-lg"
                          title="Download Resume"
                        >
                          <BiSolidDownload
                            className="text-lg"
                            aria-label="Download Resume"
                          />
                        </a>
                      </div>

                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 hover:text-colors-primary-color"
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </a>
                    </div>
                  </div>
                </div>
              </section>

          
            </div>
          ))}
      </main>
    </PageAnimation>
  );
}
