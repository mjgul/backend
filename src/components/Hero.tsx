import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background text-foreground p-4 md:p-8 pt-24">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-4 text-primary">
                        <Terminal className="w-6 h-6" />
                        <span className="font-mono text-sm">full_stack_engineer.exe</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Junaid Gul</span>.
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Full Stack Software Engineer with 5+ years of expertise delivering end-to-end web solutions using modern JavaScript/TypeScript and Python ecosystems.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            View Projects
                        </button>
                        <button className="border border-gray-700 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
                    <div className="relative bg-card border border-gray-800 rounded-xl p-6 shadow-2xl">
                        <div className="flex gap-2 mb-4 border-b border-gray-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="font-mono text-sm space-y-2 text-gray-300">
                            <div className="flex">
                                <span className="text-pink-500 mr-2">const</span>
                                <span className="text-blue-400">stack</span>
                                <span className="text-gray-500">=</span>
                                <span className="text-gray-500 ml-2">{`[`}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-green-400">"React"</span>,
                                <span className="text-green-400 ml-2">"Node.js"</span>,
                                <span className="text-green-400 ml-2">"Python"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-green-400">"Go"</span>,
                                <span className="text-green-400 ml-2">"AWS"</span>,
                                <span className="text-green-400 ml-2">"Docker"</span>
                            </div>
                            <div className="text-gray-500">{`]; `}</div>
                            <div className="flex mt-4">
                                <span className="text-purple-400">function</span>
                                <span className="text-yellow-300 ml-2">deploy</span>
                                <span className="text-gray-500">()</span>
                                <span className="text-gray-500 ml-2">{`{
    `}</span>
                            </div>
                            <div className="pl-4 flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                <span>CI/CD Pipeline Active</span>
                            </div>
                            <div className="pl-4 flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                <span>Microservices Ready</span>
                            </div>
                            <div className="text-gray-500">{`} `}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
