import { motion } from 'motion/react'

export function HeroSection() {
  const MotionSection = motion.section
  const MotionDiv = motion.div
  const MotionImg = motion.img
  const MotionButton = motion.button

  return (
    <MotionSection
      className="relative overflow-hidden bg-[#FFF4A7] px-[4.2rem] pt-[1.3rem] pb-[3.4rem] max-[980px]:px-5 max-[980px]:pt-5 max-[980px]:pb-10"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(22,22,22,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
      <header className="relative z-10 flex items-center justify-between">
        <div className="text-[2rem] font-black tracking-[-0.03em]">
          <span className="text-[#169b45]">Sloth</span>
          <span>.fun</span>
        </div>
        <nav className="flex gap-9 text-[0.95rem] font-bold max-[980px]:hidden">
          <a href="#about" className="no-underline">
            About
          </a>
          <a href="#features" className="no-underline">
            Features
          </a>
          <a href="#join" className="no-underline">
            How to Join
          </a>
          <a href="#roadmap" className="no-underline">
            Roadmap
          </a>
        </nav>
      </header>

      <div className="relative z-10 mt-12 grid grid-cols-5 items-center gap-8 max-[980px]:grid-cols-1 max-[980px]:gap-5 max-w-[1500px] mx-auto">
        <MotionDiv
          className="col-span-3"
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="m-0 leading-[1.1] tracking-[-0.04em]">
            <span className="block text-[clamp(4.4rem,10vw,9.4rem)] font-black text-[#f5ff01] [text-shadow:6px_6px_0_#000000] [-webkit-text-stroke:5px_#111111]">
              ONE
            </span>

            <span className="block text-[clamp(4.4rem,10vw,9.4rem)] font-black [text-shadow:6px_6px_0_#000000] [-webkit-text-stroke:5px_#111111] ml-3">
              <span className="text-[#d9f79f]">S</span>
              <span className="text-[#ff9ea7]">W</span>
              <span className="text-white">I</span>
              <span className="text-[#adfff0]">P</span>
              <span className="text-[#dcc4ff]">E</span>
            </span>
          </h1>
          <p className="my-[2.2rem] max-w-[40ch] text-[clamp(1.1rem,1.9vw,2rem)] font-medium leading-[1.35] max-[980px]:max-w-full">
            From memecoin glory. A go-to platform for discovering and trading
            memecoins with a gamified experience.
          </p>
        </MotionDiv>

        <MotionDiv
          className="col-span-2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <MotionImg
            src="/slothone.png"
            alt="Sloth mascot sitting on cash"
            className="w-[min(100%,520px)] object-contain [filter:drop-shadow(0_22px_0_#00000016)] pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className='w-full flex justify-end'>
            <MotionButton
              className="cursor-pointer border-4 border-[#111111] bg-[#f5ff01] px-[1.45rem] py-[0.4rem] text-[clamp(1.2rem,2.2vw,2.8rem)] font-black text-[#111111] shadow-[6px_6px_0_#000000] max-[980px]:text-[1.6rem] w-fit"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Join now
            </MotionButton>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
