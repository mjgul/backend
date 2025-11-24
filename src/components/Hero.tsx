import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background text-foreground p-8 pt-24">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-4 text-primary">
                        <Terminal className="w-6 h-6" />
                        <span className="font-mono text-sm">backend_developer.exe</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Invisible</span> Power.
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        I architect scalable, robust, and high-performance backend systems using Node.js, Go, and Python.
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
                                <span className="text-pink-500 mr-2">func</span>
                                <span className="text-blue-400">main</span>
                                <span className="text-gray-500">()</span>
                                <span className="text-gray-500 ml-2">{`{`}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-purple-400">go</span>
                                <span className="text-yellow-300 ml-2">Serve</span>
                                <span className="text-gray-500">(</span>
                                <span className="text-green-400">":8080"</span>
                                <span className="text-gray-500">)</span>
                            </div>
                            <div className="pl-4 text-gray-500">// Initializing microservices...</div>
                            <div className="pl-4 flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                <span>Database connected</span>
                            </div>
                            <div className="pl-4 flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                <span>Cache layer ready</span>
                            </div>
                            <div className="text-gray-500">{`}`}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
