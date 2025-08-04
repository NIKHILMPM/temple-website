import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 w-full">
            <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                <div>
                    <h2 className="text-2xl font-bold mb-2">
                        Shree Shantadurga Shankhwaleshwari Saunsthan
                    </h2>
                    <p className="text-gray-400">
                        Gauthan, Veling, Mardol - Goa 403401
                    </p>
                </div>

                <div>
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
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Shree Shantadurga Shankhwaleshwari Saunsthan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
