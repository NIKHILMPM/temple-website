'use client';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

const page = () => {
    const historyRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(historyRef.current.children);

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
    }, { dependencies: [], scope: historyRef });

    return (
        <>
            <div ref={historyRef} className="px-6 py-12 max-w-5xl mx-auto text-justify leading-relaxed text-neutral-800">
                <h1 className="text-4xl font-bold text-center text-amber-700 mb-10 w-full flex justify-start">Temple History</h1>

                <p className="mb-6">
                    ‘Kokanakhyan’, a 266-year-old historical volume, mentions the village of Sankhavali and its ancient glory. One of its most renowned temples was that of Shree Shantadurga Sankhwaleshwari, standing in Salcete since the beginning of the Gomantak civilization, until the Portuguese arrived in Goa in 1510.
                </p>

                <p className="mb-6">
                    On 27th February 1510, the Portuguese invaded and captured Old Goa, leading to the decline of the Adilshahi dynasty. As Christianity spread, the Portuguese employed violent methods: destroying temples, idols, and Hindu religious institutions — beginning with the Island of Goa and extending into Salcete. The village of Kushasthali (modern-day Cortalim), situated across the river from Goa island, was among the first to suffer.
                </p>

                <p className="mb-6">
                    Those devoted to their Kuladevatas chose to preserve them at any cost. The idol of Mangesh was relocated to Priol in Antruz Mahal — then under Adilshahi rule — to escape desecration. Likewise, Shree Santeri of Shankhwal (now Shree Shantadurga Sankhwaleshwari) was moved to Veling in Ponda, along with Shree Vijayadurga to Keri and Shree Narsu to Gothan.
                </p>

                <p className="mb-6">
                    These idols were often first placed in temporary shelters until suitable permanent temples could be constructed. Their relocation symbolized the unbroken faith of the Kulavis, who prioritized their deities over property, comfort, and safety.
                </p>

                <p className="mb-6">
                    In 1560, a priest named Gasper led a mass conversion movement, indoctrinating 409 Hindus in a single ceremony at São Paulo College. This act was supported by Portuguese authorities who sanctioned further conversions throughout Salcete.
                </p>

                <p className="mb-6">
                    According to ‘Oriente Conquistado’ and ‘Monumenta Historica Societatis Iesu – Documenta Indica’, Jesuit missionaries, accompanied by Portuguese forces, entered Salcete on 1st May 1560. Upon reaching the Shree Mangesh temple in Kutthal, they found the idol gone — safely moved by the Kulavis just the night before.
                </p>

                <p className="mb-6">
                    The empty structure was claimed by missionaries and repurposed for church construction, with adjoining lands granted by the Portuguese. This timeline confirms that Shankhwal’s Shree Santeri must also have been moved before May 1st, 1560.
                </p>

                <p className="mb-6">
                    The *Konkanakhyan*, under the chapter ‘Devatanche Sthalantar’, describes these transfers:
                </p>

                <blockquote className="italic border-l-4 border-amber-500 pl-4 text-sm mb-6 text-gray-700">
                    Kushasthali Shreemangesha Prioli, Verane Mhalasa Mhadadoli<br />
                    Shankhavali deva donhi sthali, Keri aani Velingasi<br />
                    Velingasi Narasinha Santari, Vijaydurga te Keri majhari<br />
                    Aani Keloshichi Shantadurga bari, Rahili Kavale te grami…
                </blockquote>

                <p className="mb-6">
                    These lines detail the strategic and sacred movement of idols from their native temples to safety. The Kulavis, resigned to fate, took what they could and crossed borders into Adilshahi territory, away from Portuguese reach.
                </p>

                <p className="mb-6">
                    After their exodus, Jesuit missionaries rampaged through villages, destroying temples and idols, and enforcing conversions through violence and terror. The temples in Shankhavali were completely destroyed. Fr. Gomes Vaz, in a letter to his superiors, details the burning of all temples in Shankhwal and how the wood from Shree Santeri's temple was used in constructing the St. Lourenço church in Agashi.
                </p>

                <p className="mt-8 text-center text-lg font-medium text-amber-700">
                    The spirit of Santeri and Her devotees lived on — not through buildings, but through the unyielding devotion of the Kulavis who carried Her across time and terror.
                </p>
            </div>
        </>
    );
};

export default page;
