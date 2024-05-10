import React, { useState } from "react";

const Form = () => {
    const [tel, setTel] = useState("");
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const formData = {
            toEmail: 'sslonovborisss@gmail.com',
            subject: name,
            mailText: msg,
        };

        try {
            const response = await fetch("https://decornekrasova.ru/free-mail-sender/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Email sent successfully");
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__input"
                type="tel"
                name="tel"
                required
                placeholder="Номер телефона"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
            />
            <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                name="msg"
                className="form__textarea"
                placeholder="Сообщение"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn_fill">
                Отправить
            </button>
        </form>
    );
};

export default Form;