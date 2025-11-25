import { motion } from 'framer-motion';
import { GitBranch, Terminal, Cloud, Server, Activity, CheckCircle2 } from 'lucide-react';

const stages = [
    {
        id: 'dev',
        title: 'Development',
        icon: GitBranch,
        description: 'Code committed to repository',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20'
    },
    {
        id: 'ci',
        title: 'CI/CD Pipeline',
        icon: Terminal,
        description: 'Automated build & tests',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/20'
    },
    {
        id: 'deploy',
        title: 'Provisioning',
        icon: Cloud,
        description: 'Terraform infrastructure setup',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        border: 'border-cyan-400/20'
    },
    {
        id: 'runtime',
        title: 'Active Servers',
        icon: Server,
        description: 'Kubernetes cluster running',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20'
    },
    {
        id: 'monitor',
        title: 'Monitoring',
        icon: Activity,
        description: 'Real-time metrics & alerts',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        border: 'border-orange-400/20'
    }
];

export default function ServerWorkflow() {
    return (
        <section id="workflow" className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-primary">&lt;</span> Infrastructure Workflow <span className="text-primary">/&gt;</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Automated server management pipeline from code to production monitoring.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {stages.map((stage, index) => (
                            <motion.div
                                key={stage.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className={`
                  h-full p-6 rounded-xl border backdrop-blur-sm transition-all duration-300
                  ${stage.bg} ${stage.border} hover:border-opacity-50 hover:shadow-lg hover:shadow-primary/5
                  flex flex-col items-center text-center gap-4
                `}>
                                    <div className={`
                    p-3 rounded-lg ${stage.bg} ${stage.color} ring-1 ring-inset ring-white/10
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                                        <stage.icon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-sm mb-1">{stage.title}</h3>
                                        <p className="text-xs text-gray-400">{stage.description}</p>
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="absolute top-3 right-3">
                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${stage.color.replace('text-', 'bg-')}`} />
                                        </motion.div>
                                    </div>

                                    {/* Active Checkmark */}
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background rounded-full p-1 border border-gray-800">
                                        <CheckCircle2 size={14} className="text-green-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
