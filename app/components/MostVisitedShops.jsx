import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
export default function MostVisitedShops() {
    return (
        <div className='p-6'>
            <p className="text-3xl font-mono font-bold text-[#5b8e7d]">Most Visited Shops</p>

            {/* for mobiles */}
            <div className='flex mt-4 items-center'>
                <PhoneAndroidIcon className='mr-1' />
                <p className="text-lg font-mono font-bold text-[#5b8e7d]">Mobiles</p>
            </div>
            <div className='flex mt-2 flex-wrap gap-5'>
                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>
            </div>


            {/* for computers */}
            <div className='flex mt-4 items-center'>
                <ComputerIcon className='mr-1' />
                <p className="text-lg font-mono font-bold text-[#5b8e7d]">Computers</p>
            </div>
            <div className='flex mt-2 flex-wrap gap-5'>
                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>
            </div>


            {/* for clothes */}
            <div className='flex mt-4 items-center'>
                <DryCleaningIcon className='mr-1' />
                <p className="text-lg font-mono font-bold text-[#5b8e7d]">Clothes</p>
            </div>
            <div className='flex mt-2 flex-wrap gap-5'>
                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>
            </div>


            {/* for shoes */}
            <div className='flex mt-4 items-center'>
                <RollerSkatingIcon className='mr-1' />
                <p className="text-lg font-mono font-bold text-[#5b8e7d]">Shoes</p>
            </div>
            <div className='flex mt-2 flex-wrap gap-5'>
                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>

                <div className='w-72 h-40 bg-gray-200 rounded cursor-pointer border border-gray-200 hover:bg-gray-300 hover:border-gray-500 transition-all' >
                    <p className='h-2/4 rounded-t text-xl text-center pt-10'>Alpha Mobiles</p>
                    <div className='p-2 pt-9 flex items-center'>
                        <LocationOnIcon className='mr-2' />
                        <p className='text-sm'>c1, nust, h12 Islamabad</p>
                    </div>
                </div>
            </div>



        </div>
    )
}
