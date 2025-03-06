import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedTitle = ({title,containerClass}) => {
    const containerRef = useRef(null);
    useEffect(() => { 
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: containerRef.current,
                    start: "100  bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                   
                }
            });
            titleAnimation.to(".animated-word",{
                opacity: 1,
                transform: 'translate3d(0,0,0) rotate(0deg)',
                ease: "power2.inOut",
                stagger: 0.02,

            })
        },containerRef);
        return () => ctx.revert();
    }, []);
  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}> 

                {title.split("<br />").map((line, index) => (
                    <div className="flex-center max-w-full flex-wrap gap-2 md:gap-3 px-10" key={index}>
                         {line.split(" ").map((word, index) => (
                             <span key={index} className="animated-word" dangerouslySetInnerHTML={{__html: word }}>

                             </span>   
                         ))}   
                    </div>
                ))}
            </div>
  )
}

export default AnimatedTitle