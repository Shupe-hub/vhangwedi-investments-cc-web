import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AboutSection from "../components/AboutSection";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    return (
        <>
            <Header />

            <main className="pt-36 px-6 pb-20 bg-white min-h-screen">
                {/* HERO */}
                <section
                    className="relative rounded-2xl mb-24 bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: "url('/images/home_bg.png')" }}
                >
                    <div className="absolute inset-0 bg-white/90" />

                    <div className="relative z-10 py-20 max-w-7xl mx-auto">
                        {/* TWO COLUMN */}
                        <div className="flex flex-wrap gap-10 items-center justify-between">
                            {/* LEFT */}
                            <div className="flex-1 min-w-[300px] text-center">
                                <h1 className="text-4xl font-bold tracking-[3px] text-gray-900">
                                    VHAGWEDI
                                </h1>
                                <p className="text-xl text-gray-600 mt-1">Investments CC</p>
                                <p className="text-gray-500 mt-2">
                                    Property • Mining • Finance
                                </p>

                                <form
                                    onSubmit={handleSearch}
                                    className="mt-8 flex flex-wrap justify-center gap-3"
                                >
                                    <input
                                        type="text"
                                        placeholder="Search investments, properties, mining opportunities..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="px-4 py-3 w-80 rounded-lg border border-gray-300 shadow focus:ring-2 focus:ring-yellow-400 outline-none"
                                    />
                                    <button className="px-6 py-3 bg-yellow-400 rounded-lg font-semibold hover:bg-yellow-500">
                                        Search
                                    </button>
                                </form>
                            </div>

                            {/* RIGHT */}
                            <div className="flex-1 max-w-xl bg-white rounded-xl p-7 shadow-lg text-gray-800 leading-relaxed">
                                <p>
                                    Vhagwedi Investments CC is a dynamic South African investment
                                    company specializing in high-value opportunities across
                                    property development, strategic mining ventures, and tailored
                                    financial solutions. With over 15 years of experience, we
                                    deliver sustainable growth and exceptional returns.
                                </p>
                            </div>
                        </div>

                        {/* DIVISIONS */}
                        <div className="grid md:grid-cols-3 gap-8 mt-20">
                            {[
                                {
                                    title: "Property",
                                    image: "/images/vgd_demo_properties.jpg",
                                    desc: "Prime real estate acquisitions & development",
                                    path: "/property",
                                },
                                {
                                    title: "Mining",
                                    image: "/images/vgd_demo_mining.jpg",
                                    desc: "Strategic mineral rights and resource investments",
                                    path: "/mining",
                                },
                                {
                                    title: "Finance",
                                    image: "/images/vgd_demo_finance.jpg",
                                    desc: "Structured finance & private equity solutions",
                                    path: "/financial",
                                },
                            ].map((item) => (
                                <Link key={item.title} to={item.path}>
                                    <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-52 w-full object-cover"
                                        />
                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* TRUST */}
                        <div className="flex justify-center gap-12 text-center mt-20">
                            {[
                                ["15+", "Years in Business"],
                                ["R2.8B+", "Capital Deployed"],
                                ["200+", "Satisfied Investors"],
                            ].map(([num, label]) => (
                                <div key={label}>
                                    <div className="text-3xl font-bold">{num}</div>
                                    <p className="text-gray-600">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16">
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800">
                                Discuss Your Investment Needs
                            </button>
                        </div>
                    </div>
                </section>

                <AboutSection />
            </main>

            <Footer />
        </>
    );
};

export default Home;
