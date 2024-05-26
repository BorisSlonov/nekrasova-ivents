import React from 'react';
import useCartStore from '@/store/cartStore';
import styles from '../styles.module.css';
import Form from '@/components/Form';

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

    // const getTotalPrice = cart.reduce((total, item) => {
    //     let priceDigits: number;

    //     if (typeof item.price === 'string') {
    //         priceDigits = parseFloat(item.price.replace(/[^\d.]/g, ''));
    //     } else {
    //         priceDigits = item.price;
    //     }

    //     return total + priceDigits * item.quantity;
    // }, 0);

    return (
        <div className={styles.cartModal}>
            <div className={styles.cartModalContent}>
                <button onClick={onClose} className={styles.closeButton}>X</button>
                <h2>Корзина</h2>
                {cart.length === 0 ? (
                    <p>Корзина пока пуста</p>
                ) : (
                    <div className={styles.goodsWrapper}>
                        {cart.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img
                                    src={'https://admin.decornekrasova.ru' + item.img}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.price} руб</p>
                                    <p>Количество: {item.quantity}</p>
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                        <p className={styles.totalPrice}>
                            {/* Общая сумма: {getTotalPrice} руб. */}
                        </p>
                        <button onClick={clearCart}>Очистить корзину</button>
                    </div>
                )}
            </div>
            <Form cart={cart} />
        </div>
    );
};

export default CartModal;
