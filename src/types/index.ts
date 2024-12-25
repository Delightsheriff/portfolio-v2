import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: { alt: string; image: string; lqip: string };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
    lqip: string;
  };
  description: PortableTextBlock[];
};
