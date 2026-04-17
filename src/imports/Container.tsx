import imgImg from "figma:asset/7e4caecd80aa2d6293fc60b8eaada5585c9a7fee.png";

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16777200px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <div className="h-[60px] relative shrink-0 w-full" data-name="img">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.13),0px_1px_3px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}