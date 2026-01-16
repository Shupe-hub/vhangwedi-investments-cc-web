const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-white font-bold text-lg mb-3">
                        VHAGWEDI Investments CC
                    </h3>
                    <p className="text-sm">
                        Strategic investments across property, mining, and finance in South Africa.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Property</li>
                        <li>Mining</li>
                        <li>Finance</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Contact</h4>
                    <p className="text-sm">info@vhagwedi.co.za</p>
                    <p className="text-sm">South Africa</p>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
                © {new Date().getFullYear()} Vhagwedi Investments CC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
