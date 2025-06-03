"use client";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07190e] text-white">
      <h2 className="text-3xl font-bold text-red-400 mb-4">Something went wrong!</h2>
      <p className="mb-6 text-green-100/90">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-600 transition"
      >
        Try again
      </button>
    </div>
  );
} 