import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../../assets/hero-image.png";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
    );

    gsap.to(imageRef.current, {
      y: -200,
      scale: 1.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <h1 ref={titleRef} className="hero-title">
        W E L C O M E &nbsp; I T Z F I Z Z
      </h1>

      <p ref={subRef} className="hero-sub">
        Web Development Internship Assignment
      </p>

      <img
        ref={imageRef}
        src={heroImage}
        alt="Hero Visual"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;