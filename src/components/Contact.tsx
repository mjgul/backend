import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <footer className="bg-card border-t border-gray-800 py-8 md:py-12" id="contact">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://github.com/mjgul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/junaidgulsatti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:contact@junaidgul.co.uk" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-background border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="contact@junaidgul.co.uk"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-background border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Backend Developer Portfolio. Built with React & Tailwind.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
