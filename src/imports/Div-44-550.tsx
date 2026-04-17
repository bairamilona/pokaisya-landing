import clsx from "clsx";
import imgImg from "figma:asset/13db5fd9a37ee7a45e1d20d9bdf97fa0b0bf10e4.png";
import imgImg1 from "figma:asset/175ccfcddff77938c3a7951e8b2f0f650141d338.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[30.234px] left-0 top-[25px]">
      <p className="absolute font-['Raleway:ExtraBold',sans-serif] font-extrabold leading-[30.24px] left-0 text-[#26211d] text-[28px] top-[-0.5px] tracking-[-0.7px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type SpanBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText2({ text, additionalClassNames = "" }: SpanBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute h-[25.201px] left-[23.52px] top-[563.94px]", additionalClassNames)}>
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[25.201px] left-0 text-[16.801px] text-[rgba(240,238,236,0.6)] top-[0.84px] tracking-[3.0241px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText2Props = {
  text: string;
};

function PBackgroundImageAndText2({ text }: PBackgroundImageAndText2Props) {
  return (
    <div className="absolute h-[50.391px] left-0 top-[67.23px] w-[400px]">
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.2px] left-0 text-[15px] text-[rgba(46,60,70,0.48)] top-[-0.5px] w-[382px]">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText1Props = {
  text: string;
};

function PBackgroundImageAndText1({ text }: PBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[50.391px] left-0 top-[67.23px] w-[400px]">
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.2px] left-0 text-[15px] text-[rgba(46,60,70,0.48)] top-[-0.5px] w-[388px]">{text}</p>
    </div>
  );
}
type HBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HBackgroundImageAndText({ text, additionalClassNames = "" }: HBackgroundImageAndTextProps) {
  return <BackgroundImage additionalClassNames={additionalClassNames}>{text}</BackgroundImage>;
}
type SpanBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText1({ text, additionalClassNames = "" }: SpanBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[19px] top-[34.5px]", additionalClassNames)}>
      <p className="-translate-x-full absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-[49px] text-[10px] text-[rgba(46,60,70,0.2)] text-right top-[4.5px] tracking-[0.8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PBackgroundImageAndText({ text, additionalClassNames = "" }: PBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[15px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.3)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
};

function SpanBackgroundImageAndText({ text }: SpanBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[19px] left-0 top-[34.5px] w-[48px]">
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.22)] top-[4.5px] tracking-[0.8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type MotionPBackgroundImageAndTextProps = {
  text: string;
};

function MotionPBackgroundImageAndText({ text }: MotionPBackgroundImageAndTextProps) {
  return (
    <div className="h-[87px] relative shrink-0 w-full">
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.3)] top-[72.5px] tracking-[2.2px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Div() {
  return (
    <div className="relative size-full" data-name="div" style={{ backgroundImage: "linear-gradient(rgba(236, 238, 240, 0.55) 0%, rgba(236, 238, 240, 0) 24.038%, rgba(236, 238, 240, 0) 49.519%, rgba(220, 227, 235, 0.9) 75.481%, rgba(220, 227, 235, 0) 100%)" }}>
      <div className="absolute content-stretch flex flex-col h-[1533.18px] items-start left-[304px] pt-[0.5px] px-[498.5px] top-[2679px] w-[1677px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
        <div className="h-[1532.68px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-start px-[28px] relative size-full">
            <div className="content-stretch flex flex-col h-[645.875px] items-start relative shrink-0 w-full" data-name="section">
              <MotionPBackgroundImageAndText text="How It Works" />
              <div className="content-stretch flex flex-col h-[558.875px] items-start pb-[0.5px] relative shrink-0 w-full" data-name="div">
                <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                <div className="h-[186.125px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <SpanBackgroundImageAndText text="01" />
                  <div className="absolute h-[117.625px] left-[68px] top-[34.5px] w-[487.359px]" data-name="div">
                    <PBackgroundImageAndText text="Reflection" additionalClassNames="w-[487.359px]" />
                    <BackgroundImage additionalClassNames="w-[487.359px]">{`Describe — what's happening`}</BackgroundImage>
                    <div className="absolute h-[50.391px] left-0 top-[67.23px] w-[400px]" data-name="p">
                      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.2px] left-0 text-[15px] text-[rgba(46,60,70,0.48)] top-[-0.5px] w-[374px]">{`Just words, just a thought. No filters, no judgment. The app doesn't judge — it listens.`}</p>
                    </div>
                  </div>
                  <SpanBackgroundImageAndText1 text="Step one" additionalClassNames="left-[575.36px] w-[48.641px]" />
                </div>
                <div className="h-[186.125px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <SpanBackgroundImageAndText text="02" />
                  <div className="absolute h-[117.625px] left-[68px] top-[34.5px] w-[487.492px]" data-name="div">
                    <PBackgroundImageAndText text="Prism" additionalClassNames="w-[487.492px]" />
                    <HBackgroundImageAndText text="Choose a lens" additionalClassNames="w-[487.492px]" />
                    <PBackgroundImageAndText1 text="Values. Fears. Body. Future. Each prism asks one precise question — and shifts your angle of view." />
                  </div>
                  <SpanBackgroundImageAndText1 text="Step two" additionalClassNames="left-[575.49px] w-[48.508px]" />
                </div>
                <div className="h-[186.125px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <SpanBackgroundImageAndText text="03" />
                  <div className="absolute h-[117.625px] left-[68px] top-[34.5px] w-[478.508px]" data-name="div">
                    <PBackgroundImageAndText text="Action" additionalClassNames="w-[478.508px]" />
                    <HBackgroundImageAndText text="Take one step" additionalClassNames="w-[478.508px]" />
                    <PBackgroundImageAndText2 text="Not a to-do list. One intention. That is repentance — not regret, but movement." />
                  </div>
                  <div className="absolute h-[19px] left-[566.51px] top-[34.5px] w-[57.492px]" data-name="span">
                    <p className="-translate-x-full absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-[58px] text-[10px] text-[rgba(46,60,70,0.2)] text-right top-[4.5px] tracking-[0.8px] whitespace-nowrap">Step three</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[886.805px] items-start relative shrink-0 w-full" data-name="section">
              <MotionPBackgroundImageAndText text="Use Cases" />
              <div className="content-stretch flex flex-col h-[719.805px] items-start pb-[0.5px] relative shrink-0 w-full" data-name="div">
                <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[20px] grid grid-cols-[___minmax(0,48fr)_minmax(0,506.38fr)_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] h-[186.125px] pb-[34px] pt-[34.5px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <div className="col-1 h-[19px] justify-self-stretch relative row-1 shrink-0" data-name="span">
                    <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.22)] top-[4.5px] tracking-[0.8px] whitespace-nowrap">04</p>
                  </div>
                  <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="div">
                    <PBackgroundImageAndText text="Use Case" additionalClassNames="w-[506.375px]" />
                    <HBackgroundImageAndText text="Quick reflection" additionalClassNames="w-[506.375px]" />
                    <PBackgroundImageAndText2 text="Three minutes at the end of the day. What happened — and what does it mean to you." />
                  </div>
                  <div className="col-3 h-[19px] justify-self-stretch relative row-1 shrink-0" data-name="span">
                    <p className="-translate-x-full absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-[30px] text-[10px] text-[rgba(46,60,70,0.2)] text-right top-[4.5px] tracking-[0.8px] whitespace-nowrap">3 min</p>
                  </div>
                </div>
                <div className="h-[186.125px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <SpanBackgroundImageAndText text="05" />
                  <div className="absolute h-[117.625px] left-[68px] top-[34.5px] w-[499.609px]" data-name="div">
                    <PBackgroundImageAndText text="Use Case" additionalClassNames="w-[499.609px]" />
                    <HBackgroundImageAndText text="Decision-making" additionalClassNames="w-[499.609px]" />
                    <PBackgroundImageAndText1 text="Different prisms reveal which values or fears lie behind a choice." />
                  </div>
                  <div className="absolute h-[19px] left-[587.61px] top-[34.5px] w-[36.391px]" data-name="span">
                    <p className="-translate-x-full absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-[37px] text-[10px] text-[rgba(46,60,70,0.2)] text-right top-[4.5px] tracking-[0.8px] whitespace-nowrap">Clarity</p>
                  </div>
                </div>
                <div className="h-[186.125px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <SpanBackgroundImageAndText text="06" />
                  <div className="absolute h-[117.625px] left-[68px] top-[34.5px] w-[503.039px]" data-name="div">
                    <PBackgroundImageAndText text="Use Case" additionalClassNames="w-[503.039px]" />
                    <HBackgroundImageAndText text="Emotional clarity" additionalClassNames="w-[503.039px]" />
                    <div className="absolute h-[50.391px] left-0 top-[67.23px] w-[400px]" data-name="p">
                      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.2px] left-0 text-[15px] text-[rgba(46,60,70,0.48)] top-[-0.5px] w-[396px]">{`Not 'what do I feel', but 'why does this matter' — and what you can do with it.`}</p>
                    </div>
                  </div>
                  <div className="absolute h-[19px] left-[591.04px] top-[34.5px] w-[32.961px]" data-name="span">
                    <p className="-translate-x-full absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-[33px] text-[10px] text-[rgba(46,60,70,0.2)] text-right top-[4.5px] tracking-[0.8px] whitespace-nowrap">Depth</p>
                  </div>
                </div>
                <div className="h-[160.93px] relative shrink-0 w-full" data-name="motion.div">
                  <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                  <SpanBackgroundImageAndText text="07" />
                  <div className="absolute h-[92.43px] left-[68px] top-[34.5px] w-[479.547px]" data-name="div">
                    <PBackgroundImageAndText text="Values" additionalClassNames="w-[479.547px]" />
                    <BackgroundImage additionalClassNames="w-[479.547px]">{`Values & habits`}</BackgroundImage>
                    <div className="absolute h-[25.195px] left-0 top-[67.23px] w-[400px]" data-name="p">
                      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.2px] left-0 text-[15px] text-[rgba(46,60,70,0.48)] top-[-0.5px] whitespace-nowrap">Check in: is what you do every day actually you?</p>
                    </div>
                  </div>
                  <div className="absolute h-[19px] left-[567.55px] top-[34.5px] w-[56.453px]" data-name="span">
                    <p className="-translate-x-full absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-[57px] text-[10px] text-[rgba(46,60,70,0.2)] text-right top-[4.5px] tracking-[0.8px] whitespace-nowrap">Alignment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[616.585px] left-[965px] overflow-clip rounded-[26.881px] top-[1385px] w-[369.615px]" data-name="motion.div">
        <div className="absolute h-[616.02px] left-0 top-0 w-[369.615px]" data-name="img">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(46,60,70,0.55)] h-[616.02px] left-0 to-1/2 to-[rgba(46,60,70,0)] top-0 w-[369.615px]" data-name="div" />
        <SpanBackgroundImageAndText2 text="Prism" additionalClassNames="w-[66.14px]" />
      </div>
      <p className="absolute font-['Raleway:Light_Italic',sans-serif] font-light italic leading-[33px] left-[288px] text-[22px] text-[rgba(46,60,70,0.5)] top-[1460px] tracking-[-0.22px] w-[174px]">{`"Choose a lens. Shift the angle. Shift the meaning."`}</p>
      <div className="absolute h-[616.585px] left-[396px] overflow-clip rounded-[26.881px] top-[2193px] w-[369.615px]" data-name="motion.div">
        <div className="absolute h-[616.02px] left-0 top-0 w-[369.615px]" data-name="img">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-43.05%] max-w-none top-0 w-[166.67%]" src={imgImg1} />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(46,60,70,0.55)] h-[616.02px] left-0 to-1/2 to-[rgba(46,60,70,0)] top-0 w-[369.615px]" data-name="div" />
        <SpanBackgroundImageAndText2 text="Action" additionalClassNames="w-[80.971px]" />
      </div>
    </div>
  );
}