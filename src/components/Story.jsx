import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const Story = () => {
    
    const frameRef = useRef(null);
    const handleMouseLeave = ()=>{

    };

    const handleMouseMove = (e)=>{
        const {clientX,clientY} = e;
        const element = frameRef.current;
        if(!element)return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY)/centerY) * -10;
        const rotateY = ((x - centerX)/centerX) * -10;

    };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24 ">
        <p className="font-general text-sm md:text-[10px] uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam
          modi labore.
        </p>
        <div className="relative size-full">
            <AnimatedTitle
             title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
             containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
            <div className="story-img-container">
            <div className="story-img-mask">
                <div className="story-img-content">
                    <img 
                    src="/img/entrance.webp" 
                    alt="entrance" 
                    className="object-contain" 
                    ref={frameRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseMove={handleMouseMove} />
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
