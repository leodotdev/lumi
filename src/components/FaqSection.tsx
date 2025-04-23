"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "How does this app work?",
      answer:
        "Our app uses your phone's camera to capture an image of your pet's stool, then analyzes the image for traces of blood. If we detect anything unusual, we help you send the results directly to your veterinarian for review.",
    },
    {
      question: "Is the scanning process safe for my pet?",
      answer:
        "Yes. The app simply uses your phone's camera—no invasive procedures, special equipment, or physical contact with your pet is required. You just need to take a clear photo of the stool sample.",
    },
    {
      question: "What if the app detects blood?",
      answer:
        "You'll receive a notification with a recommendation to consult your vet. The app can also help forward the results to your vet so they can provide the best course of action, whether that's a visit, a telehealth consultation, or additional tests.",
    },
    {
      question: "Is the app accurate?",
      answer:
        "Our technology is designed to detect blood with high accuracy under normal lighting conditions. However, the app is not a substitute for professional veterinary diagnosis. Always consult your vet if you have concerns about your pet's health.",
    },
    {
      question: "Do I need special equipment?",
      answer:
        "All you need is a smartphone or tablet with a functioning camera. The app guides you through the process of taking clear photos to maximize accuracy.",
    },
    {
      question: "Will my vet accept results from this app?",
      answer:
        "Most vets welcome any preliminary data that can help assess your pet's condition. If you have a preferred vet, you can share a report or images directly from the app. You may also want to let your vet know in advance that you'll be using this tool.",
    },
    {
      question: "How do you protect my data and privacy?",
      answer:
        "We use secure protocols to store and transmit your pet's data. Results are shared only with your permission and strictly for the purpose of veterinary care.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "If you have additional inquiries or concerns, please reach out via our in-app support or visit our contact page. We're here to help you keep your pet happy and healthy.",
    },
  ];

  return (
    <section
      id="faq"
      className="container mx-auto px-6 md:px-10 lg:px-16 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Common Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to frequently asked questions about Lumiinus and how it
          can help monitor your pet's health.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-foreground py-6 text-balance">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
