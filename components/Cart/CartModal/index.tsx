import React from 'react';
import useCartStore from '@/store/cartStore';
import styles from '../styles.module.css';
import Form from '@/components/Form';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const CartModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();

    if (!isOpen) return null;

    const increaseQuantity = (id: number) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            updateQuantity(id, item.quantity + 1);
        }
    };

    const decreaseQuantity = (id: number) => {
        const item = cart.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            updateQuantity(id, item.quantity - 1);
        }
    };

    const getTotalPrice = cart.reduce((total, item) => {
        if (item.price) {
            const priceDigits = parseFloat(item.price.toString().replace(/[^\d.]/g, ''));
            if (!isNaN(priceDigits)) {
                return total + priceDigits * item.quantity;
            }
        }
        return total;
    }, 0);

    return (
        <div className={styles.cartModal}>
            <div className={styles.cartModalContent}>
                <button onClick={onClose} className={styles.closeButton}></button>
                <h2 className={styles.h2}>Корзина</h2>
                {cart.length === 0 ? (
                    <div className={styles.toCatsWrapper}>
                        <span>Корзина пока пуста, </span>
                        <Link className={styles.toCats} href={"/categories"}>
                            перейти в категории
                        </Link>
                    </div>
                ) : (
                    <div className={styles.goodsWrapper}>
                        {cart.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <Image
                                    src={`https://admin.decornekrasova.ru${item.img}`}
                                    className={styles.cartImg}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                />
                                <div className={styles.textWrapper}>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                    <p>Количество: {item.quantity}</p>
                                    <div className={styles.quantityBtns}>
                                        <button className={styles.minusBtn} onClick={() => decreaseQuantity(item.id)}></button>
                                        <button className={styles.plusBtn} onClick={() => increaseQuantity(item.id)}></button>
                                    </div>
                                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                        <p className={styles.totalPrice}>
                            Общая сумма: {getTotalPrice} р.
                        </p>
                        <button className={styles.removeBtn} onClick={clearCart}>Очистить корзину</button>
                    </div>
                )}
            </div>
            <Form cart={cart} />
        </div>
    );
};

export default CartModal;
