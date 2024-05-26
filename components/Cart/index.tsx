'use client'
import React, { useState } from 'react';
import CartModal from './CartModal';
import CartIcon from './icons/cart'
import styles from './styles.module.css';

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className={styles.cart}>
      <button onClick={openCart} className={styles.cartButton}>
        <CartIcon />
      </button>
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default Cart;