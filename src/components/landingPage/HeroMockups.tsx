import React from 'react';
import heroBrowserMockup from '../../../public/229shots_so.png';
import heroMobileMockup from '../../../public/437shots_so.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BorderBeam } from '../ui/border-beam';

const HeroMockups = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-[90%] md:w-[80%] aspect-video rounded-xl bg-mybg overflow-x-visible shadow-[0px_14px_99px_-25px_#228be6]"
    >
      <Image
        src={heroBrowserMockup}
        alt="browser mockup"
        fill={true}
        className=""
      />

      <Image
        src={heroMobileMockup}
        alt="mobile mockup"
        className="absolute z-20 top-[15%] -right-[10%] w-auto h-[200px] sm:h-[400px] md:h-[500px]"
      />
      <BorderBeam
        colorFrom="hsl(229, 75%, 53%)"
        colorTo="hsl(229, 75%, 53%)"
        delay={0.5}
      />
    </motion.div>
  );
};

export default HeroMockups;
