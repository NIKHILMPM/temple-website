"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/effect-fade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DeitySection from "../components/DeitySection";
import Footer from "../components/Footer";

const images = [
  "/background/1.jpg",
  "/background/2.jpg",
  "/background/3.jpg",
];

const sections = [
  { title: "Our History", image: "s1.jpg", link: "/history" },
  { title: "Prasad Kowl", image: "s2.jpg", link: "/kowl" },
  { title: "Mahajans of the temple", image: "s3.jpg", link: "/mahajans" },
  { title: "Committee Members", image: "s4.jpg", link: "/committee" },
];

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const infoRef1 = useRef();
  const infoRef2 = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const containerRef = useRef();

  // Section 1 entrance animation
  useGSAP(() => {
    const boxes = gsap.utils.toArray(section1Ref.current.children);

    gsap.fromTo(
      boxes,
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      }
    );
  }, []);

  // Info box scroll-in animation
  useGSAP(() => {
    if (!infoRef1.current) return;

    gsap.fromTo(
      infoRef1.current,
      { y: 250, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef1.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { dependencies: [infoRef1] });

  useGSAP(() => {
    if (!infoRef2.current) return;

    gsap.fromTo(
      infoRef2.current,
      { y: 250, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef2.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { dependencies: [infoRef2] });

  // Section 2 box animations
  useGSAP(() => {
    const boxes = gsap.utils.toArray(section2Ref.current.children);

    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        {
          x: 200,
          opacity: 0,
          scale: 0.8,
          borderRadius: "50%",
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          borderRadius: "0%",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { dependencies: [section2Ref] });

  // Scroll snapping between sections
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => "+=" + window.innerHeight * (panels.length - 1),
      snap: 1 / (panels.length - 1),
      scrub: 1,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden no-scrollbar">
      <div className="h-screen w-screen panel">
        <div className="fixed inset-0 w-screen h-screen -z-10 opacity-50 bg-cover" style={{ backgroundImage: "url('/background/background.jpg')" }}></div>

        {/* Section 1 - Hero */}
        <div className="relative h-screen w-screen panel">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1500}
            loop
            allowTouchMove={false}
            className="absolute inset-0 z-0"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-screen w-screen bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 z-10 flex justify-center items-center bg-gradient-to-tr from-orange-400 to-backdrop-blur-xs">
            <div
              ref={section1Ref}
              className="flex h-full w-[80%] flex-col justify-center px-6 py-10 text-white space-y-6 bg-transparent"
            >
              <div className="text-left space-y-2">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  Shree Shantadurga<br />
                  Shankhwal Devi<br />
                  Temple Trust
                </h1>
              </div>
              <p className="text-base md:text-lg text-gray-200 max-w-xl">
                Nestled in the heart of Goa, the Shantadurga Temple stands as a sacred symbol of devotion and tradition. Dedicated to the goddess of peace and prosperity, it is a spiritual haven for countless devotees.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-2xl shadow-md hover:bg-amber-300 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Info Heading */}
      <div className="h-screen w-screen flex justify-center items-center panel">
        <div
          ref={infoRef1}
          className="h-[30%] w-full  flex justify-between items-center p-4"
        >
          <div
            className="h-full w-[20%] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/background/flower.png')" }}
          ></div>
          <div className="h-full w-[50%] border-t-5 border-b-4 border-black flex justify-center items-center">
            <span className="text-3xl text-black font-bold">Experience the Grace of the Divine at Shree Shantadurga Shankhwaleshwari Temple.</span>
          </div>
          <div
            className="h-full w-[20%] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/background/flower.png')" }}
          ></div>

        </div>
      </div>

      {/* Section 3 - Grid of Links */}
      <div className="h-screen w-screen flex justify-center items-center panel">
        <div
          ref={section2Ref}
          className="h-[90%] w-[50%] grid grid-cols-2 grid-rows-2 p-4 gap-14"
        >
          {sections.map((section, index) => (
            <Link key={index} href={section.link} passHref>
              <div className="group relative w-full h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <div
                  className="absolute inset-0 w-full h-full bg-amber-50/group-hover:bg-amber-50/20 transition-transform duration-500 ease-in-out group-hover:bg-amber-50/55 z-40"
                >
                </div>
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-125"
                  style={{ backgroundImage: `url('/background/${section.image}')` }}
                ></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-400/80 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 flex items-center justify-center z-50">
                  <h1 className="text-center text-white font-bold text-xl px-2">
                    {section.title}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* section3 */}
      <div className="h-screen w-screen flex justify-center items-center panel">
        <div
          ref={infoRef2}
          className="h-[30%] w-full  flex justify-between items-center p-4"
        >
          <div
            className="h-full w-[20%] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/background/flower.png')" }}
          ></div>
          <div className="h-full w-[50%] border-t-5 border-b-4 border-black flex justify-center items-center">
            <span className="text-3xl text-black font-bold">About us</span>
          </div>
          <div
            className="h-full w-[20%] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/background/flower.png')" }}
          ></div>

        </div>
      </div>
      <div className="h-screen w-screen flex justify-center items-center panel">
        <DeitySection />
      </div>
      <div className="h-screen w-screen flex justify-center items-end panel">

        <Footer />
      </div>




    </div>
  );
};

export default Page;
