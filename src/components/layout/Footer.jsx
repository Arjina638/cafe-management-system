import React from "react";

function Footer() {
  return (
    <footer className="bg-[#6b4f3b] text-white py-6 text-center">
      <p>© 2025 Cozy Cafe. All Rights Reserved.</p>
      <p>Tindobato, Banepa, Nepal | ☎ +977 9861569812</p>

      <div className="flex justify-center gap-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
          Instagram
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
          Tiktok
        </a>
      </div>
    </footer>
  );
}

export default Footer;
