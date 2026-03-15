import { motion } from 'motion/react'

const joinSteps = [
  {
    title: 'STEP 1',
    image: '/slothfour_one.png',
    copy: 'Join Sloth.fun bot on Telegram',
  },
  {
    title: 'STEP 2',
    image: '/slothfour_two.png',
    copy: 'Create your account automatically',
  },
  {
    title: 'STEP 3',
    image: '/slothfour_three.png',
    copy: 'Swipe to buy and sell tokens',
  },
  {
    title: 'STEP 4',
    image: '/slothfour_four.png',
    copy: 'Explore more features and rewards',
  },
]

export function HowToJoinSection() {
  return (
    <motion.section
      id="join"
      className="relative overflow-hidden bg-[#f0dfc2] px-[4.2rem] pt-12 pb-16 max-[980px]:px-5 max-[980px]:py-10"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff3b_1px,transparent_1px)] [background-size:10px_10px] opacity-45" />

      {/* Top leaves */}
      <img src="/leftleave.png"  alt="" aria-hidden className="pointer-events-none absolute left-[1.2rem]  top-0    w-[clamp(2.4rem,4.2vw,3.9rem)] opacity-35" />
      <img src="/rightleave.png" alt="" aria-hidden className="pointer-events-none absolute right-[1.2rem] top-0    w-[clamp(2.4rem,4.2vw,3.9rem)] opacity-35" />

      {/* Bottom leaves — rotated 90° */}
      <img src="/rightleave.png" alt="" aria-hidden className="pointer-events-none absolute bottom-0 left-[1.2rem]  w-[clamp(2.4rem,4.2vw,3.9rem)] opacity-35 rotate-180" />
      <img src="/leftleave.png"  alt="" aria-hidden className="pointer-events-none absolute bottom-0 right-[1.2rem] w-[clamp(2.4rem,4.2vw,3.9rem)] opacity-35 rotate-180" />

      <div className="relative z-10 mx-auto mt-0 w-fit border-[3px] border-[#111111] bg-[#f5ff01] px-[1.35rem] py-[0.45rem] text-[clamp(1.8rem,4.2vw,2.8rem)] leading-none font-black shadow-[5px_5px_0_#00000026]">
        How to Join
      </div>
      <p className="relative z-10 mx-auto mt-[1.2rem] mb-[2.1rem] max-w-[52ch] text-center text-[clamp(1.05rem,1.8vw,1.6rem)] font-medium max-[980px]:max-w-full">
        Swipe, launch tokens, and join the memecoin chaos, all without leaving Telegram.
      </p>

      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-4 gap-[1.1rem] max-[980px]:grid-cols-2 max-[980px]:gap-4 max-[540px]:grid-cols-1">
        {joinSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative flex flex-col px-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
          >
            {/* folder.png stretched as full background */}
            <img
              src="/folder.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-fill"
            />

            {/* STEP title — sits over the folder tab area */}
            <h3 className="relative z-10 flex pl-4 pt-[0.55rem] text-[clamp(1rem,2vw,1.45rem)] font-black leading-none">
              {step.title}
            </h3>

            {/* Illustration area — darker shade of #FFF4A7 */}
            <div className="relative z-10 mx-[0.55rem] mt-[2.75rem] rounded-2xl bg-[#e8d94a] flex items-center justify-center py-3 px-2">
              <img
                src={step.image}
                alt={step.title}
                className="w-[82%] max-h-[160px] object-contain"
              />
            </div>

            {/* Copy text */}
            <p className="relative z-10 px-3 py-5 pb-[0.9rem] text-center text-sm leading-[1.35] text-[#2b2b2b] font-sans font-medium">
              {step.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
