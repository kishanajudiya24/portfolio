import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'HTML5', icon: '🔶' },
  { name: 'CSS3', icon: '🔷' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express.js', icon: '🚀' },  // Added Express.js
  { name: 'Bootstrap', icon: '🅱️' },  // Added Bootstrap
];

const Skills = () => {
  const bounceIn = {
    hidden: { opacity: 0, scale: 0.3, y: 100 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <section className="py-10 w-full" style={{ backgroundColor: '#121212' }}>
      <h2 className="text-3xl font-bold text-purple-500 mb-10 text-center">My Skills</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center text-white"
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-2xl" 
            custom={index}
            variants={bounceIn}
            whileHover={{
              scale: 1.1,
              rotateX: 15,
              rotateY: 15,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block text-5xl mb-3"
              initial={{ rotateZ: 0 }}
              animate={{ rotateZ: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'linear',
              }}
            >
              {skill.icon}
            </motion.span>
            <span className="block">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
