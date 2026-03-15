import { motion } from 'motion/react'

export function AboutSection() {
  const MotionSection = motion.section
  const MotionDiv = motion.div
  const MotionImg = motion.img
  const MotionButton = motion.button

  return (
    <MotionSection
      id="about"
      className="relative min-h-[80vh] overflow-hidden bg-[#CCFFC8] px-[4.2rem] py-16 max-[980px]:px-5 max-[980px]:py-10 "
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,#ffffff99_0%,#ffffff00_44%)] max-w-[1500px] mx-auto" />
      <div className="relative z-10 grid grid-cols-7 items-center gap-10 max-[980px]:grid-cols-1 max-[980px]:gap-5 justify-center">
        <MotionDiv
          className="flex justify-center col-span-3"
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <MotionImg
            src="/slothtwo.png"
            alt="Sloth mascot near a coin chest"
            className="w-[min(100%,520px)] object-contain [filter:drop-shadow(0_20px_0_#00000012)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </MotionDiv>

        <MotionDiv
          className='col-span-4'
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="m-0 text-[clamp(3.2rem,7vw,7.3rem)] leading-[0.9] text-[#f5ff01] [text-shadow:6px_5px_0_#00000030] [-webkit-text-stroke:3px_#111111] max-[980px]:[-webkit-text-stroke:2px_#111111]">
            About
          </h2>
          <div className="mt-[1.4rem] flex w-fit items-center gap-4 rounded-full border-[3px] border-[#111111] bg-[#ffffffde] p-[0.35rem]">
            <span className="px-4 pl-[1.1rem] text-[clamp(1.6rem,3vw,3rem)] font-black tracking-[-0.02em] max-[980px]:text-[2rem]">
              Sloth.fun
            </span>
            <MotionButton
              className="cursor-pointer rounded-full border-2 border-[#111111] bg-[#f5ff01] px-[1.3rem] py-[0.7rem] text-[clamp(1rem,1.8vw,1.5rem)] font-extrabold text-[#111111]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              Get Started
            </MotionButton>
          </div>
          <p className="mt-8 max-w-[44ch] text-[clamp(1.1rem,2vw,2rem)] font-medium leading-[1.45] max-[980px]:max-w-full">
            Sloth.fun is a gamified Telegram mini-app designed for discovering,
            trading, and launching memecoins with a swipe-based interface.
          </p>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
