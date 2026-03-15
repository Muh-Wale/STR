import { motion } from 'motion/react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
export function GetInTouchSection() {
  const MotionSection = motion.section
  const MotionImg = motion.img
  const MotionA = motion.a

  return (
    <MotionSection
      className="relative min-h-150 overflow-hidden bg-[#b9f6e2] px-[2.4rem] pt-8 max-[980px]:px-5 max-[980px]:py-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,#ffffff55_0%,transparent_48%)]" />

      <div className="relative z-10 grid grid-cols-[370px_1fr] items-start gap-4 max-[980px]:grid-cols-1 max-[980px]:gap-5">
        <div>
          <div className="w-fit border-[3px] border-[#111111] bg-[#f5ff01] px-[0.7rem] py-[0.35rem] text-[clamp(1.4rem,3vw,2.2rem)] font-black shadow-[6px_6px_0_#000000] max-[980px]:text-[1.55rem]">
            Get in Touch with Us
          </div>

          <div className="mt-[1.7rem] flex gap-[1.1rem]">
            <MotionA
              href="#"
              aria-label="X"
              className="grid h-12 w-12 place-items-center rounded-[0.8rem] bg-[#0f0f0f] text-[1.7rem] text-white no-underline"
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FaXTwitter />
            </MotionA>

            <MotionA
              href="#"
              aria-label="Telegram"
              className="grid h-12 w-12 place-items-center rounded-[0.8rem] bg-[#35a4e8] text-[1.7rem] text-white no-underline"
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FaTelegramPlane />
            </MotionA>
          </div>
        </div>
      </div>

      <img
        src="/slothbgr.png"
        alt="Sloth mascots in coin background"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-full w-full object-fill"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </MotionSection>
  )
}
