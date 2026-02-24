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
          <h4 className="text-lg   ">
            © 2026 Digital Marketer. All rights reserved.
          </h4>
          <span className="text-sm text-gray-400 tracking-wide ">
            Built by ⚡ <a href="https://www.srinivasgundam.com" className="underline">www.srinivasgundam.com</a>
          </span>
        </div>

        <div className="flex gap-6 tracking-[0.1em] text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">whatsapp</a>
          <a href="#">facebook</a>
          <a href="https://www.linkedin.com/in/maheshwari-gundam-marketing/">LinkedIn</a>

        </div>
      </div>
    </footer>
  );
}