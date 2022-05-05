import React from 'react'

function Footer() {
  return (
      <> 
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="" className="flex items-center mb-4 sm:mb-0">
            <img src="/assets/logo.png" className="mr-3 h-8" alt="TorrentFlix" />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://adityamaurya.com" className="mr-4 hover:underline md:mr-6 ">Creator</a>
            </li>
            <li>
                <a href="https://github.com/adxxtya/TorrentFlix" className="mr-4 hover:underline md:mr-6">Repository</a>
            </li>
            <li>
                <a href="https://github.com/adxxtya" className="mr-4 hover:underline md:mr-6 ">Github</a>
            </li>
            <li>
                <a href="https://instagram.com/adxxtya" className="hover:underline">Social</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center ">© 2022 <a href="" className="hover:underline">TorrentFlix</a>. An Open Source Project.
    </span>
</footer>
</>
  )
}

export default Footer