import clsx from "clsx";
import svgPaths from "./svg-akkcc30wa0";
import imgFrame14108 from "figma:asset/175ccfcddff77938c3a7951e8b2f0f650141d338.png";
import imgImage from "figma:asset/756853304b0bd764759b43c781924d56b7a8de1f.png";
import imgImage1 from "figma:asset/7d61563b5b92614c20b3c4f013a904996cd9f8e9.png";
import imgImage2 from "figma:asset/cab9ef0b0b47ddaa38425e93d689f90437dd1e20.png";
import imgImage3 from "figma:asset/bc0f80af9e2f169067ff5c4851d66b4fda8d39cc.png";
import imgImage68 from "figma:asset/45bf245c189703d3da40cac0b860726abed033fd.png";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="h-[36.274px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[40.492px]" data-name="image">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div style={{ fontFeatureSettings: "'lnum', 'pnum'" }} className={clsx("flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap", additionalClassNames)}>
      <p className="leading-none">{children}</p>
    </div>
  );
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
      <BackgroundImage1 additionalClassNames="text-[5.334px] text-shadow-[0px_0px_0.468px_white]">{text}</BackgroundImage1>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.468px_0.468px_2.152px_0px_rgba(0,157,255,0.39)]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative rounded-[16px] size-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[110.13%] left-[-109.06%] max-w-none top-[-10.13%] w-[233.13%]" src={imgFrame14108} />
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
                            <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[25.265px] relative shrink-0 text-[16.844px] text-black text-center text-shadow-[0px_0px_0.468px_white] uppercase whitespace-nowrap">POKAISYA</p>
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
                                <BackgroundImage2>
                                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px]">
                                    <img alt="" className="absolute h-[123.52%] left-0 max-w-none top-[-0.36%] w-full" src={imgImage} />
                                  </div>
                                </BackgroundImage2>
                                <div className="content-stretch flex flex-col h-[11px] items-center justify-center relative shrink-0 w-[53px]">
                                  <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#222] text-[6.453px] w-[32px]">Bible</p>
                                </div>
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[2.531px] items-center justify-center mr-[-22.538px] pb-[5.905px] pt-[6.749px] px-[6.749px] relative rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-[52.302px]">
                                <div aria-hidden="true" className="absolute border-[0.357px] border-solid border-white inset-0 pointer-events-none rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)]" />
                                <BackgroundImage2>
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] size-full" src={imgImage1} />
                                </BackgroundImage2>
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
                                    <BackgroundImage1 additionalClassNames="text-[4.808px] text-shadow-[0px_0px_0.422px_white]">1</BackgroundImage1>
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
                      <g clipPath="url(#clip0_10_424)" id="Icon">
                        <g filter="url(#filter0_di_10_424)" id="Vector">
                          <path d="M1.55964 2.33937H7.79799" stroke="var(--stroke-0, #747474)" strokeLinecap="round" strokeWidth="1.40363" />
                        </g>
                        <g filter="url(#filter1_di_10_424)" id="Vector_2">
                          <path d="M1.55964 6.5503H7.79799" stroke="var(--stroke-0, #747474)" strokeLinecap="round" strokeWidth="1.40363" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.27513" id="filter0_di_10_424" width="9.51349" x="-0.0779243" y="0.701803">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="0.467876" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_424" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_424" mode="normal" result="shape" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.467876" />
                          <feGaussianBlur stdDeviation="0.233938" />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                          <feBlend in2="shape" mode="normal" result="effect2_innerShadow_10_424" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.27513" id="filter1_di_10_424" width="9.51349" x="-0.0779243" y="4.91274">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="0.467876" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_424" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_424" mode="normal" result="shape" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.467876" />
                          <feGaussianBlur stdDeviation="0.233938" />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                          <feBlend in2="shape" mode="normal" result="effect2_innerShadow_10_424" />
                        </filter>
                        <clipPath id="clip0_10_424">
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
    </div>
  );
}