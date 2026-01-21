'use client';

import React, { useState, ChangeEvent, MouseEvent } from "react";
import ModalWrapper from "@/components/common/modals/ModalWrapper"; // Ensure .tsx
import { closeModal } from "@/store/modalSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { toast } from "react-toastify";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  details: string;
  file?: string
}

type FormErrors = Partial<Record<keyof ContactFormData | 'file', string>>;

export default function ContactUsForm() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth); // Assuming auth state is set up
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    details: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear specific field error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name as keyof ContactFormData]: "" }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Use optional chaining for files

    if (selectedFile) {
      // Check file size (50MB limit)
      if (selectedFile.size > 50 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          file: "File size must be less than 50MB!"
        }));
        return;
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
      setErrors(prev => ({ ...prev, file: "" })); // Clear file error
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.details.trim()) newErrors.details = "Details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        if (formData.phone) formDataToSend.append('phone', formData.phone);
        formDataToSend.append('details', formData.details);
        if (file) {
            formDataToSend.append('file', file);
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formDataToSend,
        });

        const result = await response.json();

        if (response.ok && result.success) {
            toast.success("Message sent successfully!");
            dispatch(closeModal());
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                details: ""
            });
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

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <ModalWrapper header="Contact Us" size="md">
      <div className="space-y-4 px-1">
        {/* Name field */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email field */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Your email address"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone field */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            WhatsApp Number (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your WhatsApp number"
          />
        </div>

        {/* Details/Reason field */}
        <div className="space-y-1">
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">
            Reason
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            value={formData.details}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.details ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Please include as much information as possible..."
          />
          {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
        </div>

        {/* File upload field */}
        {isAuthenticated && <div className="space-y-1">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Add a file (optional)
          </label>
          <div className="flex items-center">
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file"
              className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse...
            </label>
            <span className="ml-3 text-sm text-gray-500">
              {fileName || "No file selected"}
            </span>
          </div>
          {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
          <p className="text-xs text-gray-500">Maximum file size: 50MB</p>
        </div>}

        {/* Form buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="cursor-pointer py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="cursor-pointer py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
