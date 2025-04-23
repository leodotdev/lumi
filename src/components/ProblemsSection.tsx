import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    title: "Fee Gouging",
    description:
      "90% of tickets are marked up before they ever reach event goers.",
  },
  {
    title: "Snubbed artists",
    description:
      "Ticket prices are marked up 150% on average. 0% goes to artists and venues.",
  },
  {
    title: "Transfer risk",
    description:
      "There's no sure way to identify duplicates and fraudulent tickets.",
  },
  {
    title: "Weak event navigation",
    description: "Fan experiences often start confusingly and end abruptly.",
  },
];

export default function ProblemsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-10 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          We are eliminating the issues of traditional ticketing
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
