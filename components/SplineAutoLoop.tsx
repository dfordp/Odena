"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { Application } from "@splinetool/runtime";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false
});

export default function SplineAutoLoop() {
    const splineRef = useRef<Application | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const loopIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const isUserHoveringRef = useRef(false);
    const [isSplineReady, setIsSplineReady] = useState(false);

    function onLoad(splineApp: Application) {
        splineRef.current = splineApp;
        setIsSplineReady(true);
        console.log("Spline loaded and ready");
    }

    // Simulate mouse hover by creating and removing a hover overlay
    const simulateMouseEnter = () => {
        if (!containerRef.current || !splineRef.current) return;
        
        console.log("Triggering mouse enter");
        
        // Find the canvas element
        const canvas = containerRef.current.querySelector('canvas');
        if (!canvas) {
        console.log("Canvas not found");
        return;
        }

        // Get canvas bounds
        const rect = canvas.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Dispatch events in sequence with small delays
        const events = [
        { type: 'pointerover', bubbles: true },
        { type: 'pointerenter', bubbles: false },
        { type: 'mouseover', bubbles: true },
        { type: 'mouseenter', bubbles: false },
        { type: 'pointermove', bubbles: true },
        { type: 'mousemove', bubbles: true }
        ];

        events.forEach((evt, index) => {
        setTimeout(() => {
            const event = new PointerEvent(evt.type, {
            bubbles: evt.bubbles,
            cancelable: true,
            composed: true,
            clientX: centerX,
            clientY: centerY,
            screenX: centerX,
            screenY: centerY,
            pointerId: 1,
            pointerType: 'mouse',
            isPrimary: true,
            view: window
            });
            canvas.dispatchEvent(event);
        }, index * 10);
        });
    };

    const simulateMouseLeave = () => {
        if (!containerRef.current || !splineRef.current) return;
        
        console.log("Triggering mouse leave");
        
        const canvas = containerRef.current.querySelector('canvas');
        if (!canvas) {
        console.log("Canvas not found");
        return;
        }

        const rect = canvas.getBoundingClientRect();
        const outsideX = rect.left - 100;
        const outsideY = rect.top - 100;
        
        // Dispatch events in the correct sequence
        const events = [
        { type: 'pointermove', bubbles: true },
        { type: 'mousemove', bubbles: true },
        { type: 'pointerout', bubbles: true },
        { type: 'pointerleave', bubbles: false },
        { type: 'mouseout', bubbles: true },
        { type: 'mouseleave', bubbles: false }
        ];

        events.forEach((evt, index) => {
        setTimeout(() => {
            const event = new PointerEvent(evt.type, {
            bubbles: evt.bubbles,
            cancelable: true,
            composed: true,
            clientX: outsideX,
            clientY: outsideY,
            screenX: outsideX,
            screenY: outsideY,
            pointerId: 1,
            pointerType: 'mouse',
            isPrimary: true,
            view: window
            });
            canvas.dispatchEvent(event);
        }, index * 10);
        });
    };

    // Start auto-looping animation
    useEffect(() => {
        if (!isSplineReady) return;

        console.log("Starting auto-loop");
        
        const startTimeout = setTimeout(() => {
        let isOpen = false;
        
        const runCycle = () => {
            if (!isUserHoveringRef.current) {
            if (!isOpen) {
                console.log("Opening...");
                simulateMouseEnter();
                isOpen = true;
            } else {
                console.log("Closing...");
                simulateMouseLeave();
                isOpen = false;
            }
            } else {
            console.log("User hovering, skipping cycle");
            }
        };
        
        // Start immediately with first cycle
        runCycle();
        
        // Then repeat every 1.5 seconds
        loopIntervalRef.current = setInterval(runCycle, 1500);
        }, 1000); // Start after 1 second

        return () => {
        clearTimeout(startTimeout);
        if (loopIntervalRef.current) {
            clearInterval(loopIntervalRef.current);
        }
        };
    }, [isSplineReady]);

    const handleMouseEnter = () => {
        console.log("User mouse enter");
        isUserHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
        console.log("User mouse leave");
        isUserHoveringRef.current = false;
    };

    return (
        <div 
        ref={containerRef}
        className="w-full h-full relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <Spline 
            scene="https://prod.spline.design/HyZX8TKNsWx4a9OM/scene.splinecode"
            onLoad={onLoad}
            className="w-full h-full"
            style={{ 
            overflow: 'hidden',
            touchAction: 'none'
            }}
        />
        </div>
    );
}
