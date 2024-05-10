import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import AnimWrap from "@/components/ui/AnimWrap";

import Reviews from "@/components/Reviews";
import Achievs from "@/components/Achievs";
import Promo from "@/components/Promo";
import Categories from "@/components/CategoriesList";
import LastForm from "@/components/LastForm";

export default function Home() {
  return (
    <AnimWrap className={styles.mainPage}>
      <FirstScreen />
      <Achievs />
      <Promo />
      <Categories />
      <Reviews />
      <LastForm />
    </AnimWrap>
  );
}
