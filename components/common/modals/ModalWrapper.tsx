'use client';

import React, { ReactNode } from "react";
import { useAppDispatch } from "@/store/store"; // Assuming AppDispatch is exported from your store setup
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { closeModal } from "@/store/modalSlice"; // Assuming correct path

type ModalSize = "mini" | "tiny" | "small" | "md" | "large" | "fullscreen";

interface ModalWrapperProps {
  children: ReactNode;
  size?: ModalSize;
  header?: string;
  alwaysOpen?: boolean
}

export default function ModalWrapper({
  children,
  size = "md", // Default size
  header,
  alwaysOpen = false
}: ModalWrapperProps) {
  const dispatch = useAppDispatch();

  const handleClose = (isOpen: boolean) => {
    // onOpenChange gives a boolean indicating if the dialog is attempting to open or close
    // We only dispatch closeModal if the dialog is closing
    if (!isOpen) {
      dispatch(closeModal());
    }
  };

  return (
    <Dialog open={true} onOpenChange={alwaysOpen ? () => { } : handleClose}> {/* `open` should ideally be controlled by Redux state as well */}
      <DialogContent className={`${getSizeClass(size)} bg-white shadow-xl rounded-lg`}>
        {header && (
          <DialogHeader className="pt-4 px-6 items-center"> {/* Added padding to header */}
            <DialogTitle className="text-xl font-semibold text-gray-800">{header}</DialogTitle>
          </DialogHeader>
        )}
        <div className="p-2">{children}</div> {/* Added padding to content area */}
      </DialogContent>
    </Dialog>
  );
}

function getSizeClass(size: ModalSize): string {
  switch (size) {
    case "mini":
      return "sm:max-w-xs"; // Adjusted mini to be smaller than tiny based on common usage
    case "tiny":
      return "sm:max-w-sm"; // Adjusted tiny
    case "small":
      return "sm:max-w-md";
    case "md": // Default case from props
      return "sm:max-w-lg";
    case "large":
      return "sm:max-w-2xl";
    case "fullscreen":
      return "w-screen h-screen max-w-full max-h-full"; // Fullscreen behavior
    default: // Should not be reached if size prop is typed correctly
      return "sm:max-w-lg";
  }
}
