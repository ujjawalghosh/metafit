import CreateProfileContent from '@/components/login/CreateProfileContent';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Profile | MetaFit",
  description: "Create your MetaFit profile",
  alternates: {
    canonical: "/create-profile",
  },
};

export default function CreateProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <CreateProfileContent />
    </main>
  );
}