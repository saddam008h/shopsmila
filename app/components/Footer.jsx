import React from 'react'

export default function Footer() {
  return (
    

<footer class="bg-[#6e9c8c] text-white rounded-t mt-5">
    <div class="w-full p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap ">ShopsMila</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 lg:my-8" />
        <span class="block text-sm sm:text-center">© 2023 <a href="/" class="hover:underline">ShopsMila™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
