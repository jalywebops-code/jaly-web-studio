"use client";

import { useState, FormEvent } from "react";

type ProjectType =
  | ""
  | "Chrome Extension"
  | "Web App"
  | "SEO Blog"
  | "Landing Page"
  | "Full Website"
  | "Other";

interface FormState {
  name: string;
  email: string;
  projectType: ProjectType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const projectTypes: ProjectType[] = [
  "Chrome Extension",
  "Web App",
  "SEO Blog",
  "Landing Page",
  "Full Website",
  "Other",
];

function validate(fields: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.projectType) errors.projectType = "Please select a project type.";
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 20) {
    errors.message = "Please tell us a bit more (at least 20 characters).";
  }
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validate(fields);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus the first erroring field
      const firstErrorKey = Object.keys(newErrors)[0] as keyof FormErrors;
      const el = document.getElementById(`field-${firstErrorKey}`);
      el?.focus();
      return;
    }
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-green-200 bg-green-50"
        role="alert"
        aria-live="polite"
      >
        <div
          className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mb-5"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">
          Message sent!
        </h3>
        <p className="text-gray-500 text-sm max-w-sm">
          Thanks for reaching out. We&rsquo;ll get back to you within 1–2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Contact form"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="field-name"
          className="block text-sm font-semibold text-[#111111] mb-1.5"
        >
          Name <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="field-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={fields.name}
          onChange={handleChange}
          aria-describedby={errors.name ? "error-name" : undefined}
          aria-invalid={!!errors.name}
          className={`w-full px-4 py-3 rounded-md border text-[#111111] text-sm placeholder-gray-400 focus-ring transition-colors ${
            errors.name
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="error-name" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="field-email"
          className="block text-sm font-semibold text-[#111111] mb-1.5"
        >
          Email <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="field-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={handleChange}
          aria-describedby={errors.email ? "error-email" : undefined}
          aria-invalid={!!errors.email}
          className={`w-full px-4 py-3 rounded-md border text-[#111111] text-sm placeholder-gray-400 focus-ring transition-colors ${
            errors.email
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="error-email" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="field-projectType"
          className="block text-sm font-semibold text-[#111111] mb-1.5"
        >
          Project Type <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <select
          id="field-projectType"
          name="projectType"
          required
          value={fields.projectType}
          onChange={handleChange}
          aria-describedby={errors.projectType ? "error-projectType" : undefined}
          aria-invalid={!!errors.projectType}
          className={`w-full px-4 py-3 rounded-md border text-sm focus-ring transition-colors appearance-none bg-white ${
            fields.projectType ? "text-[#111111]" : "text-gray-400"
          } ${
            errors.projectType
              ? "border-red-400 bg-red-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="text-[#111111]">
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="error-projectType" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.projectType}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="field-message"
          className="block text-sm font-semibold text-[#111111] mb-1.5"
        >
          Message <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          aria-describedby={errors.message ? "error-message" : undefined}
          aria-invalid={!!errors.message}
          className={`w-full px-4 py-3 rounded-md border text-[#111111] text-sm placeholder-gray-400 focus-ring transition-colors resize-y ${
            errors.message
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
          placeholder="Tell us about your project — what are you building, what's your timeline, budget range, etc."
        />
        {errors.message && (
          <p id="error-message" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-brand-purple text-white text-base font-bold hover:bg-purple-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-ring"
        aria-busy={submitting}
      >
        {submitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
