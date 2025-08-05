import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                {/* Left Section */}
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-2">
                        Shree Shantadurga Shankhwaleshwari Saunsthan
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Gauthan, Veling, Mardol - Goa 403401
                    </p>

                    <h3 className="font-semibold text-lg mb-1">Contact</h3>
                    <p className="text-gray-400">Phone: 832-2343473, 91-8308770489</p>
                    <p className="text-gray-400">
                        Email:{" "}
                        <a
                            href="mailto:shantadurgagothan@gmail.com"
                            className="text-blue-300 hover:underline"
                        >
                            shantadurgagothan@gmail.com
                        </a>
                    </p>
                </div>

                {/* Right Section - Map */}
                <div className="md:w-1/3">
                    <iframe
                        title="Temple Location"
                        width="100%"
                        height="200"
                        className="rounded-md border-2 border-gray-700 shadow-md"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps?q=CXJC+M37,+Gothan,+Veling,+Mardol,+Goa+403404,+India&output=embed"
                    ></iframe>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Shree Shantadurga Shankhwaleshwari Saunsthan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
