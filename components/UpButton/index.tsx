"use client"
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const UpButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className={styles.upButton} onClick={scrollToTop} style={{ opacity: isVisible ? '1' : '0' }}>
            вверх
        </div>
    );
};

export default UpButton;
