"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What sort of platforms do you integrate with?",
      answer:
        "SuperBall integrates seamlessly with all major voice AI platforms including Vapi, Bland AI, Retell, and custom-built solutions. We also support major LLM providers like OpenAI, Anthropic, and open-source models. Our API-first approach means you can connect SuperBall to virtually any voice infrastructure.",
    },
    {
      question: "What's coming next for reliability and monitoring?",
      answer:
        "We're constantly shipping new features based on customer feedback. Upcoming releases include advanced anomaly detection using ML, predictive failure analysis, multi-language support expansion, and deeper integrations with popular development tools. Check our roadmap for the latest updates.",
    },
    {
      question: "Is SuperBall compliant for regulated/enterprise use?",
      answer:
        "Yes. SuperBall is SOC 2 Type II certified, HIPAA compliant, and GDPR ready. We offer enterprise-grade security features including SSO, role-based access control, audit logs, and data residency options. Our infrastructure is built on AWS with end-to-end encryption.",
    },
    {
      question: "How's pricing structured for large-scale deployments?",
      answer:
        "Our pricing scales with your usage. We offer flexible plans based on call volume, starting with a generous free tier for development. Enterprise plans include custom SLAs, dedicated support, and volume discounts. Contact our sales team for pricing tailored to your specific needs.",
    },
  ];

  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-transparent, " />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            {/* <Phone className="w-4 h-4" /> */}
            <span
              className="font-medium uppercase tracking-wider"
              style={{
                fontSize: ".85rem",
                color: "#41E5E4",
                letterSpacing: ".1em",
              }}
            >
              Quick Questions
            </span>
          </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Frequently asked</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#29293a] border border-purple-500/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-purple-400 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
