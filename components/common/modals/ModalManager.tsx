"use client";
import React from "react";
import { useAppSelector } from '@/store/store';

// Company Modals
import ContactUsForm from "@/components/support/ContactForm";

// Define a general type for props that any modal might accept
// Ideally, each modal would have its own props interface and modalProps would be a discriminated union
type AnyModalProps = { [key: string]: any };

// Define the structure of the modal state from Redux
interface ModalStateInStore {
  modalType: keyof ModalLookupType | null; // modalType is a key of modalLookup or null
  modalProps: AnyModalProps | null;
}

// Define the type for modalLookup
// Using React.ComponentType<any> for simplicity.
// For stricter typing, this could be a union of specific modal component types.
type ModalLookupType = Record<string, React.ComponentType<AnyModalProps>>;

const modalLookup: ModalLookupType = {
  ContactUsForm,
  // Add other modals here as they are created and typed
};

export default function ModalManager() {
  const currentModal = useAppSelector(state => state.modal as ModalStateInStore | null);

  if (!currentModal || !currentModal.modalType) {
    return null; // No modal to display or modalType is null
  }

  const { modalType, modalProps } = currentModal;
  const ModalComponent = modalLookup[modalType];

  if (!ModalComponent) {
    console.error(`ModalManager: ModalComponent for type "${modalType}" not found.`);
    return null; // Or some error display component
  }

  // Ensure modalProps is not null before spreading; provide empty object if it is
  return <ModalComponent {...(modalProps || {})} />;
}
