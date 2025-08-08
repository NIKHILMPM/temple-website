'use client';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

const page = () => {
    const aboutUsRef = useRef();

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
                scale: 1,
                ease: 'power1.inOut',
            }
        );
    }, { dependencies: [], scope: aboutUsRef });

    return (
        <>
            <div ref={aboutUsRef} className="px-6 py-12 max-w-5xl mx-auto text-justify leading-relaxed text-neutral-800">
                <h1 className="text-4xl font-bold text-center text-amber-700 mb-10 w-full flex justify-start">Prasad Kowl</h1>

                <p className="mb-6">
                    Prasad kowl blessing is a matter of faith and belief and is like taking consent of the God. At a number of situations and circumstances in life we are unable to arrive at a conclusive decision. Sometimes an illness prevails even after a long tenure of medicinal course and different medicinal techniques. Eventually we turn to God for his blessings. Prasad kowl with their respective kuladevata is such a custom which is then followed in most temples of Goa.
                </p>

                <p className="mb-6">
                    At this temple the idol to which the Prasad kowl pujas are done is a panchadhatu idol which is at the foot of the goddess pedestal in the garbhagriha and touching the foot of the pedestal. The custom is followed by applying pieces of karambali leave at 43 points on the deity idol.
                </p>

                <p className="mb-6">
                    The time of taking Prasad kowl by the devotees is after the mahapuja and the lunch and right up to sunset. Although in certain months and on certain auspicious days, the Prasad is not available. The schedule of those is made known so as to avoid disappointment of the devotees who visit temple with a purpose.
                </p>

                <p className="mb-6 font-semibold">
                    Schedule of Prasad Kowl non availability by month and tithis:
                </p>

                <ul className="list-disc ml-8 mb-6">
                    <li>Shukla and Krishna Pratipada</li>
                    <li>Shukla and Krishna Panchami</li>
                    <li>Shukla and Krishna Ekadashi</li>
                    <li>Pournima and Amavasya</li>
                    <li>Solar and Lunar Eclipse days</li>
                </ul>

                <p className="mb-4 font-semibold">
                    In addition to these, the following days by month are unavailable for Prasad Kowl:
                </p>

                <div className="mb-6">
                    <ul className="list-none ml-4 space-y-2">
                        <li><strong>Chaitra:</strong> Shuddha Navami, Shuddha Saptami, Hanuman Jayanti</li>
                        <li><strong>Vaishakha:</strong> Akshaya Tritiya, Narasinha Jayanti</li>
                        <li><strong>Ashadha:</strong> Shukla Dashami, Kark Sankranti</li>
                        <li><strong>Shravana:</strong> Mondays, Krishnashtami</li>
                        <li><strong>Bhadrapada:</strong> Shukla 14th, Anantwrat</li>
                        <li><strong>Ashwin:</strong> From Shukla Pratipada to Kojagiri Day</li>
                        <li><strong>Kartik:</strong> Shukla Chaturdashi, Vanabhojana Day</li>
                        <li><strong>Paush:</strong> Makar Sankranti</li>
                        <li><strong>Magh:</strong> Shukla Chaturdashi, Shukla Shasthi, Rathasaptami, Shivaratri</li>
                        <li><strong>Phalgun:</strong> From Shukla Navami to Krishna Panchami</li>
                    </ul>
                </div>


                <p className="mt-8 text-center text-lg font-medium text-amber-700">
                    Prasad Kowl is a sacred tradition where the divine will is sought with devotion and patience.
                </p>
            </div>
        </>
    );
};

export default page;
