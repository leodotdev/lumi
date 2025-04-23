import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  "No duplication with safe and fair resale",
  "Paperless for the planet",
  "Transparent transaction and fees",
  "POAP (proof of attendance protocol)",
];

export default function BenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-10 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000"
              alt="Happy concert attendees"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <div className="flex-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Event goers finally enjoy an&nbsp;
              <span className="text-purple-600 dark:text-purple-400">
                epic experience
              </span>
              &nbsp;from purchase through performance
            </motion.h2>

            <motion.ul
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-lg">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
