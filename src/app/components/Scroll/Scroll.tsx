// components/Scroll/Scroll.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BackgroundPart from "../BackGroundPart/BackGroundPart";

const Scroll: React.FC = () => {
    const aboutRef = useRef(null);
    const advantagesRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const aboutInView = useInView(aboutRef, { once: true });
    const advantagesInView = useInView(advantagesRef, { once: true });
    const servicesInView = useInView(servicesRef, { once: true });
    const contactInView = useInView(contactRef, { once: true });

    return (
        <div className="bg-gray-900">
            <div className="relative z-0 w-full h-screen">
                <BackgroundPart
                    aboutRef={aboutRef}
                    advantagesRef={advantagesRef}
                    servicesRef={servicesRef}
                    contactRef={contactRef}
                />
            </div>

            {/* About Section */}
            <motion.section
                ref={aboutRef}
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5 }}
                className="py-12 bg-gray-900 text-white h-screen flex justify-center items-center"
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
                        <h2 className="text-5xl font-bold mb-4">О нас</h2>
                        <p className="text-gray-400 mb-4 text-xl">
                            Мы — OPS Кузет, работаем на рынке безопасности более 10 лет. Наша миссия — обеспечить спокойствие и защиту каждого клиента, используя современные технологии и опытную команду.
                        </p>
                        <div>
                            <button className="bg-blue-600 flex mx-auto text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="rounded-2xl shadow-lg overflow-hidden">
                            <iframe
                                src="https://2gis.kz/aktobe/firm/70000001079677639/embed"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="OPS Кузет Location"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Advantages Section */}
            <motion.section
                ref={advantagesRef}
                initial={{ opacity: 0, x: -50 }}
                animate={advantagesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5 }}
                className="py-12 bg-gray-800 text-white h-screen flex justify-center items-center"
                id="advantages"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Наши преимущества</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Реагирование за 5 минут", icon: "⚡", description: "Молниеносная реакция групп на вызов." },
                            { title: "Современные технологии", icon: "🔒", description: "Используем лучшие системы защиты." },
                            { title: "Опытная команда", icon: "👮", description: "Наши сотрудники имеют многолетний опыт." },
                            { title: "Поддержка 24/7", icon: "📞", description: "Всегда готовы помочь клиентам." },
                        ].map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={advantagesInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 1.5 }}
                                className="p-6 bg-gray-700 rounded-2xl shadow-lg hover:bg-gray-600 delay-75 transition flex flex-col items-center"
                            >
                                <span className="text-4xl text-green-500 mb-4">{advantage.icon}</span>
                                <h3 className="text-xl font-semibold mb-2 text-center">{advantage.title}</h3>
                                <p className="text-gray-300 text-center">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                ref={servicesRef}
                initial={{ opacity: 0, x: -50 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5 }}
                className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16"
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-16 tracking-tight">Наши услуги</h2>
                    <ul className="divide-y divide-gray-700">
                        {[
                            { title: "Установка камер", icon: "📷", description: "Камеры с мобильным доступом." },
                            { title: "Датчики движения", icon: "📡", description: "Современные датчики угроз." },
                            { title: "Группы реагирования", icon: "🚓", description: "Работаем 24/7." },
                            { title: "Круглосуточный мониторинг", icon: "⏰", description: "Контроль объектов." },
                        ].map((service, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 2 }}
                                className={`py-8 flex items-center hover:bg-gray-800 transition-colors duration-300 ${index % 2 !== 0 ? "justify-end pe-10" : ""}`}
                            >
                                <span className="text-6xl mr-8">{service.icon}</span>
                                <div>
                                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                                    <p className="mt-2 text-gray-400">{service.description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </div>
    );
};

export default Scroll;
