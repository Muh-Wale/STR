import { motion } from 'motion/react'

const featureCards = [
  {
    title: 'Gamified Trading',
    copy: 'Swipe MOON or FUD to trade in a fun, intuitive way.',
    image: '/sloththree_one.png',
  },
  {
    title: 'Built-in wallet',
    copy: 'Users get a seamless wallet auto-linked to Telegram.',
    image: '/sloththree_two.png',
  },
  {
    title: 'Leaderboards & Airdrops',
    copy: 'Climb the ranks and earn rewards for your activity.',
    image: '/sloththree_six.png',
  },
  {
    title: 'Instant Token Launch',
    copy: 'Launch your own token with zero-code setup and speed.',
    image: '/sloththree_seven.png',
  },
]

function FeatureCard({ card, delay }) {
  const MotionDiv = motion.div
  return (
    <MotionDiv
      className="relative flex justify-center pt-[7rem]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      <img
        src={card.image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 z-10 w-[clamp(6rem,10vw,9rem)] -translate-x-1/2 -translate-y-[55%] [filter:drop-shadow(0_4px_0_#00000030)]"
      />
      <div className="w-full max-w-[320px] border-2 border-[#111111] bg-[#f5f5f5] px-[1.1rem] pt-10 pb-[1.2rem] text-center shadow-[5px_6px_0_#000000]">
        <h3 className="m-0 text-[clamp(1rem,2vw,1.45rem)] leading-[1.15] font-bold">{card.title}</h3>
        <p className="mt-[0.7rem] text-[clamp(0.85rem,1.4vw,1.05rem)] leading-[1.4] text-[#3b3b3b]">{card.copy}</p>
      </div>
    </MotionDiv>
  )
}

export function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-[#c6f7c2] to-[#c2f2bc] px-[4.2rem] pt-24 pb-16 max-[980px]:px-5 max-[980px]:pt-16 max-[980px]:pb-10"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(17,17,17,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      {/* Leaf accents */}
      <img
        src="/leftleave.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-4 top-0 z-10 w-[clamp(2.4rem,4.4vw,4rem)] opacity-70"
      />
      <img
        src="/rightleave.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-4 top-0 z-10 w-[clamp(2.4rem,4.4vw,4rem)] opacity-70"
      />

      {/*
        Desktop: 3-col grid
          col 1 → card 1 (row 1) + card 3 (row 2)
          col 2 → mascot + "Features" label, spanning both rows
          col 3 → card 2 (row 1) + card 4 (row 2)
      */}
      <div className="relative z-10 grid grid-cols-[1fr_clamp(9rem,16vw,15rem)_1fr] gap-x-6 gap-y-8 max-[980px]:flex max-[980px]:flex-col max-[980px]:items-center max-[980px]:gap-[5rem]">

        {/* Card 1 — top left */}
        <div className="col-start-1 row-start-1">
          <FeatureCard card={featureCards[0]} delay={0} />
        </div>

        {/* Center — spans both rows */}
        <div className="col-start-2 row-start-1 row-span-2 flex flex-col items-center justify-center gap-3 max-[980px]:order-first">
          <img
            src="/sloththree_eight.png"
            alt="Sloth mascot"
            className="relative top-7 z-50 block w-[clamp(7rem,16vw,12rem)]"
          />
          <div className="relative z-10 w-fit border-[3px] border-[#111111] bg-[#f5ff01] px-[1.35rem] py-[0.45rem] text-[clamp(1.6rem,4vw,2.8rem)] leading-none font-black shadow-[5px_5px_0_#000000]">
            Features
          </div>
        </div>

        {/* Card 2 — top right */}
        <div className="col-start-3 row-start-1">
          <FeatureCard card={featureCards[1]} delay={0.08} />
        </div>

        {/* Card 3 — bottom left */}
        <div className="col-start-1 row-start-2">
          <FeatureCard card={featureCards[2]} delay={0.16} />
        </div>

        {/* Card 4 — bottom right */}
        <div className="col-start-3 row-start-2">
          <FeatureCard card={featureCards[3]} delay={0.24} />
        </div>
      </div>
    </motion.section>
  )
}
