import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Using react-icons

const Footer = () => {
    return (
        <footer className="bg-orange-500 text-white py-10 px-15">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper </h2>
                    
                <p className="text-gray-100 text-sm md:text-base max-w-2xl mb-8 opacity-90">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <span className="text-lg font-medium">Social Links</span>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white p-2 rounded-full text-[#214d3e] hover:bg-gray-300 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#214d3e] hover:bg-gray-300 transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#214d3e] hover:bg-gray-300 transition-colors">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200 gap-4">
                <p className='text-[15px]'>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors text-[15px]">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors text-[15px]">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors text-[15px]">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;