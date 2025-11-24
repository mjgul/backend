import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Database, Lock } from 'lucide-react';

const projects = [
    {
        title: "Distributed Task Queue System",
        description: "A high-performance distributed task queue built with Go and Redis. Handles 1M+ jobs/hour with guaranteed delivery and fault tolerance.",
        tags: ["Go", "Redis", "gRPC", "Docker"],
        github: "#",
        demo: "#",
        icon: <Server className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "E-commerce Microservices API",
        description: "Scalable microservices architecture for an e-commerce platform. Features include auth, inventory management, and payment processing.",
        tags: ["Node.js", "Express", "RabbitMQ", "PostgreSQL"],
        github: "#",
        demo: "#",
        icon: <Database className="w-8 h-8 text-green-400" />,
    },
    {
        title: "Real-time Analytics Engine",
        description: "Python-based analytics engine processing real-time data streams. Uses Apache Kafka for ingestion and ClickHouse for storage.",
        tags: ["Python", "FastAPI", "Kafka", "ClickHouse"],
        github: "#",
        demo: "#",
        icon: <Lock className="w-8 h-8 text-purple-400" />,
    },
];

const Projects = () => {
    return (
        <section className="py-20 bg-background text-foreground" id="projects">
            <div className="max-w-6xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl">
                        A selection of backend systems and tools I've architected and built.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
