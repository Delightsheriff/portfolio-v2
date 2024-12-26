import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "@/utils/date";
import Link from "next/link";

export default async function Job() {
  const job: JobType[] = await getJob();

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-montserrat text-4xl mb-4 font-bold tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
        {job.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-gray-800 before:bg-gray-200"
          >
            <Link
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
            >
              <Image
                src={data.logo}
                className="object-cover duration-300"
                alt={`${data.name} logo`}
                width={50}
                height={50}
              />
            </Link>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-montserrat font-semibold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <time className="text-sm text-gray-500 mt-2 tracking-widest uppercase">
                {formatDate(data.startDate)} -{" "}
                {data.endDate ? (
                  formatDate(data.endDate)
                ) : (
                  <span className="dark:text-primary-color text-tertiary-color">
                    Present
                  </span>
                )}
              </time>
              <p className="tracking-tight dark:text-gray-200  my-4">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
