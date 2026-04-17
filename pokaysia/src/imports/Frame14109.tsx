import clsx from "clsx";
import svgPaths from "./svg-33h68lknnt";
import imgFrame14109 from "figma:asset/175ccfcddff77938c3a7951e8b2f0f650141d338.png";
import imgImage from "figma:asset/756853304b0bd764759b43c781924d56b7a8de1f.png";
import imgImage1 from "figma:asset/7d61563b5b92614c20b3c4f013a904996cd9f8e9.png";
import imgImage2 from "figma:asset/cab9ef0b0b47ddaa38425e93d689f90437dd1e20.png";
import imgImage3 from "figma:asset/bc0f80af9e2f169067ff5c4851d66b4fda8d39cc.png";
import imgImage68 from "figma:asset/45bf245c189703d3da40cac0b860726abed033fd.png";
import imgImg from "figma:asset/4b4c10482b002491005b43e63e329f71011e2c66.png";
import imgImg1 from "figma:asset/a20ef89865c09283f3f46ea0abc331a46eb62af3.png";
import imgImg2 from "figma:asset/7437da122c08b9acde6240fcec51e4b056c9157f.png";
import imgImg3 from "figma:asset/19035830d8f7c0adac35a4589abbb633aefd3cc2.png";

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8.718px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.71795 8.71795">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage7Props>) {
  return <BackgroundImage8 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage8>;
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return <BackgroundImage8 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage8>;
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="h-[36.274px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[40.492px]" data-name="image">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div style={{ fontFeatureSettings: "'lnum', 'pnum'" }} className={clsx("flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap", additionalClassNames)}>
      <p className="leading-none">{children}</p>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col items-center justify-center left-[9.75px] rounded-[21.795px] size-[13.949px] top-[54.05px]", additionalClassNames)}>
      <div className="flex h-[5.46px] items-center justify-center relative shrink-0 w-[4.662px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "133" } as React.CSSProperties}>
        <div className="flex-none rotate-120">{children}</div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.872px_1.308px_0.872px_0px_rgba(255,255,255,0.8)]" />
    </div>
  );
}
type MotionDivBackgroundImageProps = {
  additionalClassNames?: string;
};

function MotionDivBackgroundImage({ additionalClassNames = "" }: MotionDivBackgroundImageProps) {
  return (
    <BackgroundImage3 additionalClassNames="bg-[rgba(237,238,240,0.12)] shadow-[0px_1.744px_5.231px_0px_rgba(253,205,184,0.26),0px_1.308px_1.744px_0px_rgba(0,0,0,0.14)]">
      <DivBackgroundImage additionalClassNames="opacity-70" />
    </BackgroundImage3>
  );
}
type DivBackgroundImageProps = {
  additionalClassNames?: string;
};

function DivBackgroundImage({ additionalClassNames = "" }: DivBackgroundImageProps) {
  return (
    <div className={clsx("h-[2.615px] relative w-[4.795px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[2.615px] overflow-clip relative shrink-0 w-full">
          <BackgroundImage1 additionalClassNames="left-0 right-[85.71%]" />
          <BackgroundImage1 additionalClassNames="left-[28.57%] right-[57.14%]" />
          <BackgroundImage1 additionalClassNames="left-[57.14%] right-[28.57%]" />
          <BackgroundImage2 additionalClassNames="absolute inset-[37.5%_0_37.5%_85.72%]" />
          <VectorBackgroundImage additionalClassNames="left-0 right-[85.71%]" />
          <VectorBackgroundImage additionalClassNames="left-[28.57%] right-[57.14%]" />
          <VectorBackgroundImage additionalClassNames="left-[57.14%] right-[28.57%]" />
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[5.861px] items-start px-[3.487px] top-[3.17px]", additionalClassNames)}>
      <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] relative shrink-0 text-[#4d4d4d] text-[4.969px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PBackgroundImageAndText({ text, additionalClassNames = "" }: PBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[5.864px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] relative shrink-0 text-[#4d4d4d] text-[4.969px] text-center whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.684982 0.653846">
        <path d={svgPaths.p1687e100} fill="var(--fill-0, #36444E)" id="Vector" />
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return <BackgroundImage2 additionalClassNames={clsx("absolute bottom-3/4 top-0", additionalClassNames)} />;
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ additionalClassNames = "" }: VectorBackgroundImageProps) {
  return <BackgroundImage2 additionalClassNames={clsx("absolute bottom-0 top-3/4", additionalClassNames)} />;
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col h-[10px] items-center justify-center relative shrink-0", additionalClassNames)}>
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#222] text-[6.453px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.234px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#626b72] text-[5.615px] text-center text-shadow-[0px_0px_0.936px_white] w-full whitespace-pre-wrap">{`   `}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div style={{ backgroundImage: "linear-gradient(142.907deg, rgb(236, 238, 240) 4.3056%, rgb(141, 189, 255) 96.042%)" }} className="content-stretch flex items-center justify-center p-[0.234px] relative rounded-[46.788px] shrink-0 size-[6.55px]">
      <div aria-hidden="true" className="absolute border-[0.234px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[46.788px] shadow-[-2.339px_2.339px_6.316px_0px_rgba(255,255,255,0.35),1.404px_1.404px_3.743px_0px_rgba(0,0,0,0.1)]" />
      <BackgroundImage4 additionalClassNames="text-[5.334px] text-shadow-[0px_0px_0.468px_white]">{text}</BackgroundImage4>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.468px_0.468px_2.152px_0px_rgba(0,157,255,0.39)]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative rounded-[16px] size-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[110.13%] left-[-109.06%] max-w-none top-[-10.13%] w-[233.13%]" src={imgFrame14109} />
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#eceef0] h-[362px] relative w-full" data-name="QuestionInput">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[11.229px] items-center pt-[7.486px] px-[9.358px] relative size-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center pb-[42px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[11px] items-start pb-[13px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[3.743px] items-center pb-[7.486px] pt-[18.715px] relative shrink-0 w-full">
                          <div className="content-stretch flex items-center justify-center p-[4.679px] relative shrink-0">
                            <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[25.265px] relative shrink-0 text-[16.844px] text-black text-center text-shadow-[0px_0px_0.468px_white] uppercase whitespace-nowrap">Repent</p>
                          </div>
                          <div className="relative shrink-0 w-full" data-name="Paragraph">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[17.779px] relative w-full">
                                <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[11.229px] relative shrink-0 text-[#37454f] text-[7.486px] text-center text-shadow-[0px_0px_0.468px_white] w-[125.859px]">Enter your question or topic for reflection</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[7.486px] items-center relative shrink-0 w-full">
                          <div className="bg-[rgba(255,255,255,0.25)] relative rounded-[15.908px] shadow-[-8.422px_-8.422px_42.951px_0px_rgba(255,233,232,0.5)] shrink-0 w-full" data-name="Container">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center pl-[11.229px] pr-[5.615px] py-[5.615px] relative w-full">
                                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="Text Area">
                                  <p className="flex-[1_0_0] font-['Raleway:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px relative text-[#4c565f] text-[7.318px]">When is the end of the world?</p>
                                </div>
                                <div className="bg-[rgba(254,254,254,0.26)] content-stretch flex items-center justify-center p-[1.404px] relative rounded-[23.394px] shrink-0 size-[17.779px]" data-name="Button">
                                  <div aria-hidden="true" className="absolute border-[1.404px] border-[rgba(223,223,223,0.31)] border-solid inset-0 pointer-events-none rounded-[23.394px]" />
                                  <div className="bg-[rgba(237,238,240,0.88)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[23.394px] shadow-[0px_1.872px_5.615px_0px_rgba(242,213,254,0.26),0px_1.404px_1.872px_0px_rgba(0,0,0,0.14)]">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                                      <div className="h-[2.807px] relative shrink-0 w-[4.913px]" data-name="Vector">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.9127 2.80726">
                                          <g id="Vector">
                                            <path d={svgPaths.p1a5dda00} fill="var(--fill-0, #36444E)" />
                                            <path d={svgPaths.p140f8d80} fill="var(--fill-0, #36444E)" />
                                            <path d={svgPaths.p5872900} fill="var(--fill-0, #36444E)" />
                                            <path d={svgPaths.pfde4800} fill="var(--fill-0, #36444E)" />
                                            <path d={svgPaths.p2f0a7b80} fill="var(--fill-0, #36444E)" />
                                            <path d={svgPaths.pbfa7600} fill="var(--fill-0, #36444E)" />
                                            <path d={svgPaths.p1464fbf0} fill="var(--fill-0, #36444E)" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.936px_1.404px_0.936px_0px_rgba(255,255,255,0.8)]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full" data-name="Paragraph">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[23.862px] relative w-full">
                                <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#c5c5c5] text-[5.615px] text-center text-shadow-[0px_0px_0.936px_white] whitespace-nowrap">2/4</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-start flex flex-wrap gap-[2.807258129119873px_2.807px] items-start justify-center relative shrink-0">
                            <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex gap-[1.872px] h-[11.229px] items-center justify-center p-[2.807px] relative rounded-[9.358px] shrink-0">
                              <div aria-hidden="true" className="absolute border-[0.234px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_rgba(255,255,255,0.7),0px_0px_0.468px_0px_rgba(0,0,0,0.03)]" />
                              <p className="font-['Raleway:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#626b72] text-[5.615px] text-center text-shadow-[0px_0px_0.468px_white] whitespace-nowrap">Religious</p>
                              <ContainerBackgroundImageAndText text="1" />
                            </div>
                            <div className="bg-[rgba(255,255,255,0.49)] h-[11.229px] relative rounded-[9.358px] shrink-0">
                              <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[2.807px] relative rounded-[inherit]">
                                <p className="font-['Raleway:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#626b72] text-[5.615px] text-center text-shadow-[0px_0px_0.468px_white] whitespace-nowrap">Philosophical</p>
                              </div>
                              <div aria-hidden="true" className="absolute border-[0.234px] border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_white,0px_0px_0.468px_0.468px_rgba(0,0,0,0.03)]" />
                            </div>
                            <div className="bg-[rgba(0,0,0,0.03)] h-[11.229px] relative rounded-[9.358px] shrink-0">
                              <div className="content-stretch flex gap-[1.872px] h-full items-center justify-center overflow-clip p-[2.807px] relative rounded-[inherit]">
                                <p className="font-['Raleway:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#626b72] text-[5.615px] text-center text-shadow-[0px_0px_0.468px_white] whitespace-nowrap">Scientific</p>
                                <ContainerBackgroundImageAndText text="1" />
                              </div>
                              <div aria-hidden="true" className="absolute border-[0.234px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_rgba(255,255,255,0.7),0px_0px_0.468px_0.468px_rgba(0,0,0,0.03)]" />
                            </div>
                            <div className="bg-[rgba(255,255,255,0.49)] h-[11px] relative rounded-[9.358px] shrink-0 w-[12px]">
                              <div className="content-stretch flex items-center justify-center overflow-clip p-[2.807px] relative rounded-[inherit] size-full">
                                <p className="font-['Raleway:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#626b72] text-[5.615px] text-center text-shadow-[0px_0px_0.468px_white] whitespace-pre">{`    `}</p>
                              </div>
                              <div aria-hidden="true" className="absolute border-[0.234px] border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_white,0px_0px_0.468px_0.468px_rgba(0,0,0,0.03)]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[11.229px] items-center relative shrink-0">
                            <div className="content-stretch flex gap-[4.679px] items-center justify-center relative shrink-0 w-full">
                              <BackgroundImage />
                              <div className="content-stretch flex items-center justify-center pt-[4.679px] relative shrink-0">
                                <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#626b72] text-[5.615px] text-center text-shadow-[0px_0px_0.936px_white] whitespace-nowrap">Religious</p>
                              </div>
                              <BackgroundImage />
                            </div>
                            <div className="content-stretch flex items-start pr-[22.538px] relative shrink-0">
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[2.531px] items-center justify-center mr-[-22.538px] pb-[5.905px] pt-[6.749px] px-[6.749px] relative rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[52.302px]">
                                <div aria-hidden="true" className="absolute border-[0.357px] border-solid border-white inset-0 pointer-events-none rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)]" />
                                <BackgroundImage5>
                                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px]">
                                    <img alt="" className="absolute h-[123.52%] left-0 max-w-none top-[-0.36%] w-full" src={imgImage} />
                                  </div>
                                </BackgroundImage5>
                                <div className="content-stretch flex flex-col h-[11px] items-center justify-center relative shrink-0 w-[53px]">
                                  <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#222] text-[6.453px] w-[32px]">Bible</p>
                                </div>
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[2.531px] items-center justify-center mr-[-22.538px] pb-[5.905px] pt-[6.749px] px-[6.749px] relative rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[52.302px]">
                                <div aria-hidden="true" className="absolute border-[0.357px] border-solid border-white inset-0 pointer-events-none rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)]" />
                                <BackgroundImage5>
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] size-full" src={imgImage1} />
                                </BackgroundImage5>
                                <div className="content-stretch flex flex-col h-[11px] items-center justify-center relative shrink-0 w-[44px]">
                                  <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#222] text-[6.453px] w-[27px]">Quran</p>
                                </div>
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[2.531px] h-[62.5px] items-center justify-center mr-[-22.538px] pb-[5.905px] pt-[6.749px] px-[6.749px] relative rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[53px]">
                                <div aria-hidden="true" className="absolute border-[0.357px] border-solid border-white inset-0 pointer-events-none rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)]" />
                                <div className="content-stretch flex flex-col gap-[3.248px] items-start relative shrink-0">
                                  <div className="h-[36.696px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[40.492px]" data-name="image">
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px]">
                                      <img alt="" className="absolute h-[134.22%] left-0 max-w-none top-[-4.69%] w-full" src={imgImage2} />
                                    </div>
                                  </div>
                                  <div className="absolute content-stretch flex items-center justify-center left-[25.02px] p-[0.211px] rounded-[42.179px] size-[8.436px] top-[-9.92px]" data-name="Container" style={{ backgroundImage: "linear-gradient(142.907deg, rgb(236, 238, 240) 4.3056%, rgb(141, 189, 255) 96.042%)" }}>
                                    <div aria-hidden="true" className="absolute border-[0.211px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[42.179px] shadow-[-2.109px_2.109px_5.694px_0px_rgba(255,255,255,0.35),1.265px_1.265px_3.374px_0px_rgba(0,0,0,0.1)]" />
                                    <BackgroundImage4 additionalClassNames="text-[4.808px] text-shadow-[0px_0px_0.422px_white]">1</BackgroundImage4>
                                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.422px_0.422px_1.94px_0px_rgba(0,157,255,0.39)]" />
                                  </div>
                                </div>
                                <BackgroundImageAndText text="Torah" additionalClassNames="w-[50px]" />
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[2.531px] h-[62.5px] items-center justify-center mr-[-22.538px] pb-[5.905px] pt-[6.749px] px-[6.749px] relative rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[52px]">
                                <div aria-hidden="true" className="absolute border-[0.357px] border-solid border-white inset-0 pointer-events-none rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)]" />
                                <div className="content-stretch flex flex-col items-start relative shrink-0">
                                  <div className="h-[36.696px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[40.492px]" data-name="image">
                                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] size-full" src={imgImage3} />
                                  </div>
                                </div>
                                <BackgroundImageAndText text="Dharma" additionalClassNames="w-[48px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#eceef0] content-stretch flex items-center justify-center left-[9.13px] rounded-[7849654.5px] size-[26.201px] top-[9.36px]" data-name="NeuButton">
                  <div className="h-[8.89px] relative shrink-0 w-[9.358px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.35753 8.88965">
                      <g clipPath="url(#clip0_10_438)" id="Icon">
                        <g filter="url(#filter0_di_10_438)" id="Vector">
                          <path d="M1.55964 2.33937H7.79799" stroke="var(--stroke-0, #747474)" strokeLinecap="round" strokeWidth="1.40363" />
                        </g>
                        <g filter="url(#filter1_di_10_438)" id="Vector_2">
                          <path d="M1.55964 6.5503H7.79799" stroke="var(--stroke-0, #747474)" strokeLinecap="round" strokeWidth="1.40363" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.27513" id="filter0_di_10_438" width="9.51349" x="-0.0779243" y="0.701803">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="0.467876" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_438" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_438" mode="normal" result="shape" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.467876" />
                          <feGaussianBlur stdDeviation="0.233938" />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                          <feBlend in2="shape" mode="normal" result="effect2_innerShadow_10_438" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.27513" id="filter1_di_10_438" width="9.51349" x="-0.0779243" y="4.91274">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="0.467876" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_438" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_438" mode="normal" result="shape" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.467876" />
                          <feGaussianBlur stdDeviation="0.233938" />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                          <feBlend in2="shape" mode="normal" result="effect2_innerShadow_10_438" />
                        </filter>
                        <clipPath id="clip0_10_438">
                          <rect fill="white" height="8.88965" width="9.35753" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="blur-[27px] h-[71px] relative w-[72px]" data-name="image 68">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage68} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[24px] top-[302px] w-[128px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="font-['Raleway:Regular',sans-serif] font-normal leading-[1.24] relative text-[12px] text-black text-shadow-[0px_0px_0.468px_white] w-[128px]">
            <p className="mb-0">Choose your lenses</p>
            <p className="mb-0">Shift the angle.</p>
            <p>Shift the meaning</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[459px] items-center justify-center left-1/2 top-[calc(50%+33.5px)] w-[171.308px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white content-stretch flex flex-col h-[459px] items-center justify-center relative w-[171.308px]" data-name="POKAYSYA">
            <div className="h-0 shrink-0 w-full" data-name="Section" />
            <div className="bg-[#eceef0] blur-[0px] content-stretch flex flex-col h-[459px] items-center overflow-clip relative shrink-0 w-full" data-name="div">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-[163.462px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                  <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[8.72px] top-[108px] w-[146.026px]">
                    <div className="h-[85.872px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute bg-[#f8f8f8] border-[0.218px] border-solid border-white h-[71.923px] left-0 rounded-[26.154px] shadow-[0px_1.744px_8.718px_0px_rgba(0,0,0,0.1),0px_0.872px_3.487px_0px_rgba(0,0,0,0.06)] top-[6.97px] w-[33.891px]" data-name="button">
                        <div className="absolute content-stretch flex h-[16.564px] items-center justify-center left-[3.49px] top-[34px] w-[26.481px]" data-name="div">
                          <BackgroundImage6 additionalClassNames="h-[11.728px] w-[26.481px]">
                            <p className="-translate-x-1/2 absolute font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] left-[13.45px] text-[#4d4d4d] text-[4.969px] text-center top-0 w-[20.051px]">Pragmatism</p>
                          </BackgroundImage6>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-center justify-center left-[3.21px] overflow-clip rounded-[43.59px] size-[27.026px] top-[3.49px]" data-name="div">
                          <div className="relative rounded-[43.59px] shrink-0 size-[27.026px]" data-name="img">
                            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg} />
                          </div>
                        </div>
                        <BackgroundImage3 additionalClassNames="bg-[rgba(237,238,240,0.12)] shadow-[0px_1.744px_5.231px_0px_rgba(253,205,184,0.26),0px_1.308px_1.744px_0px_rgba(0,0,0,0.14)]">
                          <div className="h-[2.615px] opacity-70 relative w-[4.795px]" data-name="div">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <div className="h-[2.615px] overflow-clip relative shrink-0 w-full" data-name="svg">
                                <BackgroundImage1 additionalClassNames="left-0 right-[85.71%]" />
                                <BackgroundImage1 additionalClassNames="left-[28.57%] right-[57.14%]" />
                                <BackgroundImage1 additionalClassNames="left-[57.14%] right-[28.57%]" />
                                <BackgroundImage2 additionalClassNames="absolute inset-[37.5%_0_37.5%_85.71%]" />
                                <VectorBackgroundImage additionalClassNames="left-0 right-[85.71%]" />
                                <VectorBackgroundImage additionalClassNames="left-[28.57%] right-[57.14%]" />
                                <VectorBackgroundImage additionalClassNames="left-[57.14%] right-[28.57%]" />
                              </div>
                            </div>
                          </div>
                        </BackgroundImage3>
                      </div>
                      <div className="absolute bg-[#f8f8f8] border-[0.218px] border-solid border-white h-[71.923px] left-[37.38px] rounded-[26.154px] shadow-[0px_1.744px_8.718px_0px_rgba(0,0,0,0.1),0px_0.872px_3.487px_0px_rgba(0,0,0,0.06)] top-[6.97px] w-[33.891px]" data-name="button">
                        <div className="absolute content-stretch flex h-[16.564px] items-center justify-center left-[3.49px] pr-[0.003px] top-[34px] w-[26.481px]" data-name="div">
                          <PBackgroundImageAndText text="Bible" additionalClassNames="w-[17.576px]" />
                        </div>
                        <div className="absolute content-stretch flex flex-col items-center justify-center left-[3.21px] overflow-clip rounded-[43.59px] size-[27.026px] top-[3.49px]" data-name="div">
                          <div className="relative rounded-[43.59px] shrink-0 size-[27.026px]" data-name="img">
                            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg1} />
                          </div>
                        </div>
                        <MotionDivBackgroundImage />
                      </div>
                      <div className="absolute bg-[#f8f8f8] border-[0.218px] border-solid border-white h-[71.923px] left-[74.76px] rounded-[26.154px] shadow-[0px_1.744px_8.718px_0px_rgba(0,0,0,0.1),0px_0.872px_3.487px_0px_rgba(0,0,0,0.06)] top-[6.97px] w-[33.891px]" data-name="button">
                        <div className="absolute content-stretch flex h-[16.564px] items-center justify-center left-[3.49px] top-[34px] w-[26.481px]" data-name="div">
                          <PBackgroundImageAndText text="Populism" additionalClassNames="w-[23.573px]" />
                        </div>
                        <div className="absolute content-stretch flex flex-col items-center justify-center left-[3.21px] overflow-clip rounded-[43.59px] size-[27.026px] top-[3.49px]" data-name="div">
                          <div className="relative rounded-[43.59px] shrink-0 size-[27.026px]" data-name="img">
                            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg2} />
                          </div>
                        </div>
                        <MotionDivBackgroundImage />
                      </div>
                      <div className="absolute bg-[#6a7685] border-[0.218px] border-solid border-white h-[71.923px] left-[112.13px] rounded-[26.154px] shadow-[0px_3.487px_13.077px_0px_rgba(106,118,133,0.4),0px_0.872px_4.359px_0px_rgba(0,0,0,0.15)] top-[6.97px] w-[33.891px]" data-name="button">
                        <div className="absolute content-stretch flex h-[16.564px] items-center justify-center left-[3.49px] top-[34px] w-[26.481px]" data-name="div">
                          <BackgroundImage6 additionalClassNames="h-[11.728px] w-[26.481px]">
                            <p className="-translate-x-1/2 absolute font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] left-[13.28px] text-[4.969px] text-center text-white top-0 w-[22.667px]">Psychology</p>
                          </BackgroundImage6>
                        </div>
                        <div className="absolute left-[3.21px] rounded-[43.59px] size-[27.026px] top-[3.49px]" data-name="div">
                          <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[0.872px] relative rounded-[inherit] size-full">
                            <div className="h-[27.026px] relative rounded-[43.59px] shrink-0 w-[25.282px]" data-name="img">
                              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg3} />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[0.872px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[43.59px]" />
                        </div>
                        <BackgroundImage3 additionalClassNames="bg-[rgba(237,238,240,0.88)]">
                          <DivBackgroundImage />
                        </BackgroundImage3>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10.462px] h-[157.795px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="bg-[rgba(255,255,255,0.15)] h-[16.564px] relative rounded-[21.795px] shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[0.436px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[21.795px]" />
                        <div className="absolute bg-[rgba(255,255,255,0)] border-[0.436px] border-[rgba(255,255,255,0.1)] border-solid h-[15.692px] left-[0.44px] rounded-[21.795px] top-[0.44px] w-[145.154px]" data-name="Container">
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0.872px_0px_rgba(255,255,255,0.4)]" />
                        </div>
                        <div className="absolute bg-[rgba(255,255,255,0)] h-[15.692px] left-[0.44px] rounded-[21.795px] top-[0.44px] w-[145.154px]" data-name="Container">
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_3.487px_0px_rgba(255,255,255,0.25)]" />
                        </div>
                        <div className="absolute h-[12.205px] left-[2.18px] rounded-[26.154px] top-[2.18px] w-[35.417px]" data-name="button">
                          <BackgroundImageAndText1 text="Quotes" additionalClassNames="left-[5.54px] w-[24.332px]" />
                        </div>
                        <div className="absolute h-[12.205px] left-[37.6px] rounded-[26.154px] top-[2.18px] w-[35.417px]" data-name="button">
                          <BackgroundImageAndText1 text="Context" additionalClassNames="left-[3.38px] w-[28.66px]" />
                        </div>
                        <div className="absolute h-[12.205px] left-[73.01px] rounded-[26.154px] top-[2.18px] w-[35.417px]" data-name="button">
                          <BackgroundImageAndText1 text="Practice" additionalClassNames="left-[2.96px] w-[29.488px]" />
                        </div>
                        <div className="absolute h-[12.205px] left-[108.43px] rounded-[26.154px] top-[2.18px] w-[35.417px]" data-name="button">
                          <div className="absolute bg-[#6a7685] h-[12.205px] left-0 rounded-[26.154px] top-0 w-[35.417px]" data-name="motion.div">
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_3.487px_0px_rgba(255,255,255,0.14)]" />
                          </div>
                          <div className="absolute content-stretch flex h-[5.861px] items-start left-[4.6px] px-[3.487px] top-[3.17px] w-[26.212px]" data-name="span">
                            <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] relative shrink-0 text-[4.969px] text-center text-white whitespace-nowrap">Nuances</p>
                          </div>
                        </div>
                      </div>
                      <div className="blur-[0px] content-stretch flex flex-col h-[105.487px] items-start relative shrink-0 w-full" data-name="motion.div">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-[146.026px]" data-name="div">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <BackgroundImage7 additionalClassNames="w-[146.026px]">
                              <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[9.59px] left-0 text-[#37454f] text-[6.103px] top-[-0.22px] w-[145.59px]">Despite acknowledging the potential for growth through solitude, modern psychology also emphasizes that prolonged isolation can have serious negative consequences for mental health. Loneliness is not always perceived as a positive experience, and for many, it becomes a source of fear and anxiety. Thus, paying attention to the negative aspects of loneliness is important for a comprehensive understanding of its impact on individuals.</p>
                            </BackgroundImage7>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[6.974px] h-[61.026px] items-center left-[8.72px] pb-[13.949px] pt-[14.385px] top-[380.54px] w-[146.026px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t-[0.436px] inset-0 pointer-events-none" />
                    <BackgroundImage6 additionalClassNames="h-[6.538px] w-[34.804px]">
                      <p className="absolute font-['Raleway:Bold',sans-serif] font-bold leading-[6.538px] left-0 text-[4.359px] text-[rgba(100,116,139,0.6)] top-[0.22px] tracking-[0.4359px] uppercase whitespace-nowrap">Share</p>
                    </BackgroundImage6>
                    <BackgroundImage7 additionalClassNames="w-[48.821px]">
                      <div className="absolute bg-[#eceef0] content-stretch flex items-center justify-center left-0 rounded-[9.59px] size-[19.179px] top-0" data-name="motion.button">
                        <BackgroundImage9>
                          <g clipPath="url(#clip0_10_434)" id="Send">
                            <path d={svgPaths.p32a55c00} id="Vector" stroke="var(--stroke-0, #708593)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.544872" />
                            <path d={svgPaths.p111a8600} id="Vector_2" stroke="var(--stroke-0, #708593)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.544872" />
                          </g>
                          <defs>
                            <clipPath id="clip0_10_434">
                              <rect fill="white" height="8.71795" width="8.71795" />
                            </clipPath>
                          </defs>
                        </BackgroundImage9>
                      </div>
                      <div className="absolute bg-[#eceef0] content-stretch flex items-center justify-center left-[29.64px] rounded-[9.59px] size-[19.179px] top-0" data-name="motion.button">
                        <BackgroundImage9>
                          <g clipPath="url(#clip0_10_430)" id="LinkIcon">
                            <path d={svgPaths.p2df99c60} id="Vector" stroke="var(--stroke-0, #708593)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.544872" />
                            <path d={svgPaths.p303cf00} id="Vector_2" stroke="var(--stroke-0, #708593)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.544872" />
                          </g>
                          <defs>
                            <clipPath id="clip0_10_430">
                              <rect fill="white" height="8.71795" width="8.71795" />
                            </clipPath>
                          </defs>
                        </BackgroundImage9>
                      </div>
                    </BackgroundImage7>
                  </div>
                  <div className="absolute h-[51.872px] left-[8.72px] top-[6.97px] w-[146.026px]" data-name="Container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}