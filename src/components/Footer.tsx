import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export function Footer() {

    return (
        <footer className="w-full bg-gray-500 text-white py-8">
        <div className="flex justify-center space-x-4">
            <a href="">
                <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="">
                <FaSquareXTwitter className="w-6 h-6" />
            </a>
            <a href="">
                <CiInstagram className="w-6 h-6" />
            </a>
        </div>
        <div className="container mx-auto text-center mt-4">
            <p className="text-sm font-bold">
            &copy; {new Date().getFullYear()} Gemstone & Rudraksha Laboratory. All rights reserved.
            </p>
      </div>
        </footer>
    )
}