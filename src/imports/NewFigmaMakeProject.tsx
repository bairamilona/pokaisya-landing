import clsx from "clsx";
import svgPaths from "./svg-g5thednk6q";
import imgImg from "figma:asset/13db5fd9a37ee7a45e1d20d9bdf97fa0b0bf10e4.png";
import imgImg1 from "figma:asset/175ccfcddff77938c3a7951e8b2f0f650141d338.png";
import imgImg2 from "figma:asset/756853304b0bd764759b43c781924d56b7a8de1f.png";
import imgImg3 from "figma:asset/7d61563b5b92614c20b3c4f013a904996cd9f8e9.png";
import imgImg4 from "figma:asset/cab9ef0b0b47ddaa38425e93d689f90437dd1e20.png";
import imgImg5 from "figma:asset/bc0f80af9e2f169067ff5c4851d66b4fda8d39cc.png";
import imgImg6 from "figma:asset/45bf245c189703d3da40cac0b860726abed033fd.png";
import imgImg7 from "figma:asset/4b4c10482b002491005b43e63e329f71011e2c66.png";
import imgImg8 from "figma:asset/a20ef89865c09283f3f46ea0abc331a46eb62af3.png";
import imgImg9 from "figma:asset/7437da122c08b9acde6240fcec51e4b056c9157f.png";
import imgImg10 from "figma:asset/19035830d8f7c0adac35a4589abbb633aefd3cc2.png";
import imgImg11 from "figma:asset/299493191703b329c09d1db8ebd1829a43337604.png";
import { imgVector } from "./svg-wxg35";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(142.907deg, rgb(236, 238, 240) 9.1041%, rgb(141, 189, 255) 91.207%)" }} className="absolute left-[7.04px] rounded-[42.179px] size-[8.43px] top-[-9.91px]">
      {children}
    </div>
  );
}

function ContainerBackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(142.907deg, rgb(236, 238, 240) 9.1041%, rgb(141, 189, 255) 91.207%)" }} className="absolute left-[2.8px] rounded-[46.788px] size-[6.547px] top-[2.34px]">
      {children}
    </div>
  );
}
type GroupVectorBackgroundImage2Props = {
  additionalClassNames?: string;
};

function GroupVectorBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupVectorBackgroundImage2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.14077 3.24762">
        {children}
      </svg>
    </div>
  );
}
type GroupVectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function GroupVectorBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupVectorBackgroundImage1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.14082 3.24762">
        {children}
      </svg>
    </div>
  );
}
type GroupVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function GroupVectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupVectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.14077 3.24761">
        {children}
      </svg>
    </div>
  );
}

function ContainerBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[61.688px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[30.234px] left-0 top-[25px]">
      <p className="absolute font-['Raleway:ExtraBold',sans-serif] font-extrabold leading-[30.24px] left-0 text-[#2e3c46] text-[28px] top-[-0.5px] tracking-[-0.7px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return <BackgroundImage1 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage1>;
}
type PBackgroundImageAndText15Props = {
  text: string;
};

function PBackgroundImageAndText15({ text }: PBackgroundImageAndText15Props) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full">
      <p className="absolute font-['Raleway:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#2e3c46] text-[13px] top-0 tracking-[-0.13px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanBackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText3({ text, additionalClassNames = "" }: SpanBackgroundImageAndText3Props) {
  return (
    <BackgroundImage1 additionalClassNames={clsx("h-[21px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Raleway:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-[rgba(46,60,70,0.22)] top-0 whitespace-nowrap">{text}</p>
    </BackgroundImage1>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-center justify-center p-[0.5px] rounded-[16px] size-[32px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(46,60,70,0.18)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Raleway:Medium','Noto_Sans_Symbols:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(46,60,70,0.38)] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type ABackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ABackgroundImageAndText({ text, additionalClassNames = "" }: ABackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[15px] top-0", additionalClassNames)}>
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(236,238,240,0.25)] top-[0.5px] tracking-[1px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div className={additionalClassNames}>
      <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] relative shrink-0 text-[#4d4d4d] text-[4.969px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return <BackgroundImageAndText2 text={text} additionalClassNames={clsx("absolute content-stretch flex flex-col items-start top-[35.53px]", additionalClassNames)} />;
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return <BackgroundImageAndText2 text={text} additionalClassNames={clsx("absolute content-stretch flex h-[5.867px] items-start top-0", additionalClassNames)} />;
}

function ContainerBackgroundImage4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.625px] items-start left-0 top-0 w-[128px]">
      <PBackgroundImageAndText14 text="Choose your lenses" />
      <PBackgroundImageAndText14 text="Shift the angle." />
      <PBackgroundImageAndText14 text="Shift the meaning" />
    </div>
  );
}
type PBackgroundImageAndText14Props = {
  text: string;
};

function PBackgroundImageAndText14({ text }: PBackgroundImageAndText14Props) {
  return (
    <div className="content-stretch flex h-[14.875px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Raleway:Regular',sans-serif] font-normal leading-[14.88px] min-h-px min-w-px relative text-[12px] text-black">{text}</p>
    </div>
  );
}

function ImgBackgroundImage5() {
  return (
    <div className="absolute blur-[27px] h-[71px] left-0 top-0 w-[72px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg6} />
    </div>
  );
}
type VectorBackgroundImage2Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage2({ additionalClassNames = "" }: VectorBackgroundImage2Props) {
  return (
    <div className="absolute contents inset-[73.68%_16.67%_26.32%_16.67%]">
      <VectorBackgroundImage1 additionalClassNames="inset-[73.68%_16.67%_26.32%_16.67%] mask-position-[-1.559px_-6.545px]" />
    </div>
  );
}
type VectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage1({ additionalClassNames = "" }: VectorBackgroundImage1Props) {
  return (
    <div style={{ maskImage: `url('${imgVector}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[9.352px_8.883px]", additionalClassNames)}>
      <div className="absolute inset-[-0.7px_-11.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.63701 1.40264">
          <path d="M0.701321 0.701321H6.93569" id="Vector" stroke="var(--stroke-0, #747474)" strokeLinecap="round" strokeWidth="1.40264" />
        </svg>
      </div>
    </div>
  );
}

function VectorBackgroundImage() {
  return (
    <div className="absolute contents inset-[26.32%_16.67%_73.68%_16.67%]">
      <VectorBackgroundImage1 additionalClassNames="inset-[26.32%_16.67%_73.68%_16.67%] mask-position-[-1.559px_-2.337px]" />
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ additionalClassNames = "" }: ContainerBackgroundImage3Props) {
  return (
    <div className="absolute h-[10px] left-[2px] top-[46.28px] w-[48px]">
      <PBackgroundImageAndText13 text="Dharma" additionalClassNames="left-[11.93px] w-[24.141px]" />
    </div>
  );
}

function ImgBackgroundImage4() {
  return (
    <div className="h-[36.695px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] size-full" src={imgImg5} />
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ additionalClassNames = "" }: ContainerBackgroundImage2Props) {
  return (
    <div className="absolute h-[10px] left-[1.5px] top-[46.28px] w-[50px]">
      <PBackgroundImageAndText13 text="Torah" additionalClassNames="left-[16.46px] w-[17.078px]" />
    </div>
  );
}
type PBackgroundImageAndText13Props = {
  text: string;
  additionalClassNames?: string;
};

function PBackgroundImageAndText13({ text, additionalClassNames = "" }: PBackgroundImageAndText13Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[7.5px] items-start top-[1.25px]", additionalClassNames)}>
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#222] text-[6.453px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[42.179px] size-[8.43px] top-0">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.422px_0.422px_1.94px_0px_rgba(0,157,255,0.39)]" />
    </div>
  );
}
type PBackgroundImageAndText12Props = {
  text: string;
};

function PBackgroundImageAndText12({ text }: PBackgroundImageAndText12Props) {
  return (
    <BackgroundImage additionalClassNames="h-[4.805px] w-[2.234px]">
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[4.808px] left-0 text-[4.808px] text-black top-[0.5px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}

function ImgBackgroundImage3() {
  return (
    <div className="h-[49.25px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg4} />
    </div>
  );
}

function ImgBackgroundImage2() {
  return (
    <div className="h-[36.273px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] size-full" src={imgImg3} />
    </div>
  );
}
type PBackgroundImageAndText11Props = {
  text: string;
  additionalClassNames?: string;
};

function PBackgroundImageAndText11({ text, additionalClassNames = "" }: PBackgroundImageAndText11Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[7.5px] items-start top-[1.75px]", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#222] text-[6.453px]">{text}</p>
    </div>
  );
}

function ImgBackgroundImage1() {
  return (
    <div className="h-[44.805px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}
type PBackgroundImageAndText10Props = {
  text: string;
};

function PBackgroundImageAndText10({ text }: PBackgroundImageAndText10Props) {
  return (
    <div className="absolute h-[5.617px] left-0 top-[4.67px] w-[24.453px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[5.615px] left-[12.5px] text-[#626b72] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText9Props = {
  text: string;
};

function PBackgroundImageAndText9({ text }: PBackgroundImageAndText9Props) {
  return (
    <div className="absolute h-[5.617px] left-0 top-0 w-[54.102px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[5.615px] left-[26.97px] text-[#626b72] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText8Props = {
  text: string;
};

function PBackgroundImageAndText8({ text }: PBackgroundImageAndText8Props) {
  return (
    <div className="absolute h-[5.617px] left-[3.16px] top-[2.7px] w-[5.688px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[5.615px] left-[3px] text-[#626b72] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText7Props = {
  text: string;
};

function PBackgroundImageAndText7({ text }: PBackgroundImageAndText7Props) {
  return (
    <div className="absolute h-[5.617px] left-[11.22px] top-[2.8px] w-[23.758px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[5.615px] left-[12px] text-[#626b72] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText6Props = {
  text: string;
};

function PBackgroundImageAndText6({ text }: PBackgroundImageAndText6Props) {
  return (
    <div className="absolute h-[5.617px] left-[2.8px] top-[2.8px] w-[35.109px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[5.615px] left-[18px] text-[#626b72] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[46.788px] size-[6.547px] top-0">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.468px_0.468px_2.152px_0px_rgba(0,157,255,0.39)]" />
    </div>
  );
}
type PBackgroundImageAndText5Props = {
  text: string;
};

function PBackgroundImageAndText5({ text }: PBackgroundImageAndText5Props) {
  return (
    <BackgroundImage additionalClassNames="h-[5.336px] w-[2.477px]">
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[5.334px] left-0 text-[5.334px] text-black top-[-0.5px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}
type PBackgroundImageAndText4Props = {
  text: string;
};

function PBackgroundImageAndText4({ text }: PBackgroundImageAndText4Props) {
  return (
    <div className="absolute h-[5.617px] left-[11.22px] top-[2.8px] w-[24.086px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[5.615px] left-[12.5px] text-[#626b72] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText3Props = {
  text: string;
};

function PBackgroundImageAndText3({ text }: PBackgroundImageAndText3Props) {
  return (
    <div className="absolute h-[5.617px] left-[70.9px] top-0 w-[9.5px]">
      <p className="-translate-x-1/2 absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[5.615px] left-[5px] text-[#c5c5c5] text-[5.615px] text-center top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ImgBackgroundImage() {
  return (
    <div className="h-[397.563px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
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
  return <BackgroundImage2 additionalClassNames={additionalClassNames}>{text}</BackgroundImage2>;
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

export default function NewFigmaMakeProject() {
  return (
    <div className="bg-white relative size-full" data-name="New Figma Make Project">
      <div className="absolute h-[1198px] left-0 top-0 w-[1677px]" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1677 1198\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -50 -90 0 838.5 0)\\'><stop stop-color=\\'rgba(255,255,255,0.18)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,128,128,0.09)\\' offset=\\'0.3\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1677 1198\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -40 -70 0 167.7 1198)\\'><stop stop-color=\\'rgba(255,255,255,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.55\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(227, 229, 231) 0%, rgb(227, 229, 231) 100%)" }} />
      <div className="absolute bg-[#eceef0] content-stretch flex flex-col h-[1198px] items-start left-0 top-0 w-[1677px]" data-name="Body">
        <div className="h-[7467px] overflow-clip relative shrink-0 w-full" data-name="div">
          <div className="absolute h-[2935px] left-0 top-[1198px] w-[1677px]" data-name="div" style={{ backgroundImage: "linear-gradient(rgba(236, 238, 240, 0.55) 0%, rgba(236, 238, 240, 0) 24.038%, rgba(236, 238, 240, 0) 49.519%, rgba(220, 227, 235, 0.9) 75.481%, rgba(220, 227, 235, 0) 100%)" }}>
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
                          <BackgroundImage2 additionalClassNames="w-[487.359px]">{`Describe — what's happening`}</BackgroundImage2>
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
                          <BackgroundImage2 additionalClassNames="w-[479.547px]">{`Values & habits`}</BackgroundImage2>
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
          <div className="absolute h-[15px] left-[498.5px] top-[1278px] w-[680px]" data-name="motion.p">
            <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.32)] top-[0.5px] tracking-[2.2px] uppercase whitespace-nowrap">The App</p>
          </div>
          <div className="absolute bg-[#eceef0] h-[362px] left-[659.5px] overflow-clip rounded-[28px] shadow-[0px_2px_4px_0px_rgba(46,60,70,0.04),0px_8px_32px_0px_rgba(46,60,70,0.1),0px_32px_80px_0px_rgba(46,60,70,0.07)] top-[1341px] w-[171px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col h-[361px] items-start left-[0.5px] overflow-clip top-[0.5px] w-[170px]" data-name="Container">
              <div className="h-[361px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[361px] items-start left-0 overflow-clip pl-[-185.398px] pr-[-40.922px] pt-[-36.563px] rounded-[16px] top-0 w-[170px]" data-name="Container">
                  <ImgBackgroundImage />
                </div>
                <div className="absolute content-stretch flex h-[362px] items-center justify-center left-0 top-0 w-[170px]" data-name="Container">
                  <BackgroundImage additionalClassNames="bg-[#eceef0] h-[362px] w-[170px]">
                    <div className="absolute h-[362px] left-0 top-0 w-[170px]" data-name="Container">
                      <div className="absolute h-[266.82px] left-[9.35px] top-[30.33px] w-[151.297px]" data-name="Container">
                        <div className="absolute h-[87px] left-0 top-0 w-[151.297px]" data-name="Container">
                          <div className="absolute h-[34.609px] left-[30.76px] top-[18.71px] w-[89.789px]" data-name="Container">
                            <div className="absolute h-[25.266px] left-[4.67px] top-[4.67px] w-[80.445px]" data-name="p">
                              <p className="-translate-x-1/2 absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.265px] left-[40.5px] text-[16.844px] text-black text-center top-[-0.5px] uppercase whitespace-nowrap">POKAISYA</p>
                            </div>
                          </div>
                          <div className="absolute h-[22.453px] left-0 top-[57.06px] w-[151.297px]" data-name="Container">
                            <div className="absolute h-[22.453px] left-0 top-0 w-[151.297px]" data-name="Container">
                              <div className="absolute h-[22.453px] left-[12.72px] top-0 w-[125.852px]" data-name="p">
                                <p className="-translate-x-1/2 absolute font-['Raleway:Regular',sans-serif] font-normal leading-[11.229px] left-[63.23px] text-[#37454f] text-[7.486px] text-center top-0 w-[107px]">Enter your question or topic for reflection</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[60.805px] left-0 top-[98px] w-[151.297px]" data-name="Container">
                          <div className="absolute bg-[rgba(255,255,255,0.25)] h-[28.992px] left-0 rounded-[15.908px] shadow-[-8.422px_-8.422px_42.951px_0px_rgba(255,233,232,0.5)] top-0 w-[151.297px]" data-name="Container">
                            <div className="absolute content-stretch flex flex-col items-start left-0 px-[23px] py-[9px] top-0 w-[151.297px]" data-name="Container">
                              <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
                                <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[9.513px] relative shrink-0 text-[#4c565f] text-[7.318px] whitespace-nowrap">When is the end of the world?</p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[5.617px] left-0 top-[36.48px] w-[151.297px]" data-name="Container">
                            <div className="absolute h-[5.617px] left-0 top-0 w-[151.297px]" data-name="Container">
                              <PBackgroundImageAndText3 text="2/4" />
                            </div>
                          </div>
                          <div className="absolute h-[11.227px] left-[7.14px] top-[49.58px] w-[137.023px]" data-name="Container">
                            <div className="absolute bg-[rgba(0,0,0,0.03)] h-[11.227px] left-[98.91px] rounded-[9.358px] top-0 w-[38.109px]" data-name="Container">
                              <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[11.227px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_rgba(255,255,255,0.7),0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[38.109px]" data-name="Container" />
                              <PBackgroundImageAndText4 text="Religious" />
                              <ContainerBackgroundImage6>
                                <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid left-0 rounded-[46.788px] shadow-[-2.339px_2.339px_6.316px_0px_rgba(255,255,255,0.35),1.404px_1.404px_3.743px_0px_rgba(0,0,0,0.1)] size-[6.547px] top-0" data-name="Container" />
                                <div className="absolute content-stretch flex flex-col h-[5.336px] items-start justify-center left-[2.04px] top-[0.6px] w-[2.477px]" data-name="Container">
                                  <PBackgroundImageAndText5 text="1" />
                                </div>
                                <ContainerBackgroundImage />
                              </ContainerBackgroundImage6>
                            </div>
                            <div className="absolute bg-[rgba(255,255,255,0.49)] h-[11.227px] left-[55.39px] rounded-[9.358px] top-0 w-[40.719px]" data-name="Container">
                              <div className="absolute h-[11.227px] left-0 overflow-clip rounded-[9.358px] top-0 w-[40.719px]" data-name="Container">
                                <PBackgroundImageAndText6 text="Philosophical" />
                              </div>
                              <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.09)] border-solid h-[11.227px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_white,0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[40.719px]" data-name="Container" />
                            </div>
                            <div className="absolute bg-[rgba(0,0,0,0.03)] h-[11.227px] left-[14.8px] rounded-[9.358px] top-0 w-[37.781px]" data-name="Container">
                              <div className="absolute h-[11.227px] left-0 overflow-clip rounded-[9.358px] top-0 w-[37.781px]" data-name="Container">
                                <PBackgroundImageAndText7 text="Scientific" />
                                <ContainerBackgroundImage6>
                                  <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid left-0 rounded-[46.788px] shadow-[-2.339px_2.339px_6.316px_0px_rgba(255,255,255,0.35),1.404px_1.404px_3.743px_0px_rgba(0,0,0,0.1)] size-[6.547px] top-0" data-name="Container" />
                                  <div className="absolute content-stretch flex flex-col h-[5.336px] items-start justify-center left-[2.04px] top-[0.6px] w-[2.477px]" data-name="Container">
                                    <PBackgroundImageAndText5 text="1" />
                                  </div>
                                  <ContainerBackgroundImage />
                                </ContainerBackgroundImage6>
                              </div>
                              <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[11.227px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_rgba(255,255,255,0.7),0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[37.781px]" data-name="Container" />
                            </div>
                            <div className="absolute bg-[rgba(255,255,255,0.49)] h-[11px] left-0 rounded-[9.358px] top-0 w-[12px]" data-name="Container">
                              <div className="absolute h-[11px] left-0 overflow-clip rounded-[9.358px] top-0 w-[12px]" data-name="Container">
                                <PBackgroundImageAndText8 text="&nbsp;" />
                              </div>
                              <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.09)] border-solid h-[11px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_white,0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[12px]" data-name="Container" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[84.016px] left-0 top-[169.8px] w-[151.297px]" data-name="Container">
                          <div className="absolute h-[84.016px] left-[4.65px] top-0 w-[142px]" data-name="Container">
                            <div className="absolute h-[10.289px] left-0 top-0 w-[142px]" data-name="Container">
                              <div className="absolute h-[5.617px] left-[87.9px] top-[2.34px] w-[54.102px]" data-name="Container">
                                <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.5px] border-solid h-[5.617px] left-0 top-0 w-[54.102px]" data-name="Container" />
                                <PBackgroundImageAndText9 text="&nbsp;" />
                              </div>
                              <div className="absolute h-[10.289px] left-[58.77px] top-0 w-[24.453px]" data-name="Container">
                                <PBackgroundImageAndText10 text="Religious" />
                              </div>
                              <div className="absolute h-[5.617px] left-0 top-[2.34px] w-[54.102px]" data-name="Container">
                                <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.5px] border-solid h-[5.617px] left-0 top-0 w-[54.102px]" data-name="Container" />
                                <PBackgroundImageAndText9 text="&nbsp;" />
                              </div>
                            </div>
                            <div className="absolute h-[62.5px] left-0 top-[21.52px] w-[142px]" data-name="Container">
                              <div className="absolute bg-[#f8f8f8] h-[62.438px] left-[89.7px] rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[52.297px]" data-name="Container">
                                <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.438px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[52.297px]" data-name="Container" />
                                <div className="absolute h-[36.273px] left-[5.91px] top-[6.74px] w-[40.484px]" data-name="Container">
                                  <div className="absolute content-stretch flex flex-col h-[36.273px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                    <div className="content-stretch flex flex-col h-[36.273px] items-start overflow-clip pt-[-0.125px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-full" data-name="Container">
                                      <ImgBackgroundImage1 />
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute h-[11px] left-[-0.35px] top-[45.54px] w-[53px]" data-name="Container">
                                  <PBackgroundImageAndText11 text="Bible" additionalClassNames="left-[10.5px] w-[32px]" />
                                </div>
                              </div>
                              <div className="absolute bg-[#f8f8f8] h-[62.438px] left-[59.94px] rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[52.297px]" data-name="Container">
                                <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.438px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[52.297px]" data-name="Container" />
                                <div className="absolute h-[36.273px] left-[5.91px] top-[6.74px] w-[40.484px]" data-name="Container">
                                  <div className="absolute content-stretch flex flex-col h-[36.273px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                    <ImgBackgroundImage2 />
                                  </div>
                                </div>
                                <div className="absolute h-[11px] left-[4.15px] top-[45.54px] w-[44px]" data-name="Container">
                                  <PBackgroundImageAndText11 text="Quran" additionalClassNames="left-[8.5px] w-[27px]" />
                                </div>
                              </div>
                              <div className="absolute bg-[#f8f8f8] h-[62.5px] left-[29.47px] rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[53px]" data-name="Container">
                                <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.5px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[53px]" data-name="Container" />
                                <div className="absolute h-[36.695px] left-[6.26px] top-[7.06px] w-[40.484px]" data-name="Container">
                                  <div className="absolute content-stretch flex flex-col h-[36.695px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                    <div className="content-stretch flex flex-col h-[36.695px] items-start overflow-clip pt-[-1.719px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-full" data-name="Container">
                                      <ImgBackgroundImage3 />
                                    </div>
                                  </div>
                                  <BackgroundImage3>
                                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid left-0 rounded-[42.179px] shadow-[-2.109px_2.109px_5.694px_0px_rgba(255,255,255,0.35),1.265px_1.265px_3.374px_0px_rgba(0,0,0,0.1)] size-[8.43px] top-0" data-name="Container" />
                                    <div className="absolute content-stretch flex flex-col h-[4.805px] items-start justify-center left-[3.1px] top-[1.81px] w-[2.234px]" data-name="Container">
                                      <PBackgroundImageAndText12 text="1" />
                                    </div>
                                    <ContainerBackgroundImage1 />
                                  </BackgroundImage3>
                                </div>
                                <ContainerBackgroundImage2 />
                              </div>
                              <div className="absolute bg-[#f8f8f8] h-[62.5px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[52px]" data-name="Container">
                                <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.5px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[52px]" data-name="Container" />
                                <div className="absolute h-[36.695px] left-[5.76px] top-[7.06px] w-[40.484px]" data-name="Container">
                                  <div className="absolute content-stretch flex flex-col h-[36.695px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                    <ImgBackgroundImage4 />
                                  </div>
                                </div>
                                <ContainerBackgroundImage3 />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#eceef0] left-[134.68px] rounded-[7849650px] size-[26.195px] top-[9.36px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col h-[8.883px] items-start left-[8.42px] top-[8.66px] w-[9.352px]" data-name="Container">
                          <div className="h-[8.883px] overflow-clip relative shrink-0 w-full" data-name="svg">
                            <div className="absolute contents inset-0" data-name="Clip path group">
                              <div className="absolute contents inset-[26.32%_16.67%]" data-name="Icon">
                                <VectorBackgroundImage />
                                <VectorBackgroundImage2 />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage>
                </div>
                <div className="absolute h-[71px] left-[98px] top-[362px] w-[72px]" data-name="Container">
                  <ImgBackgroundImage5 />
                </div>
                <div className="absolute h-[44.625px] left-[24px] top-[302px] w-[128px]" data-name="Container">
                  <ContainerBackgroundImage4 />
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(46,60,70,0.12)] h-[6px] left-[59.5px] rounded-[4px] top-[10.5px] w-[52px]" data-name="Container" />
          </div>
          <div className="absolute bg-[#eceef0] h-[362px] left-[846.5px] overflow-clip rounded-[28px] shadow-[0px_2px_4px_0px_rgba(46,60,70,0.04),0px_8px_32px_0px_rgba(46,60,70,0.1),0px_32px_80px_0px_rgba(46,60,70,0.07)] top-[1373px] w-[171px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col h-[361px] items-start left-[0.5px] overflow-clip top-[0.5px] w-[170px]" data-name="Container">
              <div className="h-[361px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[361px] items-start left-0 overflow-clip pl-[-185.398px] pr-[-40.922px] pt-[-36.563px] rounded-[16px] top-0 w-[170px]" data-name="Container">
                  <ImgBackgroundImage />
                </div>
                <div className="absolute content-stretch flex h-[362px] items-center justify-center left-0 top-0 w-[170px]" data-name="Container">
                  <BackgroundImage additionalClassNames="bg-[#eceef0] h-[362px] w-[170px]">
                    <div className="absolute h-[362px] left-0 top-0 w-[170px]" data-name="Container">
                      <div className="absolute h-[354.516px] left-[9.35px] top-[7.48px] w-[151.297px]" data-name="Container">
                        <div className="absolute h-[354.516px] left-0 top-0 w-[151.297px]" data-name="Container">
                          <div className="absolute h-[266.82px] left-0 top-[22.84px] w-[151.297px]" data-name="Container">
                            <div className="absolute h-[60.805px] left-0 top-[98px] w-[151.297px]" data-name="Container">
                              <div className="absolute bg-[rgba(255,255,255,0.25)] h-[28.992px] left-0 rounded-[15.908px] shadow-[-8.422px_-8.422px_42.951px_0px_rgba(255,233,232,0.5)] top-0 w-[151.297px]" data-name="Container" />
                              <div className="absolute h-[5.617px] left-0 top-[36.48px] w-[151.297px]" data-name="Container">
                                <div className="absolute h-[5.617px] left-0 top-0 w-[151.297px]" data-name="Container">
                                  <PBackgroundImageAndText3 text="2/4" />
                                </div>
                              </div>
                              <div className="absolute h-[11.227px] left-[7.14px] top-[49.58px] w-[137.023px]" data-name="Container">
                                <div className="absolute bg-[rgba(0,0,0,0.03)] h-[11.227px] left-[98.91px] rounded-[9.358px] top-0 w-[38.109px]" data-name="Container">
                                  <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[11.227px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_rgba(255,255,255,0.7),0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[38.109px]" data-name="Container" />
                                  <PBackgroundImageAndText4 text="Religious" />
                                  <ContainerBackgroundImage6>
                                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid left-0 rounded-[46.788px] shadow-[-2.339px_2.339px_6.316px_0px_rgba(255,255,255,0.35),1.404px_1.404px_3.743px_0px_rgba(0,0,0,0.1)] size-[6.547px] top-0" data-name="Container" />
                                    <div className="absolute content-stretch flex flex-col h-[5.336px] items-start justify-center left-[2.04px] top-[0.6px] w-[2.477px]" data-name="Container">
                                      <PBackgroundImageAndText5 text="1" />
                                    </div>
                                    <ContainerBackgroundImage />
                                  </ContainerBackgroundImage6>
                                </div>
                                <div className="absolute bg-[rgba(255,255,255,0.49)] h-[11.227px] left-[55.39px] rounded-[9.358px] top-0 w-[40.719px]" data-name="Container">
                                  <div className="absolute h-[11.227px] left-0 overflow-clip rounded-[9.358px] top-0 w-[40.719px]" data-name="Container">
                                    <PBackgroundImageAndText6 text="Philosophical" />
                                  </div>
                                  <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.09)] border-solid h-[11.227px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_white,0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[40.719px]" data-name="Container" />
                                </div>
                                <div className="absolute bg-[rgba(0,0,0,0.03)] h-[11.227px] left-[14.8px] rounded-[9.358px] top-0 w-[37.781px]" data-name="Container">
                                  <div className="absolute h-[11.227px] left-0 overflow-clip rounded-[9.358px] top-0 w-[37.781px]" data-name="Container">
                                    <PBackgroundImageAndText7 text="Scientific" />
                                    <ContainerBackgroundImage6>
                                      <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid left-0 rounded-[46.788px] shadow-[-2.339px_2.339px_6.316px_0px_rgba(255,255,255,0.35),1.404px_1.404px_3.743px_0px_rgba(0,0,0,0.1)] size-[6.547px] top-0" data-name="Container" />
                                      <div className="absolute content-stretch flex flex-col h-[5.336px] items-start justify-center left-[2.04px] top-[0.6px] w-[2.477px]" data-name="Container">
                                        <PBackgroundImageAndText5 text="1" />
                                      </div>
                                      <ContainerBackgroundImage />
                                    </ContainerBackgroundImage6>
                                  </div>
                                  <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[11.227px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_rgba(255,255,255,0.7),0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[37.781px]" data-name="Container" />
                                </div>
                                <div className="absolute bg-[rgba(255,255,255,0.49)] h-[11px] left-0 rounded-[9.358px] top-0 w-[12px]" data-name="Container">
                                  <div className="absolute h-[11px] left-0 overflow-clip rounded-[9.358px] top-0 w-[12px]" data-name="Container">
                                    <PBackgroundImageAndText8 text="&nbsp;" />
                                  </div>
                                  <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.09)] border-solid h-[11px] left-0 rounded-[9.358px] shadow-[0px_1.872px_9.825px_0px_white,0px_0px_0.468px_0px_rgba(0,0,0,0.03)] top-0 w-[12px]" data-name="Container" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute h-[84.016px] left-0 top-[169.8px] w-[151.297px]" data-name="Container">
                              <div className="absolute h-[84.016px] left-[4.65px] top-0 w-[142px]" data-name="Container">
                                <div className="absolute h-[10.289px] left-0 top-0 w-[142px]" data-name="Container">
                                  <div className="absolute h-[5.617px] left-[87.9px] top-[2.34px] w-[54.102px]" data-name="Container">
                                    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.5px] border-solid h-[5.617px] left-0 top-0 w-[54.102px]" data-name="Container" />
                                    <PBackgroundImageAndText9 text="&nbsp;" />
                                  </div>
                                  <div className="absolute h-[10.289px] left-[58.77px] top-0 w-[24.453px]" data-name="Container">
                                    <PBackgroundImageAndText10 text="Religious" />
                                  </div>
                                  <div className="absolute h-[5.617px] left-0 top-[2.34px] w-[54.102px]" data-name="Container">
                                    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.5px] border-solid h-[5.617px] left-0 top-0 w-[54.102px]" data-name="Container" />
                                    <PBackgroundImageAndText9 text="&nbsp;" />
                                  </div>
                                </div>
                                <div className="absolute h-[62.5px] left-0 top-[21.52px] w-[142px]" data-name="Container">
                                  <div className="absolute bg-[#f8f8f8] h-[62.438px] left-[89.7px] rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[52.297px]" data-name="Container">
                                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.438px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[52.297px]" data-name="Container" />
                                    <div className="absolute h-[36.273px] left-[5.91px] top-[6.74px] w-[40.484px]" data-name="Container">
                                      <div className="absolute content-stretch flex flex-col h-[36.273px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                        <div className="content-stretch flex flex-col h-[36.273px] items-start overflow-clip pt-[-0.125px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-full" data-name="Container">
                                          <ImgBackgroundImage1 />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[11px] left-[-0.35px] top-[45.54px] w-[53px]" data-name="Container">
                                      <PBackgroundImageAndText11 text="Bible" additionalClassNames="left-[10.5px] w-[32px]" />
                                    </div>
                                  </div>
                                  <div className="absolute bg-[#f8f8f8] h-[62.438px] left-[59.94px] rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[52.297px]" data-name="Container">
                                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.438px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[52.297px]" data-name="Container" />
                                    <div className="absolute h-[36.273px] left-[5.91px] top-[6.74px] w-[40.484px]" data-name="Container">
                                      <div className="absolute content-stretch flex flex-col h-[36.273px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                        <ImgBackgroundImage2 />
                                      </div>
                                    </div>
                                    <div className="absolute h-[11px] left-[4.15px] top-[45.54px] w-[44px]" data-name="Container">
                                      <PBackgroundImageAndText11 text="Quran" additionalClassNames="left-[8.5px] w-[27px]" />
                                    </div>
                                  </div>
                                  <div className="absolute bg-[#f8f8f8] h-[62.5px] left-[29.47px] rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[53px]" data-name="Container">
                                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.5px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[53px]" data-name="Container" />
                                    <div className="absolute h-[36.695px] left-[6.26px] top-[7.06px] w-[40.484px]" data-name="Container">
                                      <div className="absolute content-stretch flex flex-col h-[36.695px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                        <div className="content-stretch flex flex-col h-[36.695px] items-start overflow-clip pt-[-1.719px] relative rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] shrink-0 w-full" data-name="Container">
                                          <ImgBackgroundImage3 />
                                        </div>
                                      </div>
                                      <BackgroundImage3>
                                        <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-[rgba(0,0,0,0.05)] border-solid left-0 rounded-[42.179px] shadow-[-2.109px_2.109px_5.694px_0px_rgba(255,255,255,0.35),1.265px_1.265px_3.374px_0px_rgba(0,0,0,0.1)] size-[8.43px] top-0" data-name="Container" />
                                        <div className="absolute content-stretch flex flex-col h-[4.805px] items-start justify-center left-[3.1px] top-[1.81px] w-[2.234px]" data-name="Container">
                                          <PBackgroundImageAndText12 text="1" />
                                        </div>
                                        <ContainerBackgroundImage1 />
                                      </BackgroundImage3>
                                    </div>
                                    <ContainerBackgroundImage2 />
                                  </div>
                                  <div className="absolute bg-[#f8f8f8] h-[62.5px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[52px]" data-name="Container">
                                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.5px] border-solid border-white h-[62.5px] left-0 rounded-bl-[10.123px] rounded-br-[10.123px] rounded-tl-[37.961px] rounded-tr-[37.961px] shadow-[-4.644px_0px_10.718px_0px_rgba(255,255,255,0.5),4.644px_0px_10.718px_0px_rgba(0,0,0,0.25)] top-0 w-[52px]" data-name="Container" />
                                    <div className="absolute h-[36.695px] left-[5.76px] top-[7.06px] w-[40.484px]" data-name="Container">
                                      <div className="absolute content-stretch flex flex-col h-[36.695px] items-start left-0 rounded-bl-[1.265px] rounded-br-[1.265px] rounded-tl-[37.961px] rounded-tr-[37.961px] top-0 w-[40.484px]" data-name="Container">
                                        <ImgBackgroundImage4 />
                                      </div>
                                    </div>
                                    <ContainerBackgroundImage3 />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#eceef0] left-[134.68px] rounded-[7849650px] size-[26.195px] top-[9.36px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col h-[8.883px] items-start left-[8.42px] top-[8.66px] w-[9.352px]" data-name="Container">
                          <div className="h-[8.883px] overflow-clip relative shrink-0 w-full" data-name="svg">
                            <div className="absolute contents inset-0" data-name="Clip path group">
                              <div className="absolute contents inset-[26.32%_16.67%]" data-name="Icon">
                                <VectorBackgroundImage />
                                <VectorBackgroundImage2 />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage>
                </div>
                <div className="absolute h-[71px] left-[98px] top-[362px] w-[72px]" data-name="Container">
                  <ImgBackgroundImage5 />
                </div>
                <div className="absolute h-[44.625px] left-[24px] top-[302px] w-[128px]" data-name="Container">
                  <ContainerBackgroundImage4 />
                </div>
                <div className="absolute h-[459px] left-[-0.65px] top-[-15.5px] w-[171.305px]" data-name="Container">
                  <div className="absolute bg-white h-[459px] left-0 top-0 w-[171.305px]" data-name="Container">
                    <div className="absolute h-0 left-0 top-0 w-[171.305px]" data-name="Container" />
                    <div className="absolute bg-[#eceef0] blur-[0px] h-[459px] left-0 overflow-clip top-0 w-[171.305px]" data-name="Container">
                      <div className="absolute h-[459px] left-[3.92px] overflow-clip top-0 w-[163.461px]" data-name="Container">
                        <div className="absolute h-[253.656px] left-[8.72px] top-[108px] w-[146.023px]" data-name="Container">
                          <div className="absolute h-[85.867px] left-0 top-0 w-[146.023px]" data-name="Container">
                            <div className="absolute bg-[#f8f8f8] border-[0.5px] border-solid border-white h-[55px] left-[112.02px] rounded-[26.154px] shadow-[0px_1.744px_8.718px_0px_rgba(0,0,0,0.1),0px_0.872px_3.487px_0px_rgba(0,0,0,0.06)] top-[6.97px] w-[34px]" data-name="Container">
                              <BackgroundImageAndText1 text="Pragmatism" additionalClassNames="left-[2.38px] w-[29px]" />
                              <div className="absolute left-[3.38px] overflow-clip rounded-[43.59px] size-[27.023px] top-[3.53px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col items-start left-0 rounded-[43.59px] size-[27.023px] top-0" data-name="Container">
                                  <div className="h-[27.023px] relative rounded-[43.59px] shrink-0 w-full" data-name="img">
                                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg7} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-[#f8f8f8] border-[0.5px] border-solid border-white h-[55px] left-[75.02px] rounded-[26.154px] shadow-[0px_1.744px_8.718px_0px_rgba(0,0,0,0.1),0px_0.872px_3.487px_0px_rgba(0,0,0,0.06)] top-[6.97px] w-[34px]" data-name="Container">
                              <BackgroundImageAndText1 text="Bible" additionalClassNames="left-[9.75px] w-[13px]" />
                              <div className="absolute left-[2.66px] overflow-clip rounded-[43.59px] size-[27.023px] top-[3.48px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col items-start left-0 rounded-[43.59px] size-[27.023px] top-0" data-name="Container">
                                  <div className="h-[27.023px] relative rounded-[43.59px] shrink-0 w-full" data-name="img">
                                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg8} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-[#f8f8f8] border-[0.5px] border-solid border-white h-[55px] left-[37.02px] rounded-[26.154px] shadow-[0px_1.744px_8.718px_0px_rgba(0,0,0,0.1),0px_0.872px_3.487px_0px_rgba(0,0,0,0.06)] top-[6.97px] w-[34px]" data-name="Container">
                              <BackgroundImageAndText1 text="Populism" additionalClassNames="left-[5.14px] w-[23px]" />
                              <div className="absolute left-[2.66px] overflow-clip rounded-[43.59px] size-[27.023px] top-[3.48px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col items-start left-0 rounded-[43.59px] size-[27.023px] top-0" data-name="Container">
                                  <div className="h-[27.023px] relative rounded-[43.59px] shrink-0 w-full" data-name="img">
                                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg9} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-[#6a7685] border-[0.5px] border-solid border-white h-[55px] left-[0.02px] rounded-[26.154px] shadow-[0px_3.487px_13.077px_0px_rgba(106,118,133,0.4),0px_0.872px_4.359px_0px_rgba(0,0,0,0.15)] top-[6.97px] w-[34px]" data-name="Container">
                              <div className="absolute content-stretch flex flex-col items-start left-[2.5px] top-[35.53px] w-[28px]" data-name="Container">
                                <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] relative shrink-0 text-[4.969px] text-center text-white whitespace-nowrap">Psychology</p>
                              </div>
                              <div className="absolute left-[2.66px] rounded-[43.59px] size-[27.023px] top-[3.48px]" data-name="Container">
                                <div className="absolute left-0 overflow-clip rounded-[43.59px] size-[27.023px] top-0" data-name="Container">
                                  <div className="absolute content-stretch flex flex-col h-[27.023px] items-start left-[0.88px] rounded-[43.59px] top-0 w-[25.281px]" data-name="Container">
                                    <div className="h-[27.023px] relative rounded-[43.59px] shrink-0 w-full" data-name="img">
                                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43.59px] size-full" src={imgImg10} />
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid left-0 rounded-[43.59px] size-[27.023px] top-0" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[157.789px] left-0 top-[76.87px] w-[146.023px]" data-name="Container">
                            <div className="absolute bg-[rgba(255,255,255,0.15)] h-[16.563px] left-0 rounded-[21.795px] top-0 w-[146.023px]" data-name="Container">
                              <div className="absolute border-[0.5px] border-[rgba(0,0,0,0)] border-solid h-[16.563px] left-0 rounded-[21.795px] top-0 w-[146.023px]" data-name="Container" />
                              <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[15.688px] items-start left-[0.44px] p-[0.5px] rounded-[21.795px] top-[0.44px] w-[145.148px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[21.795px]" />
                                <div className="bg-[rgba(255,255,255,0)] h-[14.688px] relative rounded-[21.795px] shrink-0 w-full" data-name="Container">
                                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0.872px_0px_rgba(255,255,255,0.4)]" />
                                </div>
                              </div>
                              <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[15.688px] items-start left-[0.44px] rounded-[21.795px] top-[0.44px] w-[145.148px]" data-name="Container">
                                <div className="bg-[rgba(255,255,255,0)] h-[15.688px] relative rounded-[21.795px] shrink-0 w-full" data-name="Container">
                                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_3.487px_0px_rgba(255,255,255,0.25)]" />
                                </div>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[12.203px] items-start left-[108.43px] pl-[5.547px] pr-[5.539px] pt-[3.164px] rounded-[26.154px] top-[2.18px] w-[35.414px]" data-name="Container">
                                <div className="h-[5.859px] relative shrink-0 w-full" data-name="Container">
                                  <BackgroundImageAndText text="Quotes" additionalClassNames="left-[4.33px] w-[16.516px]" />
                                </div>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[12.203px] items-start left-[73.02px] pl-[3.383px] pr-[3.375px] pt-[3.164px] rounded-[26.154px] top-[2.18px] w-[35.414px]" data-name="Container">
                                <div className="h-[5.859px] relative shrink-0 w-full" data-name="Container">
                                  <BackgroundImageAndText text="Context" additionalClassNames="left-[7.34px] w-[17.836px]" />
                                </div>
                              </div>
                              <div className="absolute content-stretch flex flex-col h-[12.203px] items-start left-[37.6px] pl-[2.977px] pr-[2.953px] pt-[3.164px] rounded-[26.154px] top-[2.18px] w-[35.414px]" data-name="Container">
                                <div className="h-[5.859px] relative shrink-0 w-full" data-name="Container">
                                  <BackgroundImageAndText text="Practice" additionalClassNames="left-[7.38px] w-[18.617px]" />
                                </div>
                              </div>
                              <div className="absolute h-[12.203px] left-[2.18px] rounded-[26.154px] top-[2.18px] w-[35.414px]" data-name="Container">
                                <div className="absolute bg-[#6a7685] content-stretch flex flex-col h-[12.203px] items-start left-0 rounded-[26.154px] top-0 w-[35.414px]" data-name="Container">
                                  <div className="bg-[rgba(255,255,255,0)] h-[12.203px] relative rounded-[26.154px] shrink-0 w-full" data-name="Container">
                                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_3.487px_0px_rgba(255,255,255,0.14)]" />
                                  </div>
                                </div>
                                <div className="absolute h-[5.859px] left-[4.61px] top-[3.16px] w-[26.211px]" data-name="Container">
                                  <div className="absolute content-stretch flex h-[5.867px] items-start left-[2.33px] top-0 w-[20.398px]" data-name="p">
                                    <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[5.864px] relative shrink-0 text-[4.969px] text-center text-white whitespace-nowrap">Nuances</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute blur-[0px] h-[105.484px] left-0 top-[27.02px] w-[146.023px]" data-name="Container">
                              <div className="absolute h-[105.484px] left-0 top-0 w-[146.023px]" data-name="Container">
                                <div className="absolute content-stretch flex flex-col h-[105.484px] items-start left-0 pl-[0.438px] pt-[-0.219px] top-0 w-[146.023px]" data-name="Container">
                                  <div className="h-[95.938px] relative shrink-0 w-full" data-name="p">
                                    <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[9.59px] left-[5.95px] text-[#37454f] text-[6.103px] top-0 w-[140px]">Despite acknowledging the potential for growth through solitude, modern psychology also emphasizes that prolonged isolation can have serious negative consequences for mental health. Loneliness is not always perceived as a positive experience, and for many, it becomes a source of fear and anxiety. Thus, paying attention to the negative aspects of loneliness is important for a comprehensive understanding of its impact on individuals.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[61.023px] left-[8.72px] top-[380.54px] w-[146.023px]" data-name="Container">
                          <div className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t-[0.5px] h-[61.023px] left-0 top-0 w-[146.023px]" data-name="Container" />
                          <div className="absolute content-stretch flex flex-col h-[6.531px] items-start left-[55.62px] pl-[18.258px] pt-[0.219px] top-[14.38px] w-[34.797px]" data-name="Container">
                            <div className="h-[6.539px] relative shrink-0 w-full" data-name="p">
                              <p className="absolute font-['Raleway:Bold',sans-serif] font-bold leading-[6.538px] left-0 text-[4.359px] text-[rgba(100,116,139,0.6)] top-[-0.5px] tracking-[0.4359px] uppercase whitespace-nowrap">Share</p>
                            </div>
                          </div>
                          <div className="absolute h-[19.195px] left-[48.6px] top-[27.88px] w-[48.82px]" data-name="Container">
                            <div className="absolute bg-[#eceef0] left-[29.65px] rounded-[9.59px] size-[19.172px] top-0" data-name="Container">
                              <div className="absolute content-stretch flex flex-col items-start left-[5.23px] size-[8.711px] top-[5.23px]" data-name="Container">
                                <div className="h-[8.711px] shrink-0 w-full" data-name="svg" />
                              </div>
                            </div>
                            <div className="absolute bg-[#eceef0] left-[0.02px] rounded-[9.59px] size-[19.172px] top-0" data-name="Container">
                              <div className="absolute content-stretch flex flex-col items-start left-[5.23px] size-[8.711px] top-[5.23px]" data-name="Container">
                                <div className="h-[8.711px] shrink-0 w-full" data-name="svg" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[51.867px] left-[8.72px] top-[6.97px] w-[146.023px]" data-name="Container" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(46,60,70,0.12)] h-[6px] left-[59.5px] rounded-[4px] top-[10.5px] w-[52px]" data-name="Container" />
          </div>
          <div className="absolute h-[41.594px] left-[678.5px] top-[1759px] w-[320px]" data-name="p">
            <p className="-translate-x-1/2 absolute font-['Raleway:Regular',sans-serif] font-normal leading-[20.8px] left-[160.13px] text-[13px] text-[rgba(46,60,70,0.4)] text-center top-[-0.5px] w-[281px]">Ask a question — choose a prism — gain a new perspective</p>
          </div>
          <div className="absolute h-[657px] left-[267px] top-[2008px] w-[1143px]" data-name="div">
            <div className="absolute h-[616.02px] left-[0.28px] overflow-clip rounded-[26.881px] top-[0.09px] w-[369.615px]" data-name="motion.div">
              <div className="absolute h-[616.02px] left-0 top-0 w-[369.615px]" data-name="img">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg11} />
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(46,60,70,0.55)] h-[616.02px] left-0 to-1/2 to-[rgba(46,60,70,0)] top-0 w-[369.615px]" data-name="div" />
              <SpanBackgroundImageAndText2 text="Reflection" additionalClassNames="w-[132.857px]" />
            </div>
            <div className="absolute h-[99px] left-[231.5px] top-[406.76px] w-[380px]" data-name="motion.p" />
          </div>
          <div className="absolute content-stretch flex flex-col h-[65px] items-start left-0 pt-[24.5px] px-[498.5px] top-[5983.72px] w-[1677px]" data-name="footer">
            <div aria-hidden="true" className="absolute border-[rgba(236,238,240,0.05)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
            <div className="h-[16.5px] relative shrink-0 w-full" data-name="div">
              <div className="absolute h-[16.5px] left-0 top-0 w-[47.867px]" data-name="span">
                <p className="absolute font-['Raleway:ExtraBold',sans-serif] font-extrabold leading-[16.5px] left-0 text-[11px] text-[rgba(236,238,240,0.25)] top-[-0.5px] tracking-[0.88px] uppercase whitespace-nowrap">Repent</p>
              </div>
              <div className="absolute h-[15px] left-[239.62px] top-[0.75px] w-[211.578px]" data-name="nav">
                <ABackgroundImageAndText text="Telegram" additionalClassNames="left-0 w-[61.188px]" />
                <ABackgroundImageAndText text="Privacy" additionalClassNames="left-[85.19px] w-[48.477px]" />
                <ABackgroundImageAndText text="Contact" additionalClassNames="left-[157.66px] w-[53.914px]" />
              </div>
              <div className="absolute h-[15px] left-[642.95px] top-[0.75px] w-[37.047px]" data-name="span">
                <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(236,238,240,0.14)] top-[0.5px] tracking-[0.6px] whitespace-nowrap">© 2026</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[1198px] left-0 overflow-clip top-0 w-[1677px]" data-name="section">
            <div className="absolute h-[15px] left-[28px] top-[76px] w-[1621px]" data-name="motion.p">
              <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.26)] top-[0.5px] tracking-[2.2px] uppercase whitespace-nowrap">Reflection App · 2026</p>
            </div>
            <p className="absolute font-['Raleway:Black',sans-serif] font-black leading-[605.113px] left-0 text-[#2e3c46] text-[605.113px] top-[139.24px] tracking-[-27.2301px] uppercase whitespace-nowrap">LOOK</p>
            <p className="absolute font-['Raleway:Light_Italic',sans-serif] font-light italic leading-[323.779px] left-0 text-[323.779px] text-[rgba(46,60,70,0.22)] top-[537px] tracking-[-14.57px] whitespace-nowrap">from another</p>
            <div className="absolute h-[99.797px] left-0 opacity-10 top-[599px] w-[1677px]" data-name="span" />
            <p className="absolute font-['Raleway:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[536.88px] left-[71px] text-[#2e3c46] text-[536.88px] top-[614px] tracking-[-24.1596px] whitespace-nowrap">angle.</p>
            <div className="absolute h-[127.391px] left-0 top-[1070.61px] w-[1677px]" data-name="motion.div">
              <div className="absolute h-[77.391px] left-[28px] top-[14px] w-[320px]" data-name="p">
                <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[25.8px] left-0 text-[15px] text-[rgba(46,60,70,0.38)] top-0 w-[303px]">A journal with prisms. Each prism is a way to see a situation differently, find meaning, and take the next step.</p>
              </div>
              <div className="absolute border-[rgba(46,60,70,0.1)] border-b-[0.5px] border-solid h-[18.5px] left-[1574.36px] top-[72.89px] w-[74.641px]" data-name="a">
                <p className="absolute font-['Raleway:Bold',sans-serif] font-bold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.28)] top-[0.5px] tracking-[1.6px] uppercase whitespace-nowrap">{`Explore `}</p>
                <div className="absolute h-[15px] left-[65.81px] top-0 w-[8.828px]" data-name="span">
                  <p className="absolute font-['Raleway:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.28)] top-[0.5px] tracking-[1.6px] uppercase whitespace-nowrap">↓</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient-to-b from-[rgba(46,60,70,0)] h-[36px] left-[1648.5px] to-[rgba(46,60,70,0.12)] top-[1126.86px] w-px" data-name="motion.div" />
            <div className="absolute bg-[rgba(46,60,70,0.08)] h-[0.5px] left-[28px] top-[56px] w-[1621px]" data-name="div" />
          </div>
          <div className="absolute h-[81.188px] left-[291px] top-[3120px] w-[480px]" data-name="p">
            <p className="absolute font-['Raleway:Light_Italic',sans-serif] font-light italic leading-[40.6px] left-0 text-[#2e3c46] text-[28px] top-[-0.5px] tracking-[-0.56px] w-[412px]">{`"Sometimes you need to rise above to see your own tracks."`}</p>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[477.547px] items-start left-1/2 pt-[72.5px] px-[498.5px] top-[5410px] w-[1677px]" data-name="section">
            <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[48px] h-[333.047px] items-start relative shrink-0 w-full" data-name="div">
              <div className="h-[15px] relative shrink-0 w-full" data-name="motion.p">
                <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.3)] top-[0.5px] tracking-[2.2px] uppercase whitespace-nowrap">Early Users</p>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] h-[270.047px] items-start pt-[40.5px] relative shrink-0 w-full" data-name="motion.div">
                <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.1)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
                <div className="h-[157.547px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[118.547px] left-0 top-0 w-[540px]" data-name="blockquote">
                    <p className="absolute font-['Raleway:Light_Italic',sans-serif] font-light italic leading-[39.52px] left-0 text-[#2e3c46] text-[26px] top-[0.5px] tracking-[-0.26px] w-[516px]">{`"Three minutes at the end of the day changed how I make decisions. Honestly — I didn't think that was possible."`}</p>
                  </div>
                  <div className="absolute h-[15px] left-0 top-[142.55px] w-[680px]" data-name="footer">
                    <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[10px] text-[rgba(46,60,70,0.32)] top-[0.5px] tracking-[1.2px] uppercase whitespace-nowrap">Kirill — entrepreneur</p>
                  </div>
                </div>
                <div className="h-[32px] relative shrink-0 w-full" data-name="div">
                  <ButtonBackgroundImageAndText text="←" additionalClassNames="left-0" />
                  <ButtonBackgroundImageAndText text="→" additionalClassNames="left-[44px]" />
                  <div className="absolute content-stretch flex gap-[5px] h-[5px] items-start left-[94px] top-[13.5px] w-[38px]" data-name="Container">
                    <div className="bg-[rgba(46,60,70,0.15)] rounded-[4px] shrink-0 size-[5px]" data-name="button" />
                    <div className="bg-[rgba(46,60,70,0.15)] rounded-[4px] shrink-0 size-[5px]" data-name="button" />
                    <div className="bg-[rgba(46,60,70,0.55)] flex-[1_0_0] h-[5px] min-h-px min-w-px rounded-[4px]" data-name="button" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[158.688px] items-start left-1/2 pb-[0.5px] pt-[48.5px] px-[498.5px] top-[5889px] w-[1677px]" data-name="section">
            <div aria-hidden="true" className="absolute border-[rgba(46,60,70,0.08)] border-b-[0.5px] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
            <div className="gap-x-[40px] gap-y-[28px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[61.688px] relative shrink-0 w-full" data-name="div">
              <div className="col-1 content-stretch flex gap-[12px] h-[43.094px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
                <SpanBackgroundImageAndText3 text="◎" additionalClassNames="w-[14px]" />
                <div className="h-[43.094px] relative shrink-0 w-[164.398px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">
                    <PBackgroundImageAndText15 text="All local" />
                    <div className="h-[18.594px] relative shrink-0 w-full" data-name="p">
                      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[18.6px] left-0 text-[12px] text-[rgba(46,60,70,0.4)] top-[-1px] whitespace-nowrap">Data lives only on your device</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 content-stretch flex gap-[12px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <BackgroundImage additionalClassNames="h-[21px] w-[10.117px]">
                  <p className="absolute font-['Raleway:Regular','Noto_Sans_Math:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-[rgba(46,60,70,0.22)] top-0 whitespace-nowrap">⊘</p>
                </BackgroundImage>
                <ContainerBackgroundImage5>
                  <PBackgroundImageAndText15 text="No sync" />
                  <div className="h-[37.188px] relative shrink-0 w-full" data-name="p">
                    <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[18.6px] left-0 text-[12px] text-[rgba(46,60,70,0.4)] top-[-1px] w-[131px]">No servers, analytics, or tracking</p>
                  </div>
                </ContainerBackgroundImage5>
              </div>
              <div className="col-3 content-stretch flex gap-[12px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <SpanBackgroundImageAndText3 text="◈" additionalClassNames="w-[12.117px]" />
                <ContainerBackgroundImage5>
                  <PBackgroundImageAndText15 text="Offline" />
                  <div className="h-[37.188px] relative shrink-0 w-full" data-name="p">
                    <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[18.6px] left-0 text-[12px] text-[rgba(46,60,70,0.4)] top-[-1px] w-[129px]">Works without internet, anywhere</p>
                  </div>
                </ContainerBackgroundImage5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[56px] items-center justify-between left-0 pb-[0.5px] px-[28px] top-0 w-[1677px]" data-name="nav">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <BackgroundImage additionalClassNames="h-[13px] w-[88.57px]">
          <div className="absolute h-[13px] left-[32px] top-0 w-[56.57px]" data-name="span">
            <p className="absolute font-['Raleway:ExtraBold',sans-serif] font-extrabold leading-[13px] left-0 text-[#2e3c46] text-[13px] top-0 tracking-[1.04px] uppercase whitespace-nowrap">Repent</p>
          </div>
          <div className="absolute content-stretch flex flex-col h-[13.313px] items-start left-[-0.15px] top-[-0.16px] w-[22.297px]" data-name="Container">
            <div className="h-[13.313px] overflow-clip relative shrink-0 w-full" data-name="svg">
              <div className="absolute contents inset-[0.6%_0.35%]" data-name="Vector">
                <div className="absolute contents inset-[1.21%_0.7%]" data-name="Group">
                  <GroupVectorBackgroundImage additionalClassNames="inset-[74.4%_85.22%_1.21%_0.7%]">
                    <path d={svgPaths.p30802900} fill="var(--fill-0, black)" id="Vector" />
                  </GroupVectorBackgroundImage>
                  <GroupVectorBackgroundImage additionalClassNames="inset-[74.4%_57.04%_1.21%_28.87%]">
                    <path d={svgPaths.p35570d00} fill="var(--fill-0, black)" id="Vector" />
                  </GroupVectorBackgroundImage>
                  <div className="absolute inset-[74.4%_28.87%_1.21%_57.04%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.14082 3.24761">
                      <path d={svgPaths.p238a8780} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <GroupVectorBackgroundImage1 additionalClassNames="inset-[1.21%_28.87%_74.4%_57.04%]">
                    <path d={svgPaths.p22a6ea00} fill="var(--fill-0, black)" id="Vector" />
                  </GroupVectorBackgroundImage1>
                  <GroupVectorBackgroundImage2 additionalClassNames="inset-[1.21%_57.04%_74.4%_28.87%]">
                    <path d={svgPaths.p28245900} fill="var(--fill-0, black)" id="Vector" />
                  </GroupVectorBackgroundImage2>
                  <GroupVectorBackgroundImage2 additionalClassNames="inset-[1.21%_85.22%_74.4%_0.7%]">
                    <path d={svgPaths.p353d7d00} fill="var(--fill-0, black)" id="Vector" />
                  </GroupVectorBackgroundImage2>
                  <GroupVectorBackgroundImage1 additionalClassNames="inset-[37.8%_0.7%_37.8%_85.22%]">
                    <path d={svgPaths.p3987e0f0} fill="var(--fill-0, black)" id="Vector" />
                  </GroupVectorBackgroundImage1>
                </div>
                <div className="absolute inset-[0.6%_0.35%]" data-name="Vector">
                  <div className="absolute inset-[-0.6%_-0.36%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2999 13.3105">
                      <path d={svgPaths.p3094b1c0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.158355" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="h-[26px] relative shrink-0 w-[175.055px]" data-name="div">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
            <div className="h-[21px] relative rounded-[40px] shrink-0 w-[39.523px]" data-name="button">
              <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(46,60,70,0.14)] border-solid inset-0 pointer-events-none rounded-[40px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="-translate-x-1/2 absolute font-['Raleway:Bold',sans-serif] font-bold leading-[10px] left-[19.5px] text-[10px] text-[rgba(46,60,70,0.38)] text-center top-[5.5px] tracking-[1.2px] uppercase whitespace-nowrap">RU</p>
              </div>
            </div>
            <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[40px]" data-name="a">
              <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(46,60,70,0.2)] border-solid inset-0 pointer-events-none rounded-[40px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Raleway:Bold',sans-serif] font-bold leading-[11px] left-[18.5px] text-[#2e3c46] text-[11px] top-[7.5px] tracking-[0.88px] uppercase whitespace-nowrap">Early Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(46,60,70,0.45)] left-[1395.97px] rounded-[3px] size-[6px] top-[-2.99px]" data-name="div" />
    </div>
  );
}