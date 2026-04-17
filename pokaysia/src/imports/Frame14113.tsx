import imgImg from "figma:asset/299493191703b329c09d1db8ebd1829a43337604.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[616.02px] left-0 top-0 w-[369.615px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
      </div>
      <div className="absolute bg-gradient-to-t from-[rgba(46,60,70,0.55)] h-[616.02px] left-0 to-1/2 to-[rgba(46,60,70,0)] top-0 w-[369.615px]" data-name="div" />
    </div>
  );
}