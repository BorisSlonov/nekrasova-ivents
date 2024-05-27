'use client'
import React, { useState, useRef, useEffect } from 'react';
import CartModal from './CartModal';
import CartIcon from './icons/cart';
import styles from './styles.module.css';

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      closeCart();
    }
  };

  const handleLinkClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).tagName === 'A') {
      closeCart();
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('click', handleLinkClick);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', handleLinkClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [isCartOpen]);

  return (
    <div ref={cartRef} className={styles.cart}>
      <button onClick={openCart} className={styles.cartButton}>
        <CartIcon />
      </button>
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default Cart;
