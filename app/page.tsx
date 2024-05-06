import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import Reviews from "@/components/Reviews";
import Achievs from "@/components/Achievs";
import Promo from "@/components/Promo";
import Categories from "@/components/Categories";
import AnimWrap from "@/components/ui/AnimWrap";

export default function Home() {
  return (
    <AnimWrap className={styles.mainPage}>
      <FirstScreen />
      <Achievs />
      <Promo />
      <Categories />
      <Reviews />
    </AnimWrap>
  );
}
