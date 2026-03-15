import Link from "next/link";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface FAQCategory {
  id: string;
  label: string;
  faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "about",
    label: "About MetaFit",
    faqs: [
      {
        question: "What is MetaFit?",
        answer: (
          <>
            MetaFit is a direct-to-consumer telehealth platform specializing in
            GLP-1-powered weight loss. We handle everything from your initial
            health review to personalized treatment plans and ongoing AI-powered
            coaching — all from the comfort of your home.{" "}
            <Link
              href="http://joinmeta.fit/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Learn more about MetaFit
            </Link>
            .
          </>
        ),
      },
      {
        question: "Who is MetaFit for?",
        answer:
          "MetaFit is for adults who want to lose weight using GLP-1 medications combined with personalized nutrition, exercise guidance, and AI coaching. It's ideal for people who prefer a clinically supported, convenient approach to weight loss from home.",
      },
      {
        question: "Is my information safe?",
        answer: (
          <>
            We take your privacy and the security of your information very
            seriously. The MetaFit platform is designed to comply with all
            relevant privacy laws, including HIPAA, and we've implemented strict
            security protocols to protect your data.
            <br />
            <br />
            Please read our{" "}
            <Link
              href="/privacy-policy/"
              className="underline hover:text-gray-600"
            >
              Privacy Policy
            </Link>{" "}
            for full details.
          </>
        ),
      },
      {
        question: "What does a MetaFit membership include?",
        answer:
          "Your MetaFit membership includes an online health consultation, a metabolic lab test at Quest, access to GLP-1 medication (if appropriate), unlimited messaging with your provider, 1:1 coaching, AI-powered nutrition and fitness guidance, and ongoing progress tracking — all in one platform.",
      },
      {
        question: "What is MetaFit's refund policy?",
        answer: (
          <>
            You may cancel your membership at any time before any future billing
            period to avoid additional charges. Previously incurred monthly fees
            are nonrefundable.
            <br />
            <br />
            We're committed to supporting you throughout your journey. Feel free
            to{" "}
            <Link href="/contact-us/" className="underline hover:text-gray-600">
              reach out to us
            </Link>{" "}
            with any questions.
          </>
        ),
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    faqs: [
      {
        question: "What can I expect after I sign up?",
        answer:
          "After completing your online health visit, a MetaFit-affiliated provider will review your answers and determine whether treatment is right for you. They may request a metabolic lab test. If appropriate, your provider will discuss GLP-1 medication options and recommend a personalized treatment plan tailored to your goals.",
      },
      {
        question: "When is a metabolic lab test needed?",
        answer:
          "Depending on your health review, your provider may request a metabolic lab test to assess your hormones and metabolism. Some insurance plans also require one for prior authorization. A test at Quest Diagnostics is included in your membership. You can visit any Quest location in person, or purchase an at-home blood collection kit through MetaFit for an additional fee. If Quest is unavailable in your state, we'll send you a collection kit at no extra charge.",
      },
      {
        question: "How do I schedule a video call with my provider?",
        answer:
          "Simply send a message in your provider chat requesting a video call. Your provider will respond with a scheduling link for a video visit at a time that works for you.",
      },
      {
        question: "How can I get a weight loss medication prescription online?",
        answer:
          "After completing your health consultation on MetaFit, an affiliated healthcare provider will review your case. If medically appropriate, they can prescribe GLP-1 medications such as Wegovy, Ozempic, or Zepbound. Medication is shipped directly to your door.",
      },
    ],
  },
  {
    id: "medications",
    label: "Medications & Treatment",
    faqs: [
      {
        question: "What is a medical weight loss program?",
        answer: (
          <>
            A medical weight loss program takes a science-backed approach to
            losing weight under the supervision of a licensed healthcare
            provider. MetaFit's program combines GLP-1 medications like{" "}
            <Link
              href="/weight-loss/ozempic/"
              className="underline hover:text-gray-600"
            >
              Ozempic
            </Link>{" "}
            or{" "}
            <Link
              href="/weight-loss/wegovy/"
              className="underline hover:text-gray-600"
            >
              Wegovy
            </Link>{" "}
            with 1:1 coaching, AI-powered nutrition and fitness plans, and
            ongoing provider support — all designed to help you lose weight and
            keep it off long-term.
          </>
        ),
      },
      {
        question: "What type of weight loss medications does MetaFit offer?",
        answer:
          "MetaFit-affiliated providers can prescribe several GLP-1 medications, including semaglutide (Ozempic, Wegovy) and tirzepatide (Zepbound), if medically appropriate. Some GLP-1s like Ozempic are FDA-approved for type 2 diabetes and may be prescribed off-label for weight loss.",
      },
      {
        question: "How do weight loss injections work?",
        answer:
          "GLP-1 medications mimic the natural GLP-1 hormone your body produces to regulate blood sugar and appetite. They communicate directly with the brain's satiety center to help you feel full faster and longer, while also slowing gastric emptying — meaning food leaves your stomach more slowly, reducing overall caloric intake.",
      },
      {
        question: "How fast can you lose weight through medical weight loss?",
        answer: (
          <>
            Results vary, but GLP-1 medications are clinically proven to be
            highly effective. In trials, patients using Wegovy alongside a
            healthy diet and exercise lost an average of over 4% of body weight
            in just eight weeks. Those on the highest dose lost an average of{" "}
            <Link
              href="/weight-loss/how-much-weight-can-you-lose-on-wegovy/"
              className="underline hover:text-gray-600"
            >
              10% of their body weight
            </Link>{" "}
            within 20 weeks.
          </>
        ),
      },
      {
        question: "What are the side effects of GLP-1 medications?",
        answer: (
          <>
            MetaFit-affiliated providers may prescribe semaglutide (Ozempic,
            Wegovy) or tirzepatide (Zepbound). Most common side effects resolve
            within the first few weeks of treatment.
            <br />
            <br />
            <strong>Common side effects:</strong> Nausea, vomiting, upset
            stomach, stomach pain, constipation, diarrhea, heartburn, acid
            reflux, belching, gas, dizziness, headaches, and fatigue.
            <br />
            <br />
            <strong>Serious side effects:</strong> Thyroid cancer (BOXED
            WARNING), pancreatitis, gallbladder disease, hypoglycemia, kidney
            disease, severe allergic reaction, vision changes, rapid heartbeat,
            suicidal ideation, and pulmonary aspiration under anesthesia.
            <br />
            <br />
            Please review the full Prescribing Information for{" "}
            <a
              href="https://www.novo-pi.com/wegovy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Wegovy
            </a>
            ,{" "}
            <a
              href="https://www.novo-pi.com/ozempic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Ozempic
            </a>
            , and{" "}
            <a
              href="https://uspl.lilly.com/zepbound/zepbound.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Zepbound
            </a>
            .
          </>
        ),
      },
      {
        question: "Will I regain weight after stopping GLP-1 medication?",
        answer:
          "Clinical studies show most people regain a significant portion of weight after stopping GLP-1 medication without lifestyle support. That's exactly why MetaFit pairs medication with AI-powered coaching, nutrition planning, and exercise guidance — to help you build sustainable habits so your results last beyond medication.",
      },
    ],
  },
  {
    id: "program",
    label: "The MetaFit Program",
    faqs: [
      {
        question: "What makes MetaFit different from other telehealth platforms?",
        answer:
          "Most telehealth platforms stop at prescribing the medication. MetaFit goes further by combining GLP-1 treatment with a full AI-powered support system — including personalized nutrition plans, resistance training guidance, step tracking, progress monitoring, and direct provider messaging. We treat the whole person, not just the prescription.",
      },
      {
        question: "How does the AI Health Coach work?",
        answer:
          "Your MetaFit AI Health Coach is available 24/7 to answer health and lifestyle questions, track your progress, and deliver personalized insights. It adapts to your data over time — learning your patterns around food, activity, and weight — and proactively suggests adjustments to keep you on track.",
      },
      {
        question: "How does MetaFit help preserve muscle during weight loss?",
        answer:
          "Without resistance training and adequate protein, up to 40% of weight lost on GLP-1 medications can come from muscle mass. MetaFit addresses this directly with strength-focused workout plans, protein optimization recommendations, and real-time coaching — all tailored to your fitness level and goals.",
      },
      {
        question: "Can I use MetaFit if I'm not currently on GLP-1 medication?",
        answer:
          "Yes. While MetaFit is optimized for GLP-1 users, the platform's nutrition tracking, AI coaching, fitness planning, and provider support are valuable tools for anyone pursuing medically supervised weight loss — with or without medication.",
      },
    ],
  },
];
