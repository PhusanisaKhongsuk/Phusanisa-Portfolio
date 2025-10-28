import { RevealOnScroll } from '../RevealOnScroll';
export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,140,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Image Compression with DCT and FFT</h3>
                        <p className="text-gray-300 mb-4">A technical implementation and comparative analysis of two frequency-domain compression techniques: Discrete Cosine Transform (DCT) and Fast Fourier Transform (FFT).</p>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-bold mb-2">Key Features:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                                <li>Built custom DCT/FFT implementations in C for optimal performance, integrated with Python via ctypes</li>
                                <li>Implemented complete JPEG-style compression pipeline including color space conversion (RGB to YCbCr), 8×8 block processing, quantization, and reconstruction</li>
                                <li>Developed circular lowpass filtering for FFT-based frequency component reduction</li>
                                <li>Success Evaluation: Measured quality-compression trade-off using PSNR (Peak Signal-to-Noise Ratio) to quantify visual similarity between original and compressed images, balanced against file size reduction</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">Impact:</h4>
                            <p className="text-gray-300">This project demonstrates the mathematical foundations behind modern image compression standards like JPEG, exploring the trade-offs between compression ratio, computational efficiency, and visual quality.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Python', 'C', 'OpenCV', 'NumPy'].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.1)] transition-all">
                                    {tech}   
                                    </span>
                                ))}
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,140,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Evaluating Image Preprocessing Strategies for Tesseract-Based OCR Systems</h3>
                        <p className="text-gray-300 mb-4">A comprehensive empirical study evaluating preprocessing pipelines to optimize OCR accuracy across diverse image degradation scenarios.</p>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-bold mb-2">Key Features:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                                <li>Conducted large-scale evaluation using synthetically degraded document images</li>
                                <li>Tested multiple preprocessing techniques: Gaussian/mean/median filtering, contrast enhancement, resizing, Laplacian sharpening, skew correction, and binarization</li>
                                <li>Developed automated pipeline for systematic degradation synthesis including noise, blur effects, geometric distortions, and compression artifacts</li>
                                <li>Success Evaluation: Measured character-level accuracy improvement by comparing OCR text output against ground truth, calculating percentage improvement over baseline (unprocessed) performance</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">Impact:</h4>
                            <p className="text-gray-300">Provides evidence-based guidelines for selecting optimal OCR preprocessing pipelines, directly applicable to document digitization systems, automated data entry, and accessibility services. Research challenges common assumptions about binarization and demonstrates the importance of degradation-aware preprocessing selection.</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Python', 'Tesseract OCR', 'OpenCV', 'scikit-image', 'NumPy'].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,140,246,0.1)] transition-all">
                                    {tech}   
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
}