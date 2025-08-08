"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

const UtsavPage = () => {
    const utsavRef = useRef()

    useGSAP(() => {
        const boxes = gsap.utils.toArray(utsavRef.current.children);

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
    }, { dependencies: [], scope: utsavRef });

    return (
        <div ref={utsavRef} className="max-w-5xl mx-auto px-4 py-16 text-justify text-gray-800 space-y-10">
            <h1 className="text-4xl font-bold text-center text-amber-700 mb-10 w-full flex justify-start">Utsav (Festivals)</h1>

            {/* Image */}
            <div className="flex justify-center">
                <Image
                    src="/pdf/utsav.jpg"
                    alt="Utsav Celebration"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg"
                />
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-amber-600 mb-4">Seemollanghan Celebration</h2>
                <p>
                    In the month of <strong>Ashwina</strong> on <strong>Vijayadashami</strong>, a vibrant celebration known as <strong>Seemollanghan</strong> is held. The sacred <strong>palkhi</strong> (palanquin) of Goddess Shantadurga Shankhawaleshwari is ceremoniously taken to the <strong>Shree Vetaaleshwara Temple</strong> in the evening.
                </p>
                <p>
                    This event witnesses the divine meeting of three palkhis: <strong>Shree Shantadurga Shankhawaleshwari</strong>, <strong>Shree Laxmi Narasinha</strong>, and <strong>Shree Vetaaleshwara</strong>. The priests from each temple perform rituals and offerings, creating a spectacular and spiritually uplifting scene.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-amber-600 mb-4">Navaratri Rituals</h2>
                <p>
                    Beginning from <strong>Ashwina Shukla Pratipada</strong> until <strong>Navami</strong>, the temple resonates with the chanting of <strong>Chandi Paath</strong>. On Navami, a grand <strong>Havan (Homa)</strong> is organized, radiating divine energy across the premises.
                </p>
                <p>
                    Post Havan, a sacred ritual of <strong>Taranga Puja</strong> is performed for the deities <strong>Shree Dandapani</strong> and <strong>Shree Grampurusha</strong>, invoking their blessings for the well-being of devotees and the community.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-amber-600 mb-4">Oracle Ceremonies</h2>
                <p>
                    On <strong>Ashwina Shukla Navami</strong>, three deeply spiritual and culturally significant <strong>oracle ceremonies</strong> are performed:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        The first oracle is possessed by the spirit of <strong>Padiyar Purusha</strong>, traditionally from the <strong>Goud Saraswat Brahmin</strong> community bearing the surname <strong>Padiyar</strong>.
                    </li>
                    <li>
                        The second oracle channels the spirit of <strong>Govind Purusha</strong> and belongs to a <strong>Brahmin from Kinnar Karwar</strong>.
                    </li>
                    <li>
                        The third oracle invokes the spirit of <strong>Aadisingh Purusha</strong>, performed by a <strong>priest from Bhatkal</strong> who also belongs to the Brahmin community.
                    </li>
                </ul>
                <p>
                    These divine possessions are a sight of awe and spiritual reverence, drawing devotees from near and far.{' '}
                    <Link
                        href="/pdf/utsav.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 ml-1"
                    >
                        [Download PDF]
                    </Link>
                </p>
            </section>
        </div>
    );
};

export default UtsavPage;
