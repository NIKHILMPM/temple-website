"use client"
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

const page = () => {
    const aboutUsRef = useRef()

    useGSAP(() => {
        const boxes = gsap.utils.toArray(aboutUsRef.current.children);

        gsap.fromTo(
            boxes,
            {
                opacity: 0,
                x: 500,
                scale: 0.6
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                scale: 1
                ,
                ease: 'power1.inOut',
            }
        );
    }, { dependencies: [], scope: aboutUsRef });

    return (
        <>
            <div ref={aboutUsRef} className="px-6 py-12 max-w-5xl mx-auto text-justify leading-relaxed text-neutral-800">
                <h1 className="text-4xl font-bold text-center text-amber-700 mb-10 w-full flex justify-start">About the Temple</h1>


                <p className="mb-6">
                    The 16th-century Goa witnessed the reign of the Portuguese, marked by a reign of terror that aimed to forcibly spread Christianity. During this period, Goans endured forced conversions, temple demolitions, idol destruction, temple looting, and even the torching of sacred buildings.
                </p>

                <p className="mb-6">
                    In the face of such persecution, our courageous ancestors risked everything. They abandoned their homes, land, wealth, and even loved ones to protect the sacred family deities. In moonless nights, they escaped across forests, rivers, valleys, and hills, carrying with them only their unwavering faith and sacred symbols. Through these sacrifices, they re-established temples anew to preserve the Hindu religion for generations to come.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
                    <img src="/background/1.jpg" alt="Temple History 1" className="w-full md:w-1/2 rounded-lg shadow-md" />
                    <img src="/background/2.jpg" alt="Temple History 2" className="w-full md:w-1/2 rounded-lg shadow-md" />
                </div>

                <p className="mb-6">
                    As proud descendants of these noble souls, we are honored to be the <span className="italic">kulavis</span> of our family deity. This legacy instills in us a responsibility to continue worship and rituals with unwavering devotion. Among such revered deities is Devi Shree Santeri of Shankavali—modern-day Sancoale of Salcete taluka—who was relocated to Gothan in Veling, Ponda Taluka. Today, the goddess is worshipped as Shree Shantadurga Shankhavaleshwari.
                </p>

                <p className="mb-6">
                    During those turbulent times, Ponda was ruled by the Adil Shah of Bijapur, outside Portuguese control. It became a sanctuary where Hinduism thrived. Nestled amidst serene nature, the temple of Shree Shantadurga Shankhavaleshwari offers an indescribable spiritual experience—surrounded by towering areca groves, sparkling streams, green hills, and the fragrant breeze of forest blossoms.
                </p>

                <p className="mb-6">
                    From the main road, a staircase leads to the grand <span className="font-semibold">Mahadwar</span> of the temple. Between this gateway and the sanctum lie the <span className="italic">deepasthambha</span> and <span className="italic">Tulsi Vrindavan</span>. The temple, facing the eastern sunrise, features the <span className="italic">sodiyo</span> (viewing area), followed by a newly renovated <span className="italic">mahachowk</span> with a modern architectural touch in its beams, pillars, and balcony.
                </p>

                <p className="mb-6">
                    Within the <span className="italic">garbhagriha</span>, the magnificent <span className="font-semibold">panchadhatu idol of Shree Shantadurga Shankhavaleshwari</span> stands resplendent. Her divine form captivates devotees, who bow in awe, leaving behind all doubts and fears. Peace embraces their hearts in Her divine presence.
                </p>

                <p className="mb-6">
                    Near the main idol, a silver-engraved <span className="italic">mantap</span> houses the idols of Shree Laxmi Narasinha, Shree Vijayadurga, and Lord Ganapati. A smaller <span className="italic">panchadhatu</span> idol at the base of the pedestal is used in <span className="italic">Prasad Kowl</span> ceremonies. Hidden behind the idol is an ancient <span className="italic">anthill</span>—a <span className="italic">roinn</span>—invisible from the main door.
                </p>

                <p className="mb-6">
                    The temple’s interiors, including the <span className="italic">garbhagriha</span>, <span className="italic">mahachowk</span>, aisles, and <span className="italic">pradakshina</span> path, are adorned with elegant marble and tiles, enhancing the sacred ambiance.
                </p>

                <p className="mb-6">
                    On the temple’s right is the <span className="italic">agrashala</span>, initially designed to house priests. The temple’s distinct <span className="italic">ashtakoni mahachowk</span> and its elevated three spires and twin domes give it a divine architectural grandeur. Behind the main temple stand eight smaller <span className="italic">garbhagrihas</span>, six of which contain <span className="italic">lingas</span> honoring our <span className="italic">purvapurushas</span>. The other two enshrine the <span className="italic">Grampurusha</span> and <span className="italic">Shree Dandapani</span>, the <span className="italic">Kshetradhipati</span>.
                </p>

                <p className="mb-6">
                    In the sacred courtyard stands a revered ancient tree, considered the <span className="italic">devachara</span>. Here, devotees offer traditional foods like <span className="italic">ront</span> annually, seeking divine blessings. The spot is home to the venerated <span className="italic">sankhliyo</span>.
                </p>

                <p className="mt-8 text-center text-lg font-medium text-amber-700">
                    We bow to Shree Shantadurga Shankhavaleshwari and remain eternally grateful for the blessings She bestows upon Her devotees.
                </p>
            </div>
        </>

    );
};

export default page;
