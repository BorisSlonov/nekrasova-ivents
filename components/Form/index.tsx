import React, { useState } from 'react';

interface CartItem {
    id: number;
    title: string;
    price: any;
    quantity: number;
    img: string;
}

interface FormProps {
    cart: CartItem[];
}

const Form: React.FC<FormProps> = ({ cart }) => {
    const [tel, setTel] = useState('');
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const cartDetails = cart
            .map(
                (item) =>
                    `Название: ${item.title}, Количество: ${item.quantity}, Цена: ${item.price}`
            )
            .join('\n');

        const formData = {
            // 'yes.wedding.tomsk@yandex.ru',
            toEmail: ['sslonovborisss@gmail.com'],
            subject: 'Заявка с сайта decornekrasova',
            mailText: `Телефон: ${tel}\nИмя: ${name}\nСообщение: ${msg}\n\nКорзина:\n${cartDetails}`,
        };

        try {
            const response = await fetch(
                'https://admin.decornekrasova.ru/free-mail-sender/send-email',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE1MzMzODY4LCJleHAiOjE3MTc5MjU4Njh9.DhGoFVuuuNxMto7crHF7PeM62dufzhIjQe2eTzyxlJQ',
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                alert('Спасибо за заявку! Мы Свяжемся с вами в ближайшее время');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                className='form__input'
                type='tel'
                name='tel'
                required
                placeholder='Номер телефона'
                value={tel}
                onChange={(e) => setTel(e.target.value)}
            />
            <input
                className='form__input'
                type='text'
                name='name'
                placeholder='Имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                name='msg'
                className='form__textarea'
                placeholder='Сообщение'
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <button type='submit' className='btn btn_fill'>
                Отправить
            </button>
        </form>
    );
};

export default Form;