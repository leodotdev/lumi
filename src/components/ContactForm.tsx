"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define form validation schema
const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      form.reset();
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full mx-auto">
      {submitSuccess && (
        <div className="mb-6 p-4 rounded-md bg-zinc-800 border border-zinc-700">
          <p className="text-primary font-medium">
            Thank you for your message! We'll be in touch soon.
          </p>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 rounded-md bg-zinc-800 border border-zinc-700">
          <p className="text-destructive font-medium">{submitError}</p>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            className={`w-full bg-zinc-800 border-zinc-700 text-foreground p-3 rounded-md outline-none focus:ring-1 focus:ring-primary ${
              form.formState.errors.name ? "border-destructive" : "border"
            }`}
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <p className="text-destructive text-sm">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            className={`w-full bg-zinc-800 border-zinc-700 text-foreground p-3 rounded-md outline-none focus:ring-1 focus:ring-primary ${
              form.formState.errors.email ? "border-destructive" : "border"
            }`}
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-destructive text-sm">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <textarea
            placeholder="Message"
            className={`w-full bg-zinc-800 border-zinc-700 text-foreground p-3 rounded-md outline-none focus:ring-1 focus:ring-primary min-h-[120px] ${
              form.formState.errors.message ? "border-destructive" : "border"
            }`}
            {...form.register("message")}
          />
          {form.formState.errors.message && (
            <p className="text-destructive text-sm">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black font-medium py-3 px-4 rounded-md transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
