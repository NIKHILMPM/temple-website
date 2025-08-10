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
  { title: "Committee Members", image: "s4.jpg", link: "/committe" },
];

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const infoRef1 = useRef();
  const infoRef2 = useRef();
  const infoRef3 = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const containerRef = useRef();
  const historyRef = useRef();
  const dietyRef = useRef();


  // Section 1 entrance animation
  useGSAP(() => {
    const boxes = gsap.utils.toArray(section1Ref.current.children)
    boxes.forEach(box => {

      gsap.fromTo(
        box,
        { x: -1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        }
      );
    })
  }, []);


  // Info box scroll-in animation
  const infoRefs = [infoRef1, infoRef2, infoRef3];
  const flowerClasses = [".flower1", ".flower2", ".flower3"];

  useGSAP(() => {
    // Animate all infoRefs with ScrollTrigger
    infoRefs.forEach((ref) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        { y: 250, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate all flower rotations
    flowerClasses.forEach((cls) => {
      gsap.to(cls, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    });
  }, []);

  // Section 2 box animations
  useGSAP(() => {
    if (!section2Ref.current) return;

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
  }, []);

  useGSAP(() => {
    const divRefs = [historyRef, dietyRef];
    divRefs.forEach((ref, index) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { x: index % 2 ? -200 : 200, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
          duration: 0.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 100%",
            scrub: 0.2
          }
        }
      );
    })

  }, []);


  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray(".panel", containerRef.current);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => "+=" + window.innerHeight * (panels.length - 1),
      snap: 1 / (panels.length - 1),
      scrub: 1,

      onRefresh: self => {
        if (window.innerWidth < 768) {
          self.disable();
        } else {
          self.enable();
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);





  return (
    <>

      <div ref={containerRef} className=" overflow-hidden">
        <div className="h-screen w-screen panel">
          <div className="fixed inset-0 w-screen h-screen -z-10 opacity-100 bg-cover" style={{ backgroundImage: "url('/background/background.jpg')" }}>
            <div className="h-full w-full backdrop-blur-sm" />
          </div>

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
              className="flower1 h-full w-[20%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/background/flower.png')" }}
            ></div>
            <div className="h-1/3 md:h-full w-[50%] border-t-5 border-b-4 border-amber-800 flex justify-center items-center">
              <span className="text-sm md:text-3xl font-bold text-black animate-color-and-flow ">Experience the Grace of the Divine at Shree Shantadurga Shankhwaleshwari Temple.</span>
            </div>
            <div
              className="flower1 h-full w-[20%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/background/flower.png')" }}
            ></div>

          </div>
        </div>

        {/* Section 2 - Grid of Links */}
        <div className="h-screen w-screen flex justify-center items-center panel">
          <div
            ref={section2Ref}
            className="h-[90%] w-[65%] grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2 md:p-4 md:gap-16 "
          >
            {sections.map((section, index) => (
              <Link key={index} href={section.link} passHref>
                <div className="group relative w-full h-full overflow-hidden shadow-lg cursor-pointer">
                  <div className="absolute inset-0 z-20 w-full h-full bg-amber-200/20"></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-amber-50/group-hover:bg-amber-50/20 transition-transform duration-500 ease-in-out group-hover:bg-amber-50/55 z-40"
                  >
                  </div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-125"
                    style={{ backgroundImage: `url('/background/${section.image}')` }}
                  ></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-400/40 md:bg-orange-400/80 md:translate-y-full transition-transform duration-500 ease-in-out md:group-hover:translate-y-0 flex items-center justify-center z-50">
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
              className="flower2 h-full w-[20%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/background/flower.png')" }}
            ></div>
            <div className="h-1/3 md:h-full w-[50%] border-t-5 border-b-4 border-amber-800 flex justify-center items-center">
              <span className="text-sm md:text-3xl text-black font-bold animate-color-and-flow ">About us</span>
            </div>
            <div
              className="flower2 h-full w-[20%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/background/flower.png')" }}
            ></div>
          </div>
        </div>
        {/* Section 3 - History */}
        <div ref={historyRef} className="h-auto min-h-screen w-screen flex justify-center items-center panel overflow-hidden">
          <div className="w-full flex flex-col p-5 bg-gradient-to-tl from-amber-100 to-amber-100 md:flex-row md:p-0 md:h-[90%]">

            {/* Image Section */}
            <div
              className="w-full h-[300px] rounded-br-4xl rounded-bl-4xl md:w-[43%] md:h-full md:rounded-none bg-center overflow-hidden"
              style={{ backgroundImage: "url('/diety/background.jpg')" }}
            >
              <div className="relative backdrop-blur-sm w-full h-full flex justify-center items-center">

                <div className="relative aspect-square w-3/4 md:w-full flex justify-center items-center">
                  {/* Chakra */}
                  <div
                    className="absolute w-[75%] h-[75%] rounded-full bg-cover bg-center animate-spin [animation-duration:15s] shadow-[0_0_20px_5px_rgba(255,255,0,0.6),0_0_10px_2px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,0,0.4),0_0_15px_4px_rgba(255,255,255,0.7)]"
                    style={{
                      backgroundImage: "url('/background/chakra.png')",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  ></div>

                  {/* Goddess */}
                  <div
                    className="absolute w-1/2 h-1/2 rounded-full bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: "url('/background/goddess.jpg')" }}
                  >
                    <div className="w-full h-full bg-amber-200/20 border-2 border-amber-200 rounded-full shadow-inner"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-[57%] flex flex-col justify-center items-center p-5 md:p-10">
              <p className="text-sm md:text-2xl font-mono text-gray-500 animate-color-and-flow2">
                In the 16th century Goa saw the reign of the Portuguese and faced their terror, intending to spread Christianity.
                Goans witnessed forceful acts of conversion, temple demolitions, destruction of idols, looting of temple wealth,
                and even setting temple buildings on fire.
                During this dark period, our pious ancestors risked their lives—leaving behind their homes, land, wealth, and
                loved ones. Under the cover of moonless nights, they crossed borders with their family deities and symbols,
                traversing forests, rivers, and hills to rebuild temples in new lands and preserve the Hindu faith for future
                generations.
              </p>
              <Link className="w-full flex justify-start mt-4" href={"/about"}>
                <p className="animate-color-and-flow2 transition-all transform duration-300 ease-in-out hover:scale-x-[102%] hover:text-amber-950">
                  |Know More|
                </p>
              </Link>
            </div>

          </div>
        </div>


        {/* section4 */}
        <div className="h-screen w-screen flex justify-center items-center panel">
          <div
            ref={infoRef3}
            className="h-[30%] w-full  flex justify-between items-center p-4"
          >
            <div
              className="flower3 h-full w-[20%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/background/flower.png')" }}
            ></div>
            <div className="h-1/3 md:h-full w-[50%] border-t-5 border-b-4 border-amber-800 flex justify-center items-center">
              <span className="text-sm md:text-3xl text-black font-bold animate-color-and-flow ">Nine Deities, Eternal Protectors of Our People.</span>
            </div>
            <div
              className="flower3 h-full w-[20%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/background/flower.png')" }}
            ></div>
          </div>
        </div>

        <div ref={dietyRef} className="h-screen w-screen flex justify-center items-center panel">
          <DeitySection />
        </div>

        {/* footer */}
        <div className="h-screen w-screen flex justify-center items-end panel">

          <Footer />
        </div>
      </div >


    </>


  );
};

export default Page;