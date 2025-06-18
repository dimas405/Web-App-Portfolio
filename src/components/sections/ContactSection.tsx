
"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitContactForm } from '@/lib/actions/contact';
import { contactFormSchema } from '@/lib/schemas/contact';
import type { ContactFormData } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto group">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors: clientErrors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });
  
  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
          variant: 'default', 
        });
        reset(); 
      } else {
        toast({
          title: "Error",
          description: state.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);
  
  const combinedErrors = state?.errors || {};

  return (
    <section className="py-16 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-4">
          Get In <span className="text-primary dark:text-orange-400">Touch</span>
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
        </p>

        <div className="relative p-[2px] bg-gradient-to-br from-primary/60 via-accent/40 to-primary/60 dark:from-orange-400 dark:via-pink-500 dark:to-purple-600 rounded-2xl shadow-[0_0_15px_3px_hsl(var(--primary)/0.25),_0_0_8px_1px_hsl(var(--accent)/0.2)] hover:shadow-[0_0_20px_4px_hsl(var(--primary)/0.3),_0_0_12px_2px_hsl(var(--accent)/0.25)] dark:shadow-[0_0_15px_3px_theme(colors.orange.400/0.4),_0_0_8px_1px_theme(colors.pink.500/0.15)] dark:hover:shadow-[0_0_20px_4px_theme(colors.orange.400/0.5),_0_0_12px_2px_theme(colors.pink.500/0.2)] max-w-2xl mx-auto transition-shadow duration-300">
          <Card className="bg-card/90 backdrop-blur-sm rounded-[calc(1rem-2px)]">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send me a message</CardTitle>
              <CardDescription>I'll do my best to respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} onSubmit={handleSubmit(() => formAction(new FormData(document.getElementById('contact-form') as HTMLFormElement)))} id="contact-form" className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-semibold text-foreground/90">Full Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input id="name" {...field} placeholder="Your Name" aria-invalid={!!(combinedErrors.name || clientErrors.name)} className="mt-1 bg-background/70 focus:bg-background" />}
                  />
                  {(combinedErrors.name || clientErrors.name) && (
                    <p className="text-sm text-destructive mt-1">{combinedErrors.name?.[0] || clientErrors.name?.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="font-semibold text-foreground/90">Email Address</Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input id="email" type="email" {...field} placeholder="you@example.com" aria-invalid={!!(combinedErrors.email || clientErrors.email)} className="mt-1 bg-background/70 focus:bg-background" />}
                  />
                  {(combinedErrors.email || clientErrors.email) && (
                    <p className="text-sm text-destructive mt-1">{combinedErrors.email?.[0] || clientErrors.email?.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="font-semibold text-foreground/90">Message</Label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => <Textarea id="message" {...field} placeholder="Your message..." rows={5} aria-invalid={!!(combinedErrors.message || clientErrors.message)} className="mt-1 min-h-[120px] bg-background/70 focus:bg-background" />}
                  />
                  {(combinedErrors.message || clientErrors.message) && (
                    <p className="text-sm text-destructive mt-1">{combinedErrors.message?.[0] || clientErrors.message?.message}</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <SubmitButton />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
