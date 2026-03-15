import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import ContactUsPage from "@/components/support/ContactForm";

export const metadata = {
    title: "Contact Us – MetaFit",
    description: "Get in touch with the MetaFit team. We're here to help with any questions about your weight loss journey.",
};

export default function ContactPage() {
    return <main className="min-h-screen bg-white">
        <Navbar />
        <ContactUsPage />
        <Footer />
    </main>
}
