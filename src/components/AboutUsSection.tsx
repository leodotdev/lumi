"use client";

import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import StaggeredReveal from "./ui/StaggeredReveal";
import TextReveal from "./ui/TextReveal";

interface TeamMember {
  name: string;
  role: string;
  linkedinUrl: string;
  imagePath: string;
}

export default function AboutUsSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Maurice Ferré",
      role: "CEO & Co-Founder",
      linkedinUrl: "https://www.linkedin.com/in/maurice-e-ferre-77965a100/",
      imagePath: "/images/team/maurice-ferre.jpg",
    },
    {
      name: "Dr. Amit Banerjee",
      role: "CTO & Co-Founder",
      linkedinUrl: "https://www.linkedin.com/in/amit-banerjee-b0b3734/",
      imagePath: "/images/team/amit-banerjee.jpg",
    },
    {
      name: "Anil Sethi",
      role: "Co-Founder & Chairman of Board",
      linkedinUrl: "https://www.linkedin.com/in/mranilsethi/",
      imagePath: "/images/team/anil-sethi.jpg",
    },
    {
      name: "Dr. Jay Pasricha",
      role: "Advisor",
      linkedinUrl: "https://www.linkedin.com/in/pankaj-jay-pasricha-34475685/",
      imagePath: "/images/team/jay-pasricha.jpg",
    },
    {
      name: "Erin DeRuggiero",
      role: "Advisor",
      linkedinUrl: "https://www.linkedin.com/in/deruggiero/",
      imagePath: "/images/team/erin-deruggiero.jpg",
    },
    {
      name: "Mark Donavon",
      role: "Advisor",
      linkedinUrl: "https://www.linkedin.com/in/mark-donavon-69bb921b/",
      imagePath: "/images/team/mark-donavon.jpg",
    },
    {
      name: "Tom Forte",
      role: "Advisor",
      linkedinUrl: "https://www.linkedin.com/in/vtforte4/",
      imagePath: "/images/team/tom-forte.jpg",
    },
    {
      name: "Dr. Uri Ladabaum",
      role: "Advisor",
      linkedinUrl: "#",
      imagePath: "/images/team/uri-ladabaum.jpg",
    },
    {
      name: "Dr. Caroline Popper",
      role: "Advisor",
      linkedinUrl: "https://www.linkedin.com/in/carolinepopper/",
      imagePath: "/images/team/caroline-popper.jpg",
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col gap-12 md:gap-16">
        <div className="text-center flex flex-col gap-6">
          <ScrollReveal>
            <TextReveal
              text="About us"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground"
              splitBy="words"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your pet's health is our top priority
            </p>
          </ScrollReveal>
        </div>

        <StaggeredReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerAmount={0.05}
          initialDelay={0.3}
        >
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.05}
              direction="up"
              variant="scale"
              className="bg-card/50 border border-border/50 p-8 rounded-lg text-center flex flex-col gap-4"
            >
              <div className="flex items-center flex-col gap-4">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src={member.imagePath}
                    alt={`Photo of ${member.name}`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/128?text=Profile";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
                {member.linkedinUrl !== "#" && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <IconBrandLinkedinFilled size={32} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </StaggeredReveal>
      </div>
    </div>
  );
}
