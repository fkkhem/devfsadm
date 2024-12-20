import React from 'react';
import { Link } from 'react-router-dom';
import learn_icon from '../../assets/ico/learn.svg';

const SidebarSolaris = ({ toggleSidebar, sidebarVisible }) => {

    const content = [{
        name: 'Introduction to Solaris',
        link: '/course/solaris/intro-to-solaris'
    }, {
        name: 'Installation and Setup',
        link: '/course/solaris/installation-and-setup'
    }, {
        name: 'Basic Commands',
        link: '/course/solaris/basic-commands'
    }, {
        name: 'Files and Directories',
        link: '/course/solaris/files-and-directories'
    }, {
        name: 'Vi Editor',
        link: '/course/solaris/vi-editor'
    }, {
        name: 'Archive',
        link: '/course/solaris/archive'
    }, {
        name: 'Link',
        link: '/course/solaris/link'
    }, {
        name: 'User Management',
        link: '/course/solaris/user-management'
    }, {
        name: 'Group Management',
        link: '/course/solaris/group-management'
    }, {
        name: 'SSH',
        link: '/course/solaris/ssh'
    }, {
        name: 'Super User',
        link: '/course/solaris/super-user'
    }, {
        name: 'Process Management',
        link: '/course/solaris/process-management'
    }, {
        name: 'Service Management',
        link: '/course/solaris/service-management'
    }, {
        name: 'System Monitoring',
        link: '/course/solaris/system-monitoring'
    }, {
        name: 'Nerwork Configuration',
        link: '/course/solaris/network-configuration'
    }, {
        name: 'ZFS',
        link: '/course/solaris/zfs'
    }, {
        name: 'Patch Management',
        link: '/course/solaris/patch-management'
    }, {
        name: 'Virtulization',
        link: '/course/solaris/virtulization'
    }, {
        name: 'LDOM',
        link: '/course/solaris/ldom'
    }, {
        name: 'Cron Job',
        link: '/course/solaris/cron-job'
    }, {
        name: 'Interview Preparation',
        link: '/course/solaris/interview-preparation'
    }];




    return (
        <div className='flex flex-col flex-wrap'>
            {/* {
                content.map((e) => <button  key={e.name} className='border-2 px-2 py-1 mr-6 mb-4 '> <Link to={e.link}> {e.name} </Link>  </button>)
            } */}


            <div className={`flex flex-col h-full p-3 w-60 bg-gray-900 text-gray-100 ${sidebarVisible ? '' : 'hidden'}`}>


                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {
                            content.map((e) => (
                                <li className="rounded-sm" key={e.name}>
                                    <Link rel="noopener noreferrer" to={e.link} onClick={() => toggleSidebar()} className="flex items-center p-2 space-x-3 rounded-md">
                                        <img src={learn_icon} alt='' className='bg-white rounded-full' />
                                        <span> {e.name} </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SidebarSolaris;