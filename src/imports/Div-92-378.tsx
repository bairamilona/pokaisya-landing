import imgImg from "figma:asset/3d7497ceb5c319fbe8d3031599aa3d5b2be0a111.png";

export default function Div() {
  return (
    <div className="relative size-full" data-name="div">
      <div className="absolute bg-[#eceef0] left-0 rounded-[16777200px] shadow-[-5px_-5px_12px_0px_rgba(255,255,255,0.92),5px_5px_12px_0px_rgba(0,0,0,0.1)] size-[70px] top-0" data-name="Container" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-[3px] rounded-[16777200px] size-[64px] top-[3px]" data-name="Container">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
          <div className="h-[60px] relative shrink-0 w-full" data-name="img">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.13),0px_1px_3px_0px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}