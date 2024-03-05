import React from 'react';
import business_img from '../assets/img/business.svg';
import { Link } from 'react-router-dom';
import iso_icon from '../assets/ico/iso.svg';
import dev_icon from '../assets/ico/dev.svg';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DropDown from './utils/DropDown';

const HeroSection = () => {

    const courses = [
        { name: 'Solaris', description: 'Get a better understanding of your traffic', href: '/course/solaris', icon: ChevronDownIcon },
        { name: 'Linux', description: 'Speak directly to your customers', href: '/course/solaris', icon: ChevronDownIcon },
        { name: 'Git', description: 'Your customers’ data will be safe and secure', href: '/course/solaris', icon: ChevronDownIcon },
        { name: 'HTML', description: 'Connect with third-party tools', href: '/course/solaris', icon: ChevronDownIcon },
        { name: 'JavaScript', description: 'Build strategic funnels that will convert', href: '/course/solaris', icon: ChevronDownIcon },
        { name: 'React', description: 'Build strategic funnels that will convert', href: '/course/solaris', icon: ChevronDownIcon },
    ];


    return (
        <section >
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">Learn
                        <span className="dark:text-violet-400"> Unix Administration </span> and                     <span className="dark:text-violet-400"> Development </span>

                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12"> A platform to learn web development and Unix administration
                        <br className="hidden md:inline lg:hidden" /> in a easy and intresting way
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        {/* <Link rel="noopener noreferrer" to='/administration' className="flex flex-row px-8 py-4 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            <img src={iso_icon} alt='' className='mr-3  rounded-full h-8 bg-white' />
                            Administration
                        </Link> */}
                        <button className="flex flex-row text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            <DropDown icon={iso_icon} name='Administration' content={courses} />
                        </button>
                        <button className="flex flex-row  text-lg font-semibold border rounded ">
                            <DropDown icon={dev_icon} name='Development' content={courses} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={business_img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;