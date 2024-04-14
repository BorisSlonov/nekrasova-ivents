import FirstScreen from "@/components/MainPage/FirstScreen";
import styles from "./page.module.css";
import SecondScreen from "@/components/MainPage/SecondScreen";
import ThirdScreen from "@/components/MainPage/ThirdScreen";
import FourthScreen from "@/components/MainPage/FourthScreen";
import Faq from "@/components/MainPage/Faq";
import MeetSection from "@/components/MainPage/MeetSection";
import GetStartedSection from "@/components/MainPage/GetStartedSection";

export default function Home() {
  return (
    <main className={styles.mainPage}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Faq />
      <MeetSection />
      <GetStartedSection />
    </main>
  );
}
