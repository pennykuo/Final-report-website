'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./page2.css"
function Page2() {
    const [buttonClicked, setButtonClicked] = useState([false, false, false, false, false, false]);
    const [isPageBack, setIsPageBack] = useState(false);

    const handleClick = (index) => {
        const newButtonClicked = [...buttonClicked];
        newButtonClicked[index] = true;
        setButtonClicked(newButtonClicked);
        setIsPageBack(true);
        setTimeout(() => {
            newButtonClicked[index] = false;
            setButtonClicked(newButtonClicked);
            // setIsPageBack(false);
        }, 1500);
    }
    return (
        <>
            <div className="pageBack">
                <div className={`switching-overlay ${isPageBack ? 'show' : 'hide'}`}></div>


                <ul>
                    <li key={1}>
                        <Link href="/work">
                            <button className={`menuButton ${buttonClicked[0] ? 'clicked' : ''}`}
                                onClick={() => handleClick(0)}>作品展示</button>
                        </Link>
                    </li>
                    <li key={2}>
                        <Link href="/technology">
                            <button className={`menuButton ${buttonClicked[1] ? 'clicked' : ''}`}
                                onClick={() => handleClick(1)}>技術簡介</button>
                        </Link>
                    </li>
                    <li key={3}>
                        <Link href="/Effectiveness">
                            <button className={`menuButton ${buttonClicked[2] ? 'clicked' : ''}`}
                                onClick={() => handleClick(2)}>成效評估</button>
                        </Link>
                    </li>
                    <li key={4}>
                        <Link href="/Methods">
                            <button className={`menuButton ${buttonClicked[3] ? 'clicked' : ''}`}
                                onClick={() => handleClick(3)}>方法</button>
                        </Link>
                    </li>
                    <li key={5}>
                        <Link href="/Extension">
                            <button className={`menuButton ${buttonClicked[4] ? 'clicked' : ''}`}
                                onClick={() => handleClick(4)}>系統延展</button>
                        </Link>
                    </li>
                    <li key={6}>
                        <Link href="/thanks">
                            <button className={`menuButton ${buttonClicked[5] ? 'clicked' : ''}`}
                                onClick={() => handleClick(5)}>總結與感謝</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='walk'>
                <div className="walk1">
                    <img src="/walk1.png" alt="Image 1" />
                </div>
                <div className="walk2">
                    <img src="/walk2.png" alt="Image 2" />
                </div>
            </div>
            {/* <div id="person"></div> */}
        </>
    );
}

export default Page2;