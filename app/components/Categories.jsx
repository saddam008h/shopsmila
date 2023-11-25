import { Typography } from '@mui/material'
import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
export default function Categories() {
  return (
    <div className='mx-6'>
        <p className="text-3xl font-mono font-bold text-[#5b8e7d]">Browse By Categories</p>
        <div className='flex mt-2 flex-wrap gap-5'>
            <div className='w-44 h-28 justify-center box-content bg-gray-100 rounded-md flex flex-col items-center cursor-pointer hover:bg-gray-200' >
                <PhoneAndroidIcon className='mb-3' fontSize='large'/>
                <Typography className='mt-5'>Mobiles</Typography>
            </div>

            <div className='w-44 justify-center box-content bg-gray-100 rounded-md flex flex-col items-center cursor-pointer hover:bg-gray-200' >
                <ComputerIcon className='mb-3' fontSize='large'/>
                <Typography className='mt-5'>Computers</Typography>
            </div>

            <div className='w-44 justify-center box-content bg-gray-100 rounded-md flex flex-col items-center cursor-pointer hover:bg-gray-200' >
                <DryCleaningIcon className='mb-3' fontSize='large'/>
                <Typography className='mt-5'>Clothes</Typography>
            </div>

            <div className='w-44 justify-center box-content bg-gray-100 rounded-md flex flex-col items-center cursor-pointer hover:bg-gray-200' >
                <RollerSkatingIcon className='mb-3' fontSize='large'/>
                <Typography className='mt-5'>Shoes</Typography>
            </div>

        </div>
    </div>
  )
}
