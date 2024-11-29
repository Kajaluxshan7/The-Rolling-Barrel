import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="text-center">
        <p>&copy; 2023 The Rolling Barrel. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="#privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-gray-400">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
