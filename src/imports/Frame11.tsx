import clsx from "clsx";
import imgFrame11 from "figma:asset/299493191703b329c09d1db8ebd1829a43337604.png";
import imgImage68 from "figma:asset/45bf245c189703d3da40cac0b860726abed033fd.png";
import imgFrame12 from "figma:asset/13db5fd9a37ee7a45e1d20d9bdf97fa0b0bf10e4.png";
import imgFrame10 from "figma:asset/175ccfcddff77938c3a7951e8b2f0f650141d338.png";
type ImageImageProps = {
  additionalClassNames?: string;
};

function ImageImage({ additionalClassNames = "" }: ImageImageProps) {
  return (
    <div className={clsx("blur-[27px] h-[71px] w-[72px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage68} />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <div className="content-stretch flex h-[362px] items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[171px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[109.93%] left-[-62.25%] max-w-none top-[0.05%] w-[225.02%]" src={imgFrame11} />
        </div>
        <ImageImage additionalClassNames="absolute left-[4px] top-[297px]" />
      </div>
      <div className="h-[362px] overflow-clip relative rounded-[16px] shrink-0 w-[171px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[106.06%] left-[-71.22%] max-w-none top-[-4.7%] w-[224.53%]" src={imgFrame12} />
        </div>
        <ImageImage additionalClassNames="absolute left-0 top-[297px]" />
        <div className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[1.24] left-[18px] text-[12px] text-white top-[286px] w-[128px] whitespace-pre-wrap">
          <p className="mb-0">
            {`Your confession `}
            <br aria-hidden="true" />
            or the world’s —
          </p>
          <p>anything can be examined here</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[362px] overflow-clip relative rounded-[16px] w-[171px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[110.13%] left-[-109.06%] max-w-none top-[-10.13%] w-[233.13%]" src={imgFrame10} />
            </div>
            <div className="absolute flex h-[71px] items-center justify-center left-[99px] top-[297px] w-[72px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <ImageImage additionalClassNames="relative" />
              </div>
            </div>
            <div className="absolute flex items-center justify-center left-[24px] top-[302px] w-[128px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="font-['Raleway:Regular',sans-serif] font-normal leading-[1.24] relative text-[12px] text-white w-[128px] whitespace-pre-wrap">
                  <p className="mb-0">Choose your lenses</p>
                  <p className="mb-0">{`Shift the angle. `}</p>
                  <p>Shift the meaning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}