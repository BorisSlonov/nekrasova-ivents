import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import SecondScreen from "@/components/MainPage/SecondScreen";
import ThirdScreen from "@/components/MainPage/ThirdScreen";
import FourthScreen from "@/components/MainPage/FourthScreen";
import Faq from "@/components/MainPage/Faq";
import MeetSection from "@/components/MainPage/MeetSection";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import AnimWrap from "@/components/ui/AnimWrap";

export default function Home() {
  return (
    <AnimWrap className={styles.mainPage}>
      <FirstScreen />
      <section className="section section_advantages">
        <div className="advantages">
          <div className="container">
            <div className="h2Wrapper">
              <h2 className="h2">
                Наши преимущества
              </h2>
              <p className="h2__subtitle">
                Каждый день мы создаем и экспериментируем, чтобы сделать наших клиентов счастливыми
              </p>
            </div>
            <div className="advantages__body">
              <div className="advantages__item">
                <h3 className="advantages__h3">
                  Работаем по договору
                </h3>
                <p className="advantages__p">
                  Гарантия выполнения работы
                </p>
              </div>
              <div className="advantages__item">
                <h3 className="advantages__h3">
                  Прорисовываем эскиз
                </h3>
                <p className="advantages__p">
                  Для визуального представления проекта
                </p>
              </div>
              <div className="advantages__item">
                <h3 className="advantages__h3">
                  Работаем более 3 лет
                </h3>
                <p className="advantages__p">
                  Есть опыт и знание локаций
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section_promo">
        <img className="promo__logo" src="img/logo.svg" alt="" />
        <div className="promo">
          <div className="container">
            <div className="promo__body">
              <p className="promo__p">
                Мы создаем не только воздушное настроение, но декор для важных событий. Наша работа
                сочетает в себе материалы высочайшего класса, ручную работу и любовь создателей.
                <a href="#" className="promo__btn btn btn_fill">
                  Оставить заявку
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section_catalog">
        <div className="catalog">
          <div className="container">
            <div className="h2Wrapper">
              <h2 className="h2">
                Каталог
              </h2>
            </div>
            <div className="catalog__body">
              <div className="catalog__item catalogCard">
                <img src="img/catalog/1.webp" alt="" className="catalogCard__img" />
                <h3 className="catalog__h3">
                  Воздушные шары
                </h3>
                <p className="catalog__p">
                  Воздушные шары на выписку. Воздушные шары для девочки. Воздушные шары для мальчика.
                  Воздушные шары на день рождение. Воздушные шары в День влюбленных. Воздушные шары на
                  Новый год. Воздушные шары девушке. Воздушные шары мужчине. Воздушные шары 8 марта.
                  Воздушные шары 23 февраля.
                </p>
                <span className="catalog__btn">
                  Подробнее
                </span>
              </div>
              <a href="#" className="catalog__item catalogCard">
                <img src="img/catalog/2.webp" alt="" className="catalogCard__img" />
                <h3 className="catalog__h3">
                  Выпускной вечер
                </h3>
                <p className="catalog__p">
                  Фотозона для выпускного вечера. Воздушные шары.
                </p>
                <span className="catalog__btn">
                  Подробнее
                </span>
              </a>
              <a href="#" className="catalog__item catalogCard">
                <img src="img/catalog/3.webp" alt="" className="catalogCard__img" />
                <h3 className="catalog__h3">
                  Свадебный декор
                </h3>
                <p className="catalog__p">
                  Выездная регистрация брака. Президиум молодых. Оформление гостевых столов. Фотозона.
                  План рассадки гостей. Номерки на гостевые столы. Велком зона.
                </p>
                <span className="catalog__btn">
                  Подробнее
                </span>
              </a>
              <a href="#" className="catalog__item catalogCard">
                <img src="img/catalog/4.webp" alt="" className="catalogCard__img" />
                <h3 className="catalog__h3">
                  Свадебные аксессуары
                </h3>
                <p className="catalog__p">
                  Коробочка для денежных подарков (казна), индивидуальны бокалы, книга пожеланий,
                  замок, шкатулка для колец и т.д.
                </p>
                <span className="catalog__btn">
                  Подробнее
                </span>
              </a>
              <a href="#" className="catalog__item catalogCard">
                <img src="img/catalog/5.webp" alt="" className="catalogCard__img" />
                <h3 className="catalog__h3">
                  Корпоративные клиенты
                </h3>
                <p className="catalog__p">
                  Декор для Вашего бизнеса (Фотозона для бизнеса, входные зоны, воздушные шары с
                  логотипом)
                </p>
                <span className="catalog__btn">
                  Подробнее
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section_reviews">
        <div className="reviews">
          <div className="container">
            <div className="h2Wrapper">
              <h2 className="h2">
                Отзывы
              </h2>
            </div>
            <div className="reviews__body">
              <div className="reviews__item">
                <img src="img/reviews/1.webp" alt="" className="reviews__img" />
                <span className="reviews__name">
                  Юлия
                </span>
                <p className="reviews__txt">
                  Рита, наше свадебное оформление 🔥
                  Спасибо за твое терпение и старание, все продумала до мелочей, как например с белым
                  полом перед аркой , сейчас на фотках смотрю, особенно заметно 🙈
                  Наш президиум, отдельная любовь, стол, оформление, гостям тоже очень понравилось,
                  попадание в самое 💔
                  Сочетание цены и качества работы 👍
                  Ни разу не пожалели, что выбрали именно тебя 🤗
                </p>
              </div>
              <div className="reviews__item">
                <img src="img/reviews/2.webp" alt="" className="reviews__img" />
                <span className="reviews__name">
                  Ирина
                </span>
                <p className="reviews__txt">
                  Маргарита, добрый день)
                  Хотела вам написать огромное спасибо, нам все понравилось 😍
                  Вы прекрасный специалист
                  Очень круто все понимаете и чувствуете 😍
                  Спасибо вам ещё раз огромное, все было очень здорово ☺️
                </p>
              </div>
              <div className="reviews__item">
                <img src="img/reviews/3.webp" alt="" className="reviews__img" />
                <span className="reviews__name">
                  Татьяна
                </span>
                <p className="reviews__txt">
                  Маргарита, добрый вечер! Наконец-то получили фото с выпускного. Подобрала несколько
                  вариантов для Вас. Чем больше рассматриваю нашу фотозону, тем больше понимаю, что
                  она нереально крутая!!! Спасибо Вам огромное! Все были в восторге от фотозоны)))😘❤️
                  Ощущение, что шары парят над головой, цвета зоны и цвета интерьера совпадают и нет
                  визуального дисбаланса
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </AnimWrap>
  );
}
