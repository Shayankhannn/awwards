import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {


//gsap

useGSAP(()=>{
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#clip",
            start: "bottom center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        }
    });
    clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
    })
})

//gsap end

  return (
    <div id='about' className="min-h-screen  w-screen ">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
                WelCome
            </h2>
            <AnimatedTitle containerClass="mt-5 !text-black text-center" title="Disc<b>o</b>ver The World&apos;s <br/> <b>L</b>argest shared adventure"/>
            
            <div className="about-subtext">
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
            <p className="text-gray-500">unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy</p>
            </div>
        </div>
        <div className="h-dvh w-screen " id="clip">
            <div className="mask-clip-path about-image">
                <img src="img/about.webp" alt="about img" 
                className="object-cover absolute left-0 top-0 size-full "
                />
            </div>
        </div>
    </div>
  )
}

export default About