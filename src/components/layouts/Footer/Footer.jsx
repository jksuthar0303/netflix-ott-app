import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Questions?</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
              <li><a href="#" className="text-sm hover:underline">Investor Relations</a></li>
              <li><a href="#" className="text-sm hover:underline">Privacy</a></li>
              <li><a href="#" className="text-sm hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="text-sm hover:underline">Corporate Information</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Manage Profile</a></li>
              <li><a href="#" className="text-sm hover:underline">Help Center</a></li>
              <li><a href="#" className="text-sm hover:underline">Redeem Gift Cards</a></li>
              <li><a href="#" className="text-sm hover:underline">View Account</a></li>
              <li><a href="#" className="text-sm hover:underline">Payment Information</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Netflix Originals</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Action Movies</a></li>
              <li><a href="#" className="text-sm hover:underline">Romantic Movies</a></li>
              <li><a href="#" className="text-sm hover:underline">Comedies</a></li>
              <li><a href="#" className="text-sm hover:underline">Documentaries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Jobs</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white text-xl hover:text-gray-400"><FaFacebook /></a></li>
              <li><a href="#" className="text-white text-xl hover:text-gray-400"><FaInstagram /></a></li>
              <li><a href="#" className="text-white text-xl hover:text-gray-400"><FaTwitter /></a></li>
              <li><a href="#" className="text-white text-xl hover:text-gray-400"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          <p>© 2024 Netflix, Inc. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">Terms of Use</a> | 
            <a href="#" className="hover:underline"> Privacy</a> | 
            <a href="#" className="hover:underline"> Cookie Preferences</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
