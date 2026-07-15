export interface User {
  id: number;
  name: string;
  email: string;
  role: "USER" | "COMPANY";
}

export interface UserProfile extends User {
  title: string;
  bio: string | null;
  location: string;
  phone: string;
  portfolioUrl: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  resumeUrl: string | null;
  profilePictureUrl: string | null;
  skills: string[];
  experience: "junior" | "mid" | "senior";
  education: string[];
  createdAt: string;
  updatedAt: string;
}
