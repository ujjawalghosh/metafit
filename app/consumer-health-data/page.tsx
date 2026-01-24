import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: 'Consumer Health Data Privacy Policy | MetaFit',
  description: 'Policy regarding the collection, use, and protection of consumer health data at MetaFit.',
};

export default function ConsumerHealthPrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            Consumer Health Data Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            <span className="font-bold text-gray-900">Last updated:</span> October 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Introduction</h2>
          <p>
            MetaFit ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal and health information. This comprehensive Consumer Health Data Privacy Policy explains in detail how we collect, use, disclose, and safeguard your information when you visit our website, use our medical weight loss services, or interact with us in any way. By using MetaFit's services or accessing our website, you agree to the collection and use of information in accordance with this policy. We take your privacy seriously and are dedicated to maintaining the highest standards of data protection.
          </p>
          <p>
            MetaFit provides innovative medical weight loss services, including prescription GLP-1 treatments, through a network of licensed healthcare providers and medical professionals. Our approach combines evidence-based medicine with personalized care to help you achieve sustainable weight loss results. We comply with all applicable privacy laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA) for protected health information, as well as other relevant data protection laws such as GDPR for users in the European Union.
          </p>
          <p>
            This consumer health data privacy policy applies to all users of our website, mobile applications, and services, whether you are a patient seeking treatment, a healthcare provider, or simply browsing our educational content. We encourage you to read this policy carefully to understand our practices and your rights regarding your personal information.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Information We Collect</h2>
          <p>
            We collect information about you in various ways to provide our medical weight loss services effectively and personalize your experience. The types of information we collect include personal details, health-related data, and technical information from your interactions with our platform. We are committed to collecting only the information necessary to deliver high-quality healthcare services and comply with legal requirements.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-black mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you provide directly to us when you register for our services, complete health assessments, or communicate with our healthcare providers. This information helps us create your medical profile and provide personalized treatment plans. Examples include:
            </p>
            <ul className="list-disc pl-5 space-y-2 ml-4">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Date of birth, gender, and other demographic information</li>
              <li>Medical history, health conditions, and treatment preferences</li>
              <li>Insurance information for billing purposes</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
            <p className="mt-4">
              This personal information forms the foundation of your patient record and enables us to communicate important health information, appointment reminders, and treatment updates.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-black mb-3">Health Information</h3>
            <p className="mb-4">
              As a healthcare provider, we collect protected health information (PHI) to deliver comprehensive medical weight loss services. This sensitive information is handled with the utmost care and in strict compliance with HIPAA regulations. Our licensed healthcare providers use this information to make informed treatment decisions and monitor your progress. We collect:
            </p>
            <ul className="list-disc pl-5 space-y-2 ml-4">
              <li>Medical records, lab results, and prescription history</li>
              <li>Weight, BMI, and other health metrics tracked over time</li>
              <li>Information from consultations with our healthcare providers</li>
              <li>Dietary preferences, exercise habits, and lifestyle information</li>
              <li>Allergies, medications, and current health conditions</li>
            </ul>
            <p className="mt-4">
              Your health information is crucial for providing safe and effective GLP-1 treatments and ensuring optimal weight loss outcomes.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-black mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website or use our mobile applications, we may automatically collect certain technical information to improve our services and ensure a smooth user experience. This information is collected through standard web technologies and helps us understand how our platform is being used. We collect:
            </p>
            <ul className="list-disc pl-5 space-y-2 ml-4">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent on pages, and referral sources</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Device identifiers and mobile app usage data</li>
              <li>Geographic location data (with your permission)</li>
            </ul>
            <p className="mt-4">
              This technical information allows us to optimize our website performance, enhance security measures, and provide a better user experience across different devices and platforms.
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li>To provide medical services and GLP-1 treatments</li>
            <li>To communicate with you about your care and appointments</li>
            <li>To process payments and insurance claims</li>
            <li>To improve our services and website functionality</li>
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To conduct research and quality improvement activities</li>
          </ul>
        </section>

        {/* How We Share Your Information */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">How We Share Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">With Healthcare Providers:</strong> To coordinate your care and provide treatment</li>
            <li><strong className="text-black">With Service Providers:</strong> Such as pharmacies, labs, and payment processors</li>
            <li><strong className="text-black">For Legal Reasons:</strong> To comply with laws, regulations, or legal processes</li>
            <li><strong className="text-black">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong className="text-black">With Your Consent:</strong> When you explicitly agree to sharing</li>
          </ul>
          <p>We do not sell your personal information to third parties for marketing purposes.</p>
        </section>

        {/* Your Rights and Choices */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Your Rights and Choices</h2>
          <p>
            As a patient using MetaFit's services, you have several important rights regarding your personal and health information. We are committed to empowering you with control over your data and ensuring transparency in how we handle your information. These rights are designed to give you access to your information and the ability to make choices about how it's used.
          </p>
          <p>You have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Access:</strong> Request a copy of your personal and health information that we maintain about you</li>
            <li><strong className="text-black">Correction:</strong> Request correction of inaccurate or incomplete information in your records</li>
            <li><strong className="text-black">Deletion:</strong> Request deletion of your personal information, subject to legal and regulatory requirements</li>
            <li><strong className="text-black">Portability:</strong> Request transfer of your data in a portable, machine-readable format</li>
            <li><strong className="text-black">Opt-out:</strong> Opt-out of marketing communications and certain data processing activities</li>
            <li><strong className="text-black">Restriction:</strong> Request restriction of processing in certain circumstances</li>
            <li><strong className="text-black">Objection:</strong> Object to processing based on legitimate interests or for direct marketing</li>
          </ul>
          <p>
            To exercise these rights, contact us using the information provided below. We will respond to your requests within the timeframes required by applicable law. Please note that some rights may be limited by legal or regulatory requirements, particularly for health information covered by HIPAA.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Data Security</h2>
          <p>
            The security of your personal and health information is our top priority at MetaFit. We employ comprehensive technical, administrative, and physical safeguards to protect your data against unauthorized access, alteration, disclosure, or destruction. Our security measures are designed to meet or exceed industry standards and regulatory requirements for healthcare data protection.
          </p>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Encryption:</strong> All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols</li>
            <li><strong className="text-black">Access Controls:</strong> Strict role-based access controls ensure only authorized personnel can access your information</li>
            <li><strong className="text-black">Regular Security Assessments:</strong> We conduct regular security audits, vulnerability scans, and penetration testing</li>
            <li><strong className="text-black">Employee Training:</strong> All staff receive regular training on data privacy and security best practices</li>
            <li><strong className="text-black">Incident Response:</strong> We have established incident response procedures to address any potential security breaches</li>
            <li><strong className="text-black">Physical Security:</strong> Our data centers and facilities are secured with multiple layers of physical protection</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information using the best available technology and practices, we cannot guarantee absolute security. In the unlikely event of a security breach, we will notify affected individuals and regulatory authorities as required by law.
          </p>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">International Data Transfers</h2>
          <p>
            MetaFit operates globally, and as part of our international operations, your personal information may be transferred to and processed in countries other than your country of residence. These transfers are necessary to provide our services, maintain our global infrastructure, and ensure seamless healthcare delivery across borders.
          </p>
          <p>
            We are committed to protecting your data during international transfers and comply with all applicable data protection laws, including GDPR for European users and other relevant regulations. We implement appropriate safeguards to ensure that your information receives an adequate level of protection regardless of where it is processed.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Adequacy Decisions:</strong> We transfer data to countries recognized by relevant authorities as providing adequate protection</li>
            <li><strong className="text-black">Standard Contractual Clauses:</strong> We use approved contractual clauses to ensure data protection in transfers</li>
            <li><strong className="text-black">Binding Corporate Rules:</strong> For intra-group transfers, we follow our binding corporate rules</li>
            <li><strong className="text-black">Certification Schemes:</strong> We participate in recognized certification schemes that validate our data protection practices</li>
            <li><strong className="text-black">Encryption and Security:</strong> All transfers are encrypted and secured using industry-standard protocols</li>
          </ul>
          <p>
            If you are located in the European Economic Area (EEA) or other regions with strict data transfer requirements, you can request more information about the specific safeguards we use for your data transfers.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Children's Privacy</h2>
          <p>
            MetaFit's services are designed for adults seeking medical weight loss treatment and are not intended for use by individuals under 18 years of age. We do not knowingly collect, use, or disclose personal information from children under 18 without appropriate parental consent and involvement.
          </p>
          <p>
            Our platform includes age verification measures during the registration process to ensure compliance with this policy. If we become aware that we have collected personal information from a child under 18 without proper consent, we will take immediate steps to delete such information from our systems.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Age Verification:</strong> We require users to confirm they are 18 or older during account creation</li>
            <li><strong className="text-black">Parental Consent:</strong> For users under 18, we require verifiable parental or guardian consent</li>
            <li><strong className="text-black">Content Restrictions:</strong> Our medical content and services are restricted to adult users only</li>
            <li><strong className="text-black">Reporting Mechanism:</strong> We encourage parents to contact us if they suspect unauthorized use by minors</li>
            <li><strong className="text-black">Data Deletion:</strong> Upon discovery of unauthorized collection, we immediately delete the information</li>
          </ul>
          <p>
            We are committed to protecting children's privacy and complying with all applicable laws regarding children's online privacy, including COPPA in the United States and similar regulations in other jurisdictions.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Changes to This Consumer Health Data Privacy Policy</h2>
          <p>
            MetaFit reserves the right to update, modify, or revise this Consumer Health Data Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other factors. We understand that privacy policies should be transparent and accessible, so we are committed to keeping you informed about any material changes.
          </p>
          <p>
            When we make changes to this Consumer Health Data Privacy Policy, we will update the "Last updated" date at the top of this page and provide a summary of the key changes. For significant changes that may affect your rights or how we process your data, we will provide additional notice through email, in-app notifications, or prominent notices on our website.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Regular Reviews:</strong> We review our Consumer Health Data Privacy Policy periodically to ensure it remains current and compliant</li>
            <li><strong className="text-black">Material Changes:</strong> Significant updates will be communicated directly to affected users</li>
            <li><strong className="text-black">Version History:</strong> Previous versions of the policy are archived for reference</li>
            <li><strong className="text-black">User Notification:</strong> We use multiple channels to notify users of important changes</li>
            <li><strong className="text-black">Grace Period:</strong> Users are given reasonable time to review changes before they take effect</li>
          </ul>
          <p>
            Your continued use of MetaFit's services after any changes to this Consumer Health Data Privacy Policy constitutes acceptance of the updated policy. If you do not agree with the changes, you may discontinue use of our services and request deletion of your account and personal information.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-black pb-2">Contact Us</h2>
          <p>
            We value your privacy and are committed to addressing your questions, concerns, and requests regarding our consumer health data privacy practices. Our dedicated privacy team is available to assist you with any privacy-related matters, including exercising your rights under this policy.
          </p>
          <p>
            Please don't hesitate to contact us if you have questions about how we collect, use, or protect your personal information, or if you need assistance with any of your privacy rights. We strive to respond to all inquiries within 30 days and will work diligently to resolve any concerns you may have.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Email:</strong> care@joinmeta.fit - For general privacy inquiries and requests</li>
            <li><strong className="text-black">Data Protection Officer:</strong> For GDPR and privacy compliance matters</li>
            <li><strong className="text-black">Emergency Contact:</strong> For urgent privacy or security concerns</li>
          </ul>
          <p>
            When contacting us, please provide sufficient details to help us assist you effectively. For security reasons, we may need to verify your identity before processing certain requests. We maintain records of all communications for quality assurance and compliance purposes.
          </p>
          <p>
            If you are not satisfied with our response to your privacy inquiry, you have the right to escalate your concern to the relevant data protection authority in your jurisdiction.
          </p>
        </section>

      </div>
      <Footer />
    </main>
  );
}