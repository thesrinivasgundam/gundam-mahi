export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="
        max-w-7xl mx-auto
        px-6
        flex flex-col md:flex-row
        justify-between items-center
        gap-6
      ">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">
            © 2026 Portfolio
          </p>
          <p className="text-sm text-gray-400">
            Built with Next.js & TailwindCSS
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}