
import type { z } from 'zod';
import type { contactFormSchema } from './schemas/contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrls: string[]; // Changed from imageUrl
  imageHints?: string[]; // Changed from imageHint, now an array
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  featured?: boolean;
}

export type ContactFormData = z.infer<typeof contactFormSchema>;
