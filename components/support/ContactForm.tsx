"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import { PaperClipIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

type FormErrors = Partial<Record<keyof ContactFormData | "file", string>>;

export default function ContactUsPage() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.size > 50 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, file: "File size must be less than 50MB." }));
      return;
    }

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setErrors((prev) => ({ ...prev, file: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.details.trim()) newErrors.details = "Please describe your reason for contacting us";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      if (formData.phone) formDataToSend.append("phone", formData.phone);
      formDataToSend.append("details", formData.details);
      if (file) formDataToSend.append("file", file);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", details: "" });
        setFile(null);
        setFileName("");
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-16 px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          Support
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Have a question about your treatment, membership, or MetaFit? We're
          here to help — reach out and we'll get back to you quickly.
        </p>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* Left: Info cards */}
          <div className="space-y-5 lg:pt-1">
            <InfoCard
              emoji="💬"
              title="General Enquiries"
              desc="Questions about MetaFit, membership plans, or how the program works."
            />
            <InfoCard
              emoji="🏥"
              title="Medical Support"
              desc="Connect with your provider or get help with your treatment plan."
            />
            <InfoCard
              emoji="🔒"
              title="Privacy & Data"
              desc={
                <>
                  For privacy-related concerns, see our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-gray-900"
                  >
                    Privacy Policy
                  </Link>
                  .
                </>
              }
            />
            <InfoCard
              emoji="⏱️"
              title="Response Time"
              desc="We typically respond within 1–2 business days."
            />
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      id="name"
                      label="Name"
                      required
                      error={errors.name}
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass(!!errors.name)}
                      />
                    </Field>

                    <Field
                      id="email"
                      label="Email"
                      required
                      error={errors.email}
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Phone */}
                  <Field id="phone" label="WhatsApp Number" hint="Optional">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9999999999"
                      className={inputClass(false)}
                    />
                  </Field>

                  {/* Details */}
                  <Field
                    id="details"
                    label="Reason for contacting"
                    required
                    error={errors.details}
                  >
                    <textarea
                      id="details"
                      name="details"
                      rows={6}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Please include as much detail as possible..."
                      className={`${inputClass(!!errors.details)} resize-none`}
                    />
                  </Field>

                  {/* File upload — authenticated only */}
                  {isAuthenticated && (
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-700">
                        Attach a file{" "}
                        <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <div
                        className={`flex items-center gap-3 px-4 py-3 border rounded-xl transition-colors ${
                          errors.file
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <input
                          type="file"
                          id="file"
                          name="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="file"
                          className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          <PaperClipIcon className="h-4 w-4" />
                          Browse
                        </label>
                        <span className="text-sm text-gray-500 truncate">
                          {fileName || "No file selected"}
                        </span>
                      </div>
                      {errors.file && (
                        <p className="text-red-500 text-xs">{errors.file}</p>
                      )}
                      <p className="text-xs text-gray-400">
                        Maximum file size: 50MB
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Sub-components ──────────────────────────────────────────── */

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}{" "}
        {required && <span className="text-red-500">*</span>}
        {hint && <span className="text-gray-400 font-normal ml-1">({hint})</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

function InfoCard({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <span className="text-2xl shrink-0">{emoji}</span>
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <span className="text-3xl">✅</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Message Sent!
      </h2>
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
        Thank you for reaching out. We'll get back to you within 1–2 business
        days.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
      >
        Send another message
      </button>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 border ${
    hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
  } rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors placeholder:text-gray-400`;
}
