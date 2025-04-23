import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          We are resetting the playing field
        </motion.h2>

        <motion.p
          className="text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          realticket shifts the power to the people, where it belongs
        </motion.p>

        <motion.div
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Event organizers enjoy advanced control with the realticket Total
              Event Control Platform
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              "Control over fee-gouging",
              "Personalized experience for event goers",
              "Event mapping and navigation capabilities",
              "RealBackup eliminates the fear of lost tickets",
              "Real-time metrics with detailed customer analytics",
              "Control over fee-gouging",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/10 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              >
                <p className="font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
