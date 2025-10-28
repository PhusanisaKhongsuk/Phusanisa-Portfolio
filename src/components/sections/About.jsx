import { RevealOnScroll } from '../RevealOnScroll';
export const About = () => {

    // const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
    // const backendSkills = ["Node.js", "Express", "MongoDB", "SQL", "Python"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</span>
                    </h2>
                </div>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 text-lg mb-6">
                        I recently graduate with a Bachelor's degree in Applied Mathematics from Mahidol University International College. 
                        My academic journey has equipped me with strong analytical and problem-solving skills, which I am eager to apply in real-world scenarios.
                    </p>

                    {/* <div className="grid grid-cols-1 md:grid-col-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                    {tech}   
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div> */}

                    <p className="text-gray-300 text-lg">
                        Beyond academics, I have a passion for coding and technology. I enjoy exploring new programming languages and frameworks, and I am particularly interested in the field of AI and machine learning. Their capabilities to revolutionize industries and improve lives fascinate me, and I am looking for potential opportunities to contribute to this exciting field.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-left"> 🎓 Education </h3>
                        <ul>
                            <li>
                                <strong> B.S. in Applied Mathematics</strong> - Mahidol University International College (2021 - 2025)

                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-left"> 🛠️ Skills </h3>
                        <div className="flex flex-wrap gap-2 justify-start items-center">
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" className="w-5 h-5 inline-block" />
                                Python
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/656px-Java_programming_language_logo.svg.png" alt="Java" className="w-5 h-5 inline-block" />
                                Java
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2s9kUe4YsQOIEK_0r04FTsjcNiyCofp4Vi7ul5BjPGKJwWyrvu1K3_OAwtQSYve3SxA&usqp=CAU" alt="LaTeX" className="w-5 h-5 inline-block" />
                                LaTeX
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png" alt="R" className="w-5 h-5 inline-block" />
                                R
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png" alt="JavaScript" className="w-5 h-5 inline-block" />
                                JavaScript
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" className="w-5 h-5 inline-block" />
                                React
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://www.mindrops.com/images/nodejs-image.webp" alt="Node.js" className="w-5 h-5 inline-block" />
                                Node.js
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://ddy8ftb0naev0.cloudfront.net/assets/42/original/html5_and_css3.webp" alt="HTML & CSS" className="w-5 h-5 inline-block" />
                                HTML & CSS
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Git & GitHub" className="w-5 h-5 inline-block" />
                                Git & GitHub
                            </span>
                            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.2)] transition">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" alt="SQL" className="w-5 h-5 inline-block" />
                                C Programming Language
                            </span>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mt-8">
                    <h3 className="text-xl font-bold mb-4 text-center">📝 Relevant Course Taken</h3>
                    <div className="grid grid-cols-2 gap-x-8">
                        <ul className="list-disc list-inside text-grey-300 space-y-2 text-left">
                            <li>Calculus I, II, III</li>
                            <li>Linear Algebra A,B</li>
                            <li>Ordinary Differential Equations</li>
                            <li>Partial Differential Equations</li>
                            <li>Statistic for science I,II</li>
                        </ul>
                        <ul className="list-disc list-inside text-grey-300 space-y-2 text-left">
                            <li>Data Structures and abstrations</li>
                            <li>Discrete Mathematic</li>
                            <li>Abstract Algebra</li>
                            <li>Probability</li>
                            <li>Introduction to Mathematical Software</li>
                        </ul>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
}