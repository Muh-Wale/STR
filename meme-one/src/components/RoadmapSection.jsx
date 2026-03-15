import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const phases = [
  {
    title: 'PHASE 1',
    copy: 'Development & Beta Phase',
    image: '/phase-one.png',
  },
  {
    title: 'PHASE 2',
    copy: 'Community Growth and Scaling',
    image: '/phase-two.png',
  },
  {
    title: 'PHASE 3',
    copy: 'Official Launch',
    image: '/phase-three.png',
  },
  {
    title: 'PHASE 4',
    copy: 'Market Expansion and Optimization',
    image: '/phase-four.png',
  },
]

export function RoadmapSection() {
  const sectionRef = useRef(null)
  const MotionSection = motion.section
  const MotionDiv = motion.div
  const MotionImg = motion.img

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 25%'],
  })

  const poleScale = useTransform(scrollYProgress, [0, 1], [0.08, 1])

  const card1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [0.25, 1, 1])
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.52], [0.25, 1, 1])
  const card3Opacity = useTransform(scrollYProgress, [0.43, 0.58, 0.75], [0.25, 1, 1])
  const card4Opacity = useTransform(scrollYProgress, [0.66, 0.82, 1], [0.25, 1, 1])

  const card1Y = useTransform(scrollYProgress, [0, 0.2], [26, 0])
  const card2Y = useTransform(scrollYProgress, [0.2, 0.45], [26, 0])
  const card3Y = useTransform(scrollYProgress, [0.45, 0.68], [26, 0])
  const card4Y = useTransform(scrollYProgress, [0.68, 0.9], [26, 0])

  const cardStyles = [
    { opacity: card1Opacity, y: card1Y },
    { opacity: card2Opacity, y: card2Y },
    { opacity: card3Opacity, y: card3Y },
    { opacity: card4Opacity, y: card4Y },
  ]

  return (
    <MotionSection
      id="roadmap"
      ref={sectionRef}
      className="relative grid min-h-[100vh] grid-cols-[minmax(260px,1fr)_minmax(500px,1fr)] gap-8 overflow-hidden bg-[#ecec9e] px-[4.2rem] max-[980px]:grid-cols-1 max-[980px]:gap-4 max-[980px]:px-5 max-[980px]:pt-5 max-[980px]:pb-10 items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.08)_1px,transparent_1px)] bg-size-[36px_36px]" />
      <div className="relative z-10 py-[3.2rem] max-[980px]:py-0 flex flex-col items-center gap-3 justify-center w-full">
        <h2 className=" mb-[1.4rem] text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] text-[#7f6735] [-webkit-text-stroke:3px_#2d1f13] max-[980px]:mt-4 max-[980px]:[-webkit-text-stroke:2px_#2d1f13]">
          ROAD MAP
        </h2>
        <div className="max-w-[40ch] border-[3px] border-[#111111] bg-[#f6f6f6] p-4 text-[clamp(0.95rem,1.4vw,1.25rem)] leading-[1.35] shadow-[6px_6px_0_#000000] max-[980px]:max-w-full">
          Join the ride as we "slide" our way to memecoin madness, one tap at a
          time!
        </div>
        <MotionImg
          src="/slothsix.png"
          alt="Dancing sloth mascot"
          className="mt-[1.1rem] ml-48 w-[clamp(5rem,8.7vw,7.3rem)] max-[980px]:ml-0 max-[980px]:mt-4 relative left-52"
          animate={{ rotate: [0, 3, -2, 0], y: [0, -5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 block min-h-full max-[980px]:min-h-190">
        <div className="pointer-events-none absolute top-0 left-[40px] z-30 w-12 overflow-hidden max-[980px]:left-[38px] max-[980px]:w-9">
          <MotionImg
            src="/pole.svg"
            alt="Roadmap pole"
            className="h-full w-12 origin-top object-fill max-[980px]:w-9"
            style={{ scaleY: poleScale }}
          />
        </div>
        <div className="relative z-50 grid gap-[2rem] py-[2.2rem] items-center my-20">
          {phases.map((phase, index) => (
            <MotionDiv
              key={phase.title}
              className="relative h-[205px] w-[500px] overflow-hidden border-[3px] border-[#111111] shadow-[5px_5px_0_#00000020] max-[980px]:h-[188px]"
              style={cardStyles[index]}
            >
              <img src={phase.image} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
              <div className="relative z-10 px-4 flex flex-col justify-center h-full max-[980px]:px-[0.55rem] max-[980px]:pt-[0.65rem] max-[980px]:pb-[0.7rem] max-[980px]:pl-[84px]">
                <h3 className="m-0 text-[48px] leading-none font-bold max-[980px]:text-[34px]">{phase.title}</h3>
                <p className="mt-[0.5rem] text-[24px] leading-[1.2] font-semibold max-[980px]:text-[18px]">
                  {phase.copy}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
