import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";   

const BackToTop = () => {
    
    const [showButton, setShowButton] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }
    const handleScrolling = () => {
        // eslint-disable-next-line no-restricted-globals
        if (scrollY > 50) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrolling);
        return () => {
            window.removeEventListener("scroll", handleScrolling)
        }
    }, [])
    return (
        <div className={`z-10 fixed right-6 bottom-16 ${showButton ? "visible" : "invisible"}`}>
            <button>
                < MdKeyboardDoubleArrowUp onClick={scrollToTop} className='text-3xl text-blue-500 animate-bounce' />
            </button>
        </div>
    )
}

export default BackToTop
