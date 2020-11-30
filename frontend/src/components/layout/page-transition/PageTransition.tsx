import { motion } from 'framer-motion';
import React from 'react';

type PageTransitionProps = {
  children: JSX.Element,
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const contentTransition = {
  type: 'tween',
  ease: 'anticipate',
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div className="content"
      variants={contentVariants}
      initial='hidden'
      exit='hidden'
      animate='visible'
      transition={contentTransition}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
