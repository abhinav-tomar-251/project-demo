'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClicked(): void {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const [hasNotification, setHasNotification] = useState(false);

  // Function to simulate adding notifications
  const addNotification = () => {
    setHasNotification(true);
    // Simulating clearing notification after a delay (you can replace setTimeout with your logic)
    setTimeout(() => {
      setHasNotification(false);
    }, 3000); // Clearing after 3 seconds (adjust as needed)
  };

  const user = {
    avatar: '/assets/avatar.svg', // Replace with the actual path to the user's avatar
    name: 'John Doe', // Replace with the user's name
  };

    return ( 
    <div className="relative flex  flex-row gap-2 w-full h-12 text-left text-base text-black font-regular-16-24">
      <div className='relative flex w-2/3 h-full'>  
        <input
          ref={inputRef}
          id='searchbar'
          placeholder='Search here'
          type="search"
          className="absolute rounded-xl focus:outline-none bg-white shadow-md w-full h-full flex items-start justify-start p-2 gap-40 text-left text-base font-regular border overflow-hidden border-gray-300"
        />
        <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-full rounded-full cursor-pointer">
          <Image
            src="/assets/Search.svg"
            width={24}
            height={24}
            alt="Search"
            onClick={handleClicked}
          />
        </div>
      </div>
    <div className="relative flex w-1/2 h-full">
      <div className="flex  items-center justify-start px-2 w-1/2 h-{24}  h-full rounded-lg">
      <div className="relative " onClick={addNotification}>
        <Image
          src='/assets/bell.svg'
          width={24}
          height={24}
          alt="Avatar"
          className='relative  flex items-start overflow-hidden shrink-0 object-cover justify-start'
        />
        {hasNotification && (
          <div className="absolute w-3 h-3 bg-green-500 rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        )}
      </div>
      </div>
      <div className="flex items-center justify-center w-1/2 text-black h-full rounded-lg ">
      <div className="flex  items-center">
        <div className="mr-2">
          <Image
            src={user.avatar}
            // src='/assets/avatar.svg'  
            width={40}
            height={40}
            alt="User Avatar"
            className="rounded-full "
          />
        </div>
        <span>{user.name}</span>
      </div>
    </div>
    </div>  
  </div>
      
     );
}
 
export default Header;