import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="text-center py-16 bg-gray-900 w-full">
      {/* Adding a serif font and subtle shadow for a classic feel */}
      <motion.h1
        className="text-6xl font-serif font-bold text-white mb-4 tracking-wider shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Kishan Audiya
      </motion.h1>

      {/* Subtitle with a softer font and color */}
      <motion.p
        className="text-xl font-light text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        MERN Stack Developer
      </motion.p>

      {/* Tagline with a refined font size and color */}
      <motion.p
        className="text-base text-gray-400 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Building Scalable Web Solutions with Modern Technologies
      </motion.p>

      {/* Elegant subtle divider */}
      <motion.div
        className="w-12 h-0.5 bg-gray-500 mt-8 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 1, delay: 0.6 }}
      ></motion.div>
    </header>
  );
};

export default Header;
