import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Invite Coworkers',
        path: '/Invite',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        title: 'Notes',
        path: '/Notes',
        icon: <BsIcons.BsPencilSquare />,
        className: 'nav-text'
    },
    {
        title: 'View Calendar',
        path: '/ViewCalendar',
        icon: <AiIcons.AiOutlineCalendar />,
        className: 'nav-text'
    },
    {
        title: 'Chat With Coworkers',
        path: '/Chat',
        icon: <AiIcons.AiOutlineMessage />,
        className: 'nav-text'
    },

]