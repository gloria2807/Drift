import { FaSnowflake } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg px-8 py-10 flex flex-col gap-10">

        {/* Top: Email Signup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-sm text-gray-500 mt-2">
              Sign up for our newsletter and stay updated.
            </p>
          </div>

          <button className="cursor-pointer h-fit mt-2 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg whitespace-nowrap">
            Sign Up
          </button>
        </div>

        {/* Middle: Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Beta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Socials</h4>
            <ul className="space-y-2">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom: Logo + Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 text-sm text-gray-500">
          <div className="mb-2 sm:mb-0">
            <FaSnowflake className="h-8 text-accent" />
          </div>
          <div>&copy; {new Date().getFullYear()} EGO. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
