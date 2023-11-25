import React from 'react'
import { Typography } from '@mui/material'
export default function Hero() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900 mt-6">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#5b8e7d] md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                    <Typography className='mb-8 text-lg lg:text-xl sm:px-16 lg:px-48 '>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</Typography>
                </div>
            </section>

        </>
    )
}
