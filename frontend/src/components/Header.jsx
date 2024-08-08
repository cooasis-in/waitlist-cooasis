import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const pathParts = location.pathname?.split('/');
  const niftWord = pathParts?.includes('nift');

  return (
    <div className="set-alignment set-alignment-logo flex justify-between items-center">
      <div className="flex items-center sm:items-end set-width">
        <Link to="/">
          <img src="/images/darkmode.svg" alt="Cooasis Logo" className="w-30 mb-0 sm:mb-1" />
        </Link>
        {niftWord && (
          <>
            <div className="border-[1px] border-[#FFFFFF29] h-[42px] sm:h-[56px] w-[0] mx-6 sm:mx-8"></div>
            <div>
              <Link to="/nift">
                <img
                  src="/images/niff.svg"
                  alt=""
                  className="absolute bottom-[27px] sm:bottom-[20px] w-[32px] sm:w-[56px]"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
