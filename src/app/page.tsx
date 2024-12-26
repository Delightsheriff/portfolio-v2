import Job from "@/components/Job";
import { PageAnimation } from "@/components/PageAnimation";
import Social from "@/components/Social";
import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
// import Image from "next/image";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();
  return (
    <PageAnimation>
      <main className="max-w-7xl mx-auto lg:px-16 px-6">
        {/* <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16"> */}
        <section className="lg:mt-32 mt-20 mb-16">
          {profile &&
            profile.map((data) => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="text-3xl font-bold font-montserrat tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base leading-relaxed">{data.shortBio}</p>
                <ul className="flex items-center gap-x-6 my-7">
                  <Social />
                </ul>
              </div>
            ))}
          {/* <div className="xl:mt-0 mt-10">
            <Image
              src={profile && profile[0]?.profileImage.image}
              alt={profile && profile[0]?.profileImage.alt}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div> */}
        </section>
        <Job />
      </main>
    </PageAnimation>
  );
}
