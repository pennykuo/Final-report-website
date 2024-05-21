'use client'
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';;
import './Dashboard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation'


function Dashboard() {
    const [clicked, setClicked] = useState(false);
    const [isSwitching, setIsSwitching] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setClicked(true);
        setIsSwitching(true);
        setTimeout(() => {
            setClicked(false);
            router.push('/page2');
        }, 1500);
    }

    const text = 'Penny Final Paper';
    const letters = text.split('');

    return (
        <div className="DashboardBack">
            <div className={`switching-overlay ${isSwitching ? 'show' : 'hide'}`}></div>
            <h1 role="img" aria-label={text}>
                {letters.map((letter, i) => (
                    <span key={i} className={`letter shake-top ${Math.random() > .5 ? 'rev' : ''}`}>
                        {letter}
                    </span>
                ))}
            </h1>
            <button className={`shake-top buttonStart ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
                start
            </button>
        </div>
    );
}

export default Dashboard;