"use client";

export default function ResumePage() {
  return (
    <div className="min-h-screen w-full bg-[#07190e] flex flex-col items-center justify-center pt-24">
      <div className="bg-[#10241b] rounded-2xl shadow-2xl p-12 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-green-400 mb-4 text-center">Resume</h1>
        <p className="text-green-100/90 text-lg text-center mb-6">My full resume will be available here soon. In the meantime, you can download a PDF version below.</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-600 transition shadow">Download Resume (PDF)</a>
      </div>
    </div>
  );
} 