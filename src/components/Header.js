import { motion } from 'framer-motion';
import me from "./me2.jpg";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-900 w-full">
      
      {/* Profile Picture on the Left */}
      <motion.div
        className="md:mr-10 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={me}
          alt="Kishan Audiya"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-gray-700"
        />
      </motion.div>

      {/* Text Content on the Right */}
      <div className="text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wider shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kishan Audiya
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl font-light text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          MERN Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg text-gray-400 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Building Scalable Web Solutions with Modern Technologies
        </motion.p>

        {/* Elegant subtle divider */}
        <motion.div
          className="w-12 h-0.5 bg-purple-400 mt-8 mx-auto md:mx-0"
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ duration: 1, delay: 0.6 }}
        ></motion.div>
      </div>
    </header>
  );
};

export default Header;
