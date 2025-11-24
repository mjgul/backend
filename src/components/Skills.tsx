import { motion } from 'framer-motion';
import { Database, Layers, Box } from 'lucide-react';

const skills = [
    {
        category: "Backend",
        items: ["Node.js", "Python (Flask/Django)", "Go", "RESTful APIs", "GraphQL"],
        icon: <Database className="w-6 h-6 text-blue-400" />,
    },
    {
        category: "Frontend",
        items: ["React", "Angular", "Next.js", "TypeScript", "React Native"],
        icon: <Layers className="w-6 h-6 text-purple-400" />,
    },
    {
        category: "DevOps & Cloud",
        items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins"],
        icon: <Box className="w-6 h-6 text-green-400" />,
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Prisma"],
        icon: <Database className="w-6 h-6 text-yellow-400" />,
    },
];


const Skills = () => {
    return (
        <section className="py-12 md:py-20 bg-background text-foreground" id="skills">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My expertise lies in building robust backend systems. Here are the tools and technologies I work with.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-gray-800 p-6 rounded-xl hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-4 bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
