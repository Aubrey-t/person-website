export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#07190e] flex flex-col items-center justify-center px-2">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <img
            src="/profile-photo.jpg"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full object-cover border-4 border-green-400 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
