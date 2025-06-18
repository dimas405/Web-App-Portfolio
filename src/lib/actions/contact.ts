"use server";

import { contactFormSchema } from '@/lib/schemas/contact';
import type { ContactFormData } from '@/lib/types';

interface FormState {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
}

export async function submitContactForm(
  prevState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const validatedFields = contactFormSchema.safeParse({ name, email, message });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Form data received:");
  console.log("Name:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Message:", validatedFields.data.message);

  // In a real application, you would integrate with an email service (e.g., Resend, SendGrid)
  // or save the data to a database here.
  // For now, we'll just simulate success.

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate potential error during submission
  // if (Math.random() > 0.5) {
  //   return {
  //     success: false,
  //     message: "An unexpected error occurred. Please try again later.",
  //   };
  // }

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
