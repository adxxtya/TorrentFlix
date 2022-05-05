import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'

function Header() {
  return (
    <header className="w-full">
      <div className="pt-10 lg:flex lg:justify-between lg:px-6">
        <Link href="/">
          <div className="sm:flex sm:items-center sm:justify-center md:flex md:items-center md:justify-center">
            <a href="">
              <img src="/assets/logo.png" width={500} />
            </a>
          </div>
        </Link>
        <div className="hidden lg:flex lg:flex-col lg:gap-4">
          <a href="https://github.com/adxxtya">
            <FaGithub color="white" size={50} />
          </a>
          <a href="https://instagram.com/adxxtya">
            <FaInstagram color="white" size={50} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
