import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCheck, FiArrowRight, FiPlay, FiDownload, FiShield } from 'react-icons/fi';
import { Button } from '../../ui/Button';
import { solutionsData } from '../../data/solutionsData.jsx';

const Section = ({ id, title, children, className = "" }) => (
    <section id={id} className={`scroll-mt-32 py-16 ${className}`}>
        {title && (
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
            >
                {title}
            </motion.h2>
        )}
        {children}
    </section>
);

// Simplified ImpactBlock - Image Left side, Content Right side
const ImpactBlock = ({ title, points, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row gap-12 items-center py-16"
    >
        {/* Left side - Image */}
        <div className="flex-1 w-full">
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group border border-gray-100"
            >
                {image ? (
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                            console.log('Image failed to load:', image);
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
                        }}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <FiShield className="w-32 h-32 text-gray-300 opacity-30" />
                    </div>
                )}
            </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{title}</h3>
            <ul className="space-y-4">
                {points.map((point, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="flex items-start gap-3"
                    >
                        <div className="mt-1 p-1 bg-blue-100 rounded-full shrink-0">
                            <FiCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700 text-lg">{point}</span>
                    </motion.li>
                ))}
            </ul>
            <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition mt-4"
            >
                Learn more <FiArrowRight className="ml-2" />
            </motion.a>
        </div>
    </motion.div>
);

const SolutionTemplate = () => {
    const { slug } = useParams();
    console.log('SolutionTemplate rendered with slug:', slug);
    console.log('Available keys:', Object.keys(solutionsData));
    const data = solutionsData[slug];
    console.log('Data found:', !!data);

    const [activeSection, setActiveSection] = useState('why-it-matters');

    // Parallax effect for hero
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 200]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -50% 0px' }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [slug]);

    // Reset scroll position when slug changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <Navigate to="/solutions/safe-ai" replace />;
    }

    // Extract solution type for theme variations
    const getThemeStyles = () => {
        const themes = {
            'safe-ai': {
                primary: '#0B1C3E',
                secondary: '#1A2F4F',
                accent: '#00F0FF',
                font: '"Space Grotesk", sans-serif',
                pattern: "radial-gradient(circle at 30% 40%, rgba(0, 240, 255, 0.1) 0%, transparent 50%)",
            },
            'm365-security': {
                primary: '#0B1C3E',
                secondary: '#1A2F4F',
                accent: '#4F8CFF',
                font: '"Space Grotesk", sans-serif',
                pattern: "repeating-linear-gradient(45deg, rgba(79, 140, 255, 0.05) 0px, rgba(79, 140, 255, 0.05) 20px, transparent 20px, transparent 40px)",
            },
            'ransomware-defense': {
                primary: '#0B1C3E',
                secondary: '#1A2F4F',
                accent: '#FF5E5E',
                font: '"Space Grotesk", sans-serif',
                pattern: "linear-gradient(135deg, rgba(255, 94, 94, 0.1) 0%, transparent 50%, rgba(255, 94, 94, 0.1) 100%)",
            },
            'email-protection': {
                primary: '#0B1C3E',
                secondary: '#1A2F4F',
                accent: '#50C878',
                font: '"Space Grotesk", sans-serif',
                pattern: "radial-gradient(ellipse at 70% 30%, rgba(80, 200, 120, 0.1) 0%, transparent 60%)",
            },
            'cloud-app-security': {
                primary: '#0B1C3E',
                secondary: '#1A2F4F',
                accent: '#7FD1B9',
                font: '"Space Grotesk", sans-serif',
                pattern: "repeating-linear-gradient(90deg, rgba(127, 209, 185, 0.1) 0px, rgba(127, 209, 185, 0.1) 2px, transparent 2px, transparent 30px)",
            },
            'security-training': {
                primary: '#0B1C3E',
                secondary: '#1A2F4F',
                accent: '#F9A826',
                font: '"Space Grotesk", sans-serif',
                pattern: "linear-gradient(45deg, rgba(249, 168, 38, 0.08) 25%, transparent 25%, transparent 50%, rgba(249, 168, 38, 0.08) 50%, rgba(249, 168, 38, 0.08) 75%, transparent 75%, transparent)",
            }
        };
        return themes[slug] || themes['safe-ai'];
    };

    const theme = getThemeStyles();

    const navItems = [
        { id: 'why-it-matters', label: 'Why It Matters' },
        { id: 'impact', label: 'Impact' },
        { id: 'resources', label: 'Resources' },
        { id: 'demo', label: 'Request a Demo' },
    ];

    return (
        <div 
            key={slug}
            className="bg-white min-h-screen font-sans selection:bg-blue-100" 
            style={{ fontFamily: theme.font }}
        >
            {/* 1️⃣ Hero CTA Section */}
            <motion.div
                key={`hero-${slug}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden text-white"
                style={{ 
                    backgroundColor: theme.primary,
                    minHeight: '85vh',
                }}
            >
                {/* Layered Background Elements */}
                <div className="absolute inset-0">
                    {/* Base gradient */}
                    <div 
                        className="absolute inset-0"
                        style={{ 
                            background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                        }}
                    />
                    
                    {/* Pattern overlay */}
                    <div 
                        className="absolute inset-0 opacity-30"
                        style={{ 
                            backgroundImage: theme.pattern,
                            mixBlendMode: 'overlay',
                        }}
                    />
                    
                    {/* Animated floating orbs */}
                    <motion.div
                        key={`orb1-${slug}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: 0.3, 
                            scale: 1,
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{ 
                            opacity: { duration: 1, delay: 0.2 },
                            scale: { duration: 1, delay: 0.2 },
                            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                            x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                        }}
                        className="absolute top-20 right-20 w-96 h-96 rounded-full"
                        style={{ 
                            background: `radial-gradient(circle at 30% 30%, ${theme.accent}40, transparent 70%)`,
                            filter: 'blur(60px)',
                        }}
                    />
                    
                    <motion.div
                        key={`orb2-${slug}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: 0.2, 
                            scale: 1,
                            y: [0, 40, 0],
                            x: [0, -30, 0]
                        }}
                        transition={{ 
                            opacity: { duration: 1, delay: 0.4 },
                            scale: { duration: 1, delay: 0.4 },
                            y: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                            x: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                        }}
                        className="absolute bottom-20 left-20 w-80 h-80 rounded-full"
                        style={{ 
                            background: `radial-gradient(circle at 70% 70%, ${theme.accent}30, transparent 70%)`,
                            filter: 'blur(50px)',
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-26 h-[90vh] min-h-[500px] flex items-center">
                    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                        
                        {/* Left Column - Text Content */}
                        <motion.div
                            key={`left-${slug}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white max-w-2xl"
                        >
                            {/* Badge */}
                            <motion.div
                                key={`badge-${slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-8"
                            >
                                <span 
                                    className="text-sm tracking-[0.2em] uppercase font-medium"
                                    style={{ color: theme.accent }}
                                >
                                    {data.hero.badge}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                key={`title-${slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
                            >
                                {data.hero.title}
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                key={`subtitle-${slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg lg:text-xl mb-10 max-w-xl leading-relaxed opacity-90"
                            >
                                {data.hero.subtitle}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                key={`cta-${slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 items-center"
                            >
                                <Button
                                    size="lg"
                                    className="px-8 py-4 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                    style={{ 
                                        backgroundColor: theme.accent,
                                        color: theme.primary,
                                    }}
                                    rightIcon={<FiArrowRight className="ml-2" />}
                                >
                                    Learn More →
                                </Button>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 group px-6 py-4"
                                >
                                    <div 
                                        className="w-10 h-10 rounded-full flex items-center justify-center border"
                                        style={{ borderColor: theme.accent }}
                                    >
                                        <FiPlay style={{ color: theme.accent }} className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm tracking-wider uppercase">Watch Demo</span>
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div 
                                key={`stats-${slug}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-16 flex gap-12"
                            >
                                {['Zero Trust', 'Real-time', 'Automated'].map((stat, i) => (
                                    <div key={i} className="relative">
                                        <div 
                                            className="text-2xl font-bold mb-1"
                                            style={{ color: theme.accent }}
                                        >
                                            {i === 0 ? '100%' : i === 1 ? '24/7' : 'AI-Powered'}
                                        </div>
                                        <div className="text-xs tracking-wider opacity-70">{stat}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div
                            key={`right-${slug}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative hidden lg:block lg:px-15"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src={data.hero.image} 
                                    alt={data.hero.title}
                                    className="w-full h-full object-cover"
                                />
                                <div 
                                    className="absolute inset-0"
                                    style={{ 
                                        background: `linear-gradient(135deg, ${theme.accent}20, transparent)`,
                                        mixBlendMode: 'overlay'
                                    }}
                                />
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                key={`card1-${slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: [0, -10, 0] }}
                                transition={{ 
                                    opacity: { delay: 0.7, duration: 0.5 },
                                    y: { delay: 0.7, duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-xl"
                                style={{ backdropFilter: 'blur(10px)' }}
                            >
                                <div className="text-2xl font-bold mb-1" style={{ color: theme.accent }}>99.9%</div>
                                <div className="text-xs opacity-80">Threat Prevention</div>
                            </motion.div>

                            <motion.div
                                key={`card2-${slug}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: [0, 10, 0] }}
                                transition={{ 
                                    opacity: { delay: 0.8, duration: 0.5 },
                                    y: { delay: 0.8, duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20 shadow-xl"
                                style={{ backdropFilter: 'blur(10px)' }}
                            >
                                <div className="text-2xl font-bold mb-1" style={{ color: theme.accent }}>0</div>
                                <div className="text-xs opacity-80">False Positives</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Rest of the component */}
            <div key={`content-${slug}`} className="container mx-auto px-4 max-w-7xl py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

                    {/* Sticky Side Navigation */}
                    <div className="hidden lg:block w-64 flex-shrink-0 relative">
                        <div className="sticky top-32 space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-3">On This Page</p>
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all border-l-2 ${activeSection === item.id
                                        ? 'border-blue-600 bg-blue-50 text-blue-700 translate-x-1'
                                        : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column Content */}
                    <div className="flex-1 space-y-24">

                        {/* Why It Matters Section */}
                        <Section key={`why-${slug}`} id="why-it-matters" title={data.video.title}>
                            <motion.div
                                key={`video-${slug}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video relative group cursor-pointer border-4 border-white ring-1 ring-gray-200"
                            >
                                <div className="absolute inset-0">
                                    {data.video.thumbnail ? (
                                        <img 
                                            src={data.video.thumbnail} 
                                            alt={data.video.videoTitle}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900');
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white pl-1 border border-white/30 shadow-lg group-hover:bg-blue-600/90 group-hover:border-blue-500 transition-all duration-300"
                                    >
                                        <FiPlay className="w-10 h-10 fill-current" />
                                    </motion.div>
                                </div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-bold text-xl mb-1">{data.video.videoTitle}</p>
                                    <p className="text-sm text-gray-300 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> {data.video.duration}</p>
                                </div>
                            </motion.div>
                        </Section>

                        {/* Impact Section - All images on LEFT side */}
                        <Section key={`impact-${slug}`} id="impact" title="Comprehensive Impact">
                            {data.impact.map((block, index) => (
                                <ImpactBlock
                                    key={`${slug}-impact-${index}`}
                                    title={block.title}
                                    points={block.points}
                                    image={block.image}
                                />
                            ))}
                        </Section>

                        {/* Resources Section */}
                        <Section key={`resources-${slug}`} id="resources" className="bg-gray-50 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-0 lg:px-0 lg:rounded-3xl lg:p-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{data.resources.heading}</h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{data.resources.subheading}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Featured Resource */}
                                <motion.div
                                    key={`featured-${slug}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-2 group cursor-pointer"
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                                        <div className="absolute inset-0 bg-blue-900 transition-transform duration-700 group-hover:scale-105">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"></div>
                                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                                        <div className="absolute top-8 left-8">
                                            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">{data.resources.featured.tag}</span>
                                        </div>

                                        <div className="absolute bottom-10 left-10 max-w-3xl pr-10">
                                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-blue-400 underline-offset-4">{data.resources.featured.title}</h3>
                                            <p className="text-gray-300 text-lg">{data.resources.featured.description}</p>
                                        </div>

                                        <div className="absolute bottom-10 right-10 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <div className="bg-white text-blue-900 rounded-full p-4 shadow-lg">
                                                <FiArrowRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Smaller Resources */}
                                {data.resources.list.map((resource, i) => (
                                    <motion.div
                                        key={`${slug}-resource-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -5 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
                                    >
                                        <div className={`absolute top-0 right-0 p-3 rounded-bl-2xl ${resource.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                                            <FiDownload className="w-6 h-6" />
                                        </div>

                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${resource.color}`}>
                                            {resource.type}
                                        </div>

                                        <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors h-16">{resource.title}</h4>

                                        <div className="flex items-center text-blue-600 font-bold mt-auto group-hover:gap-2 transition-all">
                                            Download Now <FiArrowRight className="ml-1" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>

                        {/* Request a Demo Section */}
                        <Section key={`demo-${slug}`} id="demo">
                            <div className="bg-[#0b1c3e] rounded-3xl overflow-hidden shadow-2xl text-white">
                                <div className="grid lg:grid-cols-2">
                                    <div className="p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">{data.demo.title}</h2>
                                            <p className="text-blue-200 text-lg mb-10 leading-relaxed">
                                                {data.demo.text}
                                            </p>
                                            <ul className="space-y-6">
                                                {data.demo.points.map((item, i) => (
                                                    <li key={`${slug}-demo-point-${i}`} className="flex items-center gap-4 text-lg font-medium text-white/90">
                                                        <div className="p-1 bg-green-500/20 rounded-full">
                                                            <FiCheck className="text-green-400 w-5 h-5 shrink-0" />
                                                        </div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-white text-gray-900 p-10 lg:p-20">
                                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest!"); }}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="John" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="Doe" required />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Email</label>
                                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="john@company.com" required />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="Acme Corp" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Job Title</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="CISO" />
                                                </div>
                                            </div>

                                            <Button type="submit" size="lg" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 shadow-lg hover:shadow-xl transition-all">
                                                Get Started
                                            </Button>
                                            <p className="text-xs text-gray-500 text-center mt-4">
                                                By submitting this form, you agree to our Privacy Policy.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionTemplate;