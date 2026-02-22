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
          <p className="text-lg letter-spacing-5  ">
            © 2026 Digital Marketer. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built by <a href="https://www.srinivasgundam.com" className="underline">www.srinivasgundam.com</a>
          </p>
        </div>

        <div className="flex gap-6  text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">LinkedIn</a>
          <a href="#">LinkedIn</a>
          <a href="#">LinkedIn</a>

        </div>
      </div>
    </footer>
  );
}