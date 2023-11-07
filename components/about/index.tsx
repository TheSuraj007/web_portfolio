import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";

export default function AboutMe({
  setIsVisible,
}: {
  setIsVisible: () => void;
}) {
  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);

  return (
    <motion.section
      id="_about-me"
      ref={observeRef}
      className="relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-max  md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute -top-12 left-1/2 w-[700px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          From Circuits to Creativity: My Journey as an Embedded Engineer
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>
      <br />

      <p className="transition-all duration-300 !leading-loose ease-in hover:text-white/70">
        Welcome to my world of embedded engineering! My passion for technology began <br className="md:block hidden" /> during my engineering days, where I delved into freelance projects to fuel<br className="md:block hidden" /> my creativity.<br /> <br /> My expertise in designing PCB circuits, developing intricate embedded software,<br className="md:block hidden" /> and delivering cutting-edge products has been honed through collaborations <br className="md:block hidden" /> with diverse clients. Each experience has expanded my skills and broadened <br className="md:block hidden" /> my perspectives. But my curiosity and thirst for innovation extend beyond <br className="md:block hidden" /> traditional projects.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I am constantly driven to explore the dynamic relationship between hardware <br className="md:block hidden" /> and software, constantly pushing the boundaries and bridging the divide {" "}
        <br className="hidden md:block" />
        between ideas and execution.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        With an unwavering commitment to excellence and a knack for solving complex  <br className="md:block hidden" /> problems, I am eager to continue my journey and leave a lasting impact in the
        <br className="hidden md:block" />
        world of embedded engineering.
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I have worked  on:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          8 & 32 bits microcontrollers
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          BLE
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          PCB Design
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Firmware
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Low power products
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          IOT
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-xs">Others:</span>
        <p className="flex gap-1 text-xs text-gray-100">
          <span className="text-yellow">Git</span>
          &#x2022;
          <span className="text-yellow">Debuging</span>
          &#x2022;
          <span className="text-yellow">Bootloader</span>
          &#x2022;
          <span className="text-yellow">State machine</span>
          &#x2022;
          <span className="text-yellow">Embedded C</span>
          &#x2022;
          <span className="text-yellow">KiCad</span>
          &#x2022;
          <span className="text-yellow">STM32/ESP32/AVR etc</span>
        </p>
      </div>
    </motion.section>
  );
}
