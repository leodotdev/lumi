import { IconBrandLinkedin } from "@tabler/icons-react";

export default function AboutUsSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 bg-secondary/40">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          About us
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your pet&apos;s health is our top priority
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team members */}
        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Maurice Ferré
          </h3>
          <p className="text-muted-foreground">CEO & Co-Founder</p>
          <a
            href="https://www.linkedin.com/in/maurice-ferre/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Dr. Amit Banerjee
          </h3>
          <p className="text-muted-foreground">CTO & Co-Founder</p>
          <a
            href="https://www.linkedin.com/in/amit-banerjee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">Anil Sethi</h3>
          <p className="text-muted-foreground">
            Co-Founder & Chairman of Board
          </p>
          <a
            href="https://www.linkedin.com/in/anil-sethi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Dr. Jay Pasricha
          </h3>
          <p className="text-muted-foreground">Advisor</p>
          <a
            href="https://www.linkedin.com/in/jay-pasricha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Erin DeRuggiero
          </h3>
          <p className="text-muted-foreground">Advisor</p>
          <a
            href="https://www.linkedin.com/in/erin-deruggiero/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Mark Donavon
          </h3>
          <p className="text-muted-foreground">Advisor</p>
          <a
            href="https://www.linkedin.com/in/mark-donavon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">Tom Forte</h3>
          <p className="text-muted-foreground">Advisor</p>
          <a
            href="https://www.linkedin.com/in/tom-forte/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Dr. Uri Ladabaum
          </h3>
          <p className="text-muted-foreground">Advisor</p>
          <a
            href="https://www.linkedin.com/in/uri-ladabaum/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
          <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4">
            {/* Profile image would go here */}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Dr. Caroline Popper
          </h3>
          <p className="text-muted-foreground">Advisor</p>
          <a
            href="https://www.linkedin.com/in/caroline-popper/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2"
          >
            <IconBrandLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
