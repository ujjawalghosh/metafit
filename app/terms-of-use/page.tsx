import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MetaFit',
  description: 'Terms and Conditions of Use for MetaFit services and platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms and Conditions of Use</h1>
          <p className="text-gray-500 text-sm font-medium">
            <span className="font-bold text-gray-900">Date of Last Revision:</span> December 10, 2025
          </p>
        </div>

        {/* Important Notice Block */}
        <div className="bg-gray-50 border-l-4 border-black p-6 mb-10 text-sm md:text-base leading-relaxed text-gray-700">
          <p className="mb-4">
            <strong className="text-black">IMPORTANT:</strong> PLEASE READ THESE TERMS CAREFULLY AS THEY GOVERN YOUR LEGAL RIGHTS AND OBLIGATIONS WHEN USING THE METAFIT WEBSITE. BY ACCESSING OR USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE REVIEWED, UNDERSTOOD, AND AGREED TO COMPLY WITH THESE TERMS. THESE PROVISIONS ARE DESIGNED TO PROTECT BOTH YOU AS A USER AND US AS THE SERVICE PROVIDER, ENSURING CLARITY IN HOW DISPUTES, RESPONSIBILITIES, AND LIABILITIES ARE MANAGED. YOUR CONTINUED USE OF THE WEBSITE CONSTITUTES ACCEPTANCE OF THESE TERMS, AND IF YOU DO NOT AGREE, YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="mb-4">
            SPECIFICALLY, PLEASE REFER TO THE DISPUTE RESOLUTION SECTION BELOW, WHICH OUTLINES THE PROCESS FOR RESOLVING DISAGREEMENTS. CERTAIN DISPUTES MUST BE SETTLED THROUGH BINDING ARBITRATION OR MEDIATION IN ACCORDANCE WITH THE LAWS OF INDIA.
          </p>
          <p>
            BY USING THIS WEBSITE, YOU FURTHER AGREE THAT ANY DISPUTE WILL BE RESOLVED ON AN INDIVIDUAL BASIS AND NOT THROUGH ANY COLLECTIVE OR REPRESENTATIVE ACTION.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
          <p>
            Metafit Wellness Private Limited and its affiliates (collectively, “Metafit,” “we,” “us,” or “our”) own and operate the website located at www.metafit.com and any associated mobile applications (collectively, the “Platform”). We refer to the Platform and the services provided by Metafit together herein as the “Services.” In these Terms of Use, the terms “you” and “your” refer to the individual accessing or using the Services.
          </p>
          <p>
            These Terms and Conditions of Use (“Terms of Use”) describe your rights and responsibilities with regard to the Services. Your access to and use of the Services is subject to these Terms of Use, our Privacy Policy, as well as all applicable laws and regulations.
          </p>
          <p className="font-semibold text-black">
            PLEASE READ THESE TERMS OF USE CAREFULLY BECAUSE THEY SET FORTH THE IMPORTANT TERMS YOU WILL NEED TO KNOW ABOUT THE SERVICES.
          </p>
          <p>
            YOU UNDERSTAND THAT BY ACCESSING OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE LEGALLY BOUND BY AND COMPLY WITH THESE TERMS OF USE. IF YOU DO NOT OR CANNOT AGREE WITH ANY PART OF THESE TERMS OF USE, YOU MAY NOT USE THE SERVICES.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
          <p className="font-bold text-lg mb-4">TERMS OF USE CONTAIN THE FOLLOWING SECTIONS</p>
          <ol className="list-decimal list-inside space-y-2 text-blue-600 font-medium">
            <li><Link href="#service" className="hover:underline">Services Overview, Availability, and Eligibility</Link></li>
            <li><Link href="#fitness" className="hover:underline">Fitness Content and Wellness Guidance</Link></li>
            <li><Link href="#Registration" className="hover:underline">Registration and Account Creation</Link></li>
            <li><Link href="#responsibilities" className="hover:underline">User Responsibilities</Link></li>
            <li><Link href="#privacy" className="hover:underline">Privacy</Link></li>
            <li><Link href="#Ownership" className="hover:underline">Ownership and License to Use the Services</Link></li>
            <li><Link href="#license" className="hover:underline">User Content and Metafit’s License to Use Such Content</Link></li>
            <li><Link href="#copyright" className="hover:underline">Copyright Notices</Link></li>
            <li><Link href="#restrictions" className="hover:underline">Restrictions on Use</Link></li>
            <li><Link href="#warranties" className="hover:underline">Disclaimer of Warranties</Link></li>
            <li><Link href="#liability" className="hover:underline">Limitation of Liability</Link></li>
            <li><Link href="#indemnification" className="hover:underline">Indemnification</Link></li>
            <li><Link href="#third-party" className="hover:underline">Third‑Party Links and Features on the Services</Link></li>
            <li><Link href="#changes" className="hover:underline">Changes to the Terms of Use and the Services</Link></li>
            <li><Link href="#payments" className="hover:underline">Payments (if applicable)</Link></li>
            <li><Link href="#termination" className="hover:underline">Termination</Link></li>
            <li><Link href="#governing-law" className="hover:underline">Governing Law; Severability</Link></li>
            <li><Link href="#dispute-resolution" className="hover:underline">Dispute Resolution: Arbitration or Mediation Clause</Link></li>
            <li><Link href="#communications" className="hover:underline">Communications by Text Message and Email</Link></li>
            <li><Link href="#miscellaneous" className="hover:underline">Miscellaneous Terms</Link></li>
            <li><Link href="#contact-us" className="hover:underline">Contact Us</Link></li>
          </ol>
        </section>

        {/* Availability Section */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-black mb-4">Availability</h2>
          <p>
            Our Services are intended to be accessed by individuals located in India. While we strive to make the Website and its content available broadly, certain features or services may be restricted to specific regions or subject to local laws and regulations. Accessing the Services from outside India is done at your own risk, and you are responsible for compliance with applicable local laws.
          </p>
        </section>

        {/* 1. Services Overview */}
        <section id="service" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">1. Services Overview, Availability, and Eligibility</h3>
          <p>
            In addition to the above, Metafit aims to create a safe and supportive digital environment where individuals can access fitness knowledge conveniently from their devices. The Services are designed to empower users to take control of their health and wellness journey by offering structured workout plans, nutritional guidance, and motivational resources.
          </p>
          <p>
            <strong className="text-black">Overview of the Services:</strong> The Services offered by Metafit may include: (i) providing individuals with information on fitness, exercise routines, and general wellness; (ii) offering access to technology‑oriented tools for tracking workouts, nutrition, and progress; (iii) development and presentation of fitness content such as articles, videos, and training guides; (iv) administrative support in connection with scheduling, subscription management, and payment for premium fitness services; and (v) digital communication features that allow users to engage with the Platform for guidance, updates, and personalized fitness recommendations.
          </p>
          <p>
            <strong className="text-black">Availability:</strong> Our Services are primarily intended for individuals located in India. While we strive to make the Platform accessible globally, certain features or paid services may be restricted to specific regions or subject to local laws and regulations.
          </p>
          <p>
            <strong className="text-black">Eligibility:</strong> Our Services are intended for use by individuals who are at least eighteen (18) years of age. If you are under eighteen, you may only use the Services with the express consent and supervision of a parent or legal guardian.
          </p>
        </section>

        {/* 2. Fitness Content */}
        <section id="fitness" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">2. Fitness Content and Wellness Guidance</h3>
          <p>
            Metafit provides fitness programs, workout routines, nutritional tips, and general wellness guidance through its Platform. The content is designed to encourage healthier lifestyles, improve physical fitness, and motivate individuals to achieve their personal wellness goals.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li>All fitness programs, workout routines, and wellness tips provided by Metafit are intended solely for educational and informational purposes. They are not designed to replace professional medical advice, diagnosis, or treatment.</li>
            <li>Users are strongly encouraged to consult with a qualified healthcare provider before starting any new exercise program, especially if they have pre‑existing medical conditions, injuries, or other health concerns.</li>
            <li>You acknowledge and agree that you are solely responsible for your own health, safety, and progress when following the fitness content provided on the Platform.</li>
            <li>While Metafit strives to provide accurate and effective fitness guidance, results may vary depending on individual effort, consistency, and personal health conditions.</li>
            <li>By using the Services, you accept that Metafit shall not be liable for any injuries, health issues, or damages that may arise from your reliance on or misuse of the fitness content.</li>
          </ul>
        </section>

        {/* 3. Registration */}
        <section id="Registration" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">3. Registration and Account Creation</h3>
          <p>
            To access certain features of the Metafit Platform, you may be required to create an account. By registering, you agree to provide accurate, complete, and up‑to‑date information as requested during the registration process.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Accurate Information:</strong> You must provide correct and complete details during registration.</li>
            <li><strong className="text-black">Confidentiality:</strong> You are responsible for keeping your login credentials secure.</li>
            <li><strong className="text-black">Immediate Reporting:</strong> Any unauthorized use of your account must be reported promptly.</li>
          </ul>
          <p>Metafit reserves the right to suspend or terminate accounts that contain false, misleading, or incomplete information, or accounts that are used in violation of these Terms of Use.</p>
        </section>

        {/* 4. User Responsibilities */}
        <section id="responsibilities" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">4. User Responsibilities</h3>
          <p>
            By accessing and using the Metafit Platform, you agree to act responsibly and lawfully. You acknowledge that the Services are intended to provide fitness and wellness guidance, and you must use them in a manner consistent with these Terms of Use and applicable laws.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Lawful Use:</strong> You must not use the Services for any unlawful, fraudulent, or harmful purpose.</li>
            <li><strong className="text-black">Respect for Content:</strong> You may not copy, distribute, or exploit Metafit’s content for commercial gain without prior written consent.</li>
            <li><strong className="text-black">No Misuse of Platform:</strong> Activities such as hacking, spamming, introducing malware, or attempting unauthorized access are strictly prohibited.</li>
            <li><strong className="text-black">Health and Safety:</strong> You are solely responsible for ensuring that your use of fitness content is safe and appropriate for your personal health condition.</li>
            <li><strong className="text-black">Respect for Others:</strong> You must not harass, abuse, or harm other users through comments, messages, or any other interaction on the Platform.</li>
          </ul>
        </section>

        {/* 5. Privacy */}
        <section id="privacy" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">5. Privacy</h3>
          <p>
            Metafit is committed to protecting the privacy and personal information of its users. Our Privacy Policy explains in detail how we collect, use, store, and safeguard your data when you access or use the Services.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Consent:</strong> By using the Services, you agree to the collection and use of your data as outlined in the Privacy Policy.</li>
            <li><strong className="text-black">Data Collection:</strong> Information such as registration details, usage activity, and communication preferences may be collected.</li>
            <li><strong className="text-black">No Sale of Data:</strong> Metafit does not sell or rent personal information to third parties.</li>
            <li><strong className="text-black">User Rights:</strong> You may request access, correction, or deletion of your personal information in accordance with applicable laws.</li>
          </ul>
        </section>

        {/* 6. Ownership */}
        <section id="Ownership" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">6. Ownership and License to Use the Services</h3>
          <p>
            All content made available on the Metafit Platform, including but not limited to text, graphics, logos, images, videos, workout routines, nutritional guides, and software, is the exclusive property of Metafit Wellness Private Limited or its licensors. Such content is protected under applicable copyright, trademark, and intellectual property laws of India.
          </p>
          <p>
            Metafit grants users a limited, non‑exclusive, non‑transferable, and revocable license to access and use the Services solely for personal, non‑commercial purposes.
          </p>
        </section>

        {/* 7. User Content */}
        <section id="license" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">7. User Content and Metafit’s License to Use Such Content</h3>
          <p>
            Metafit may allow users to submit, post, or share content on the Platform, including but not limited to comments, reviews, feedback, suggestions, workout progress updates, or other materials (“User Content”).
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Ownership:</strong> You must own or have rights to any content you submit.</li>
            <li><strong className="text-black">License to Metafit:</strong> By submitting content, you grant Metafit broad rights to use and display it.</li>
            <li><strong className="text-black">No Confidentiality:</strong> User Content is not considered confidential, and Metafit may use it freely for service improvement.</li>
            <li><strong className="text-black">Responsibility:</strong> You are solely responsible for the accuracy, legality, and appropriateness of the content you provide.</li>
          </ul>
        </section>

        {/* 8. Copyright */}
        <section id="copyright" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">8. Copyright Notices</h3>
          <p>
            All content available on the Metafit Platform is protected under applicable copyright and intellectual property laws of India. Metafit respects the intellectual property rights of others and expects its users to do the same.
          </p>
          <p>If you believe that any content on the Platform infringes upon your copyright, you may notify us in writing with details including:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li>Identification of the Work</li>
            <li>Location of Infringing Material</li>
            <li>Proof of Ownership</li>
            <li>Contact Information</li>
            <li>Good Faith Statement</li>
          </ul>
        </section>

        {/* 9. Restrictions */}
        <section id="restrictions" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">9. Restrictions on Use</h3>
          <p>You agree to use the Metafit Platform and Services only for lawful and intended purposes.</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Unauthorized Copying:</strong> You may not reproduce, distribute, or exploit Metafit’s content without prior written consent.</li>
            <li><strong className="text-black">Commercial Use:</strong> The Services are for personal use only; commercial use without authorization is prohibited.</li>
            <li><strong className="text-black">Tampering with Platform:</strong> Activities such as hacking, introducing malware, or attempting unauthorized access are strictly forbidden.</li>
            <li><strong className="text-black">Circumvention:</strong> You may not bypass or attempt to bypass any security measures or restrictions implemented by Metafit.</li>
          </ul>
        </section>

        {/* 10. Warranties */}
        <section id="warranties" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">10. Disclaimer of Warranties</h3>
          <p>
            The Services provided by Metafit are offered on an “as‑is” and “as‑available” basis without any warranties of any kind, whether express or implied.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">No Guarantees:</strong> Metafit does not guarantee specific fitness results, outcomes, or achievements.</li>
            <li><strong className="text-black">As‑Is Basis:</strong> Services are provided “as‑is” and “as‑available” without warranties of any kind.</li>
            <li><strong className="text-black">No Liability for Errors:</strong> Metafit is not responsible for inaccuracies, interruptions, or technical issues.</li>
            <li><strong className="text-black">User Risk:</strong> You use the Platform at your own risk, including reliance on fitness content and guidance.</li>
          </ul>
        </section>

        {/* 11. Liability */}
        <section id="liability" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">11. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by applicable law, Metafit and its affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with your use of the Services.
          </p>
          <p>Metafit shall not be responsible for any damages resulting from:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li>Reliance on fitness content or wellness guidance provided on the Platform.</li>
            <li>Unauthorized access to or use of your account or data.</li>
            <li>Interruptions, errors, or technical failures of the Services.</li>
            <li>Viruses, malware, or harmful components transmitted through the Platform.</li>
          </ul>
        </section>

        {/* 12. Indemnification */}
        <section id="indemnification" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">12. Indemnification</h3>
          <p>
            You agree to indemnify, defend, and hold harmless Metafit Wellness Private Limited, its affiliates, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or in connection with your violation of these Terms of Use, your misuse of the Services, or your infringement of any intellectual property or other rights.
          </p>
        </section>

        {/* 13. Third-Party */}
        <section id="third-party" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">13. Third‑Party Links and Features on the Services</h3>
          <p>
            The Metafit Platform may contain links to third‑party websites, applications, or services. You acknowledge that Metafit has no control over third‑party websites or services and is not responsible for their content, privacy practices, or security measures.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">No Endorsement:</strong> Inclusion of third‑party links or features does not mean Metafit endorses them.</li>
            <li><strong className="text-black">User Risk:</strong> Accessing external websites or services is at your own risk.</li>
            <li><strong className="text-black">Independent Control:</strong> Metafit has no control over external websites, apps, or services.</li>
          </ul>
        </section>

        {/* 14. Changes */}
        <section id="changes" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">14. Changes to the Terms of Use and the Services</h3>
          <p>
            Metafit reserves the right to update, modify, or revise these Terms of Use and the Services at any time, at its sole discretion. Any modifications will become effective immediately upon posting on the Platform.
          </p>
        </section>

        {/* 15. Payments */}
        <section id="payments" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">15. Payments (if applicable)</h3>
          <p>
            Certain features or services offered through the Metafit Platform may require payment of fees. Fees paid are non‑refundable unless expressly stated otherwise in our refund policy.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Authorization:</strong> By purchasing, you authorize Metafit to process payments through approved providers.</li>
            <li><strong className="text-black">Pricing Changes:</strong> Metafit may update fees or billing terms at its discretion.</li>
            <li><strong className="text-black">Suspension for Non‑Payment:</strong> Failure to pay may lead to suspension or termination of services.</li>
          </ul>
        </section>

        {/* 16. Termination */}
        <section id="termination" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">16. Termination</h3>
          <p>
            Metafit reserves the right, at its sole discretion, to suspend or terminate your account and access to the Services at any time, with or without notice, if you violate these Terms of Use.
          </p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Right to Terminate:</strong> Metafit may suspend or terminate accounts at its discretion.</li>
            <li><strong className="text-black">Immediate Effect:</strong> All rights under these Terms end upon termination.</li>
            <li><strong className="text-black">User Obligations:</strong> Termination does not cancel prior responsibilities (e.g., payments, indemnification).</li>
          </ul>
        </section>

        {/* 17. Governing Law */}
        <section id="governing-law" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">17. Governing Law; Severability</h3>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the applicable laws of India, without regard to conflict of law principles. If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>
        </section>

        {/* 18. Dispute Resolution */}
        <section id="dispute-resolution" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">18. Dispute Resolution: Arbitration or Mediation Clause</h3>
          <p>
            In the event of any dispute, controversy, or claim arising out of or relating to these Terms of Use or the Services, the parties agree to first attempt to resolve the matter amicably through good‑faith negotiation.
          </p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-black mb-2">Step-1: Good-faith Negotiation</h4>
                <p className="mb-2 text-sm">Before initiating formal proceedings, both parties must attempt to resolve disputes informally through direct communication.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Parties should clearly state the nature of the dispute</li>
                    <li>Both sides must make reasonable efforts to reach a mutually acceptable solution.</li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-black mb-2">Step-2: Mediation</h4>
                <p className="mb-2 text-sm">If negotiation fails, the dispute shall be referred to mediation conducted by a neutral third‑party mediator.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Mediation is non‑binding and focuses on facilitating dialogue</li>
                    <li>Costs of mediation may be shared equally unless otherwise agreed</li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-black mb-2">Step-3: Arbitration</h4>
                <p className="mb-2 text-sm">If mediation does not resolve the dispute, the matter shall be submitted to binding arbitration in accordance with applicable arbitration laws.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Arbitration is formal but less complex than litigation</li>
                    <li>The arbitrator’s decision or award shall be final and binding</li>
                    <li>The award may be enforced in any court of competent jurisdiction</li>
                </ul>
            </div>
          </div>
        </section>

        {/* 19. Communications */}
        <section id="communications" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">19. Communications by Text Message and Email</h3>
          <p>
            By creating an account or using the Services, you consent to receive communications from Metafit through text messages (SMS) and email. These communications may include service notifications, administrative messages, promotional content, and reminders.
          </p>
        </section>

        {/* 20. Miscellaneous */}
        <section id="miscellaneous" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">20. Miscellaneous Terms</h3>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Entire Agreement:</strong> These Terms constitute the entire agreement between you and Metafit.</li>
            <li><strong className="text-black">No Waiver:</strong> Failure by Metafit to enforce any provision shall not be construed as a waiver.</li>
            <li><strong className="text-black">Force Majeure:</strong> Metafit shall not be liable for failure or delay caused by circumstances beyond its control.</li>
            <li><strong className="text-black">Survival:</strong> Provisions regarding indemnification, limitation of liability, and dispute resolution shall survive termination.</li>
          </ul>
        </section>

        {/* 21. Contact Us */}
        <section id="contact-us" className="mb-12 pt-8 border-t border-gray-100 scroll-mt-24 space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold text-black mb-3">21. Contact Us</h3>
          <p>If you have any questions, concerns, or feedback regarding these Terms of Use or the Services, you may reach out to Metafit through the following channels:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong className="text-black">Email Support:</strong> You can send your queries or complaints to our official support email address.</li>
            <li><strong className="text-black">Help Desk / Support Form:</strong> Users may submit requests or issues through the support form available on the Platform.</li>
            <li><strong className="text-black">Customer Care (Phone):</strong> For urgent matters, you may contact our customer care team during business hours.</li>
          </ul>
        </section>

      </div>
      <Footer />
    </main>
  );
}