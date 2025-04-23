import { motion } from "framer-motion";

export default function BlockchainSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          All born of and backed by blockchain technology
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            {
              icon: "🔒",
              title: "Secure",
              description: "Immutable ledger ensures ticket authenticity",
            },
            {
              icon: "⚡",
              title: "Fast",
              description: "Instant transfers and validations",
            },
            {
              icon: "🌐",
              title: "Transparent",
              description: "Full visibility throughout the ticket lifecycle",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative h-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Animated blockchain representation */}
          <div className="flex space-x-6">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
