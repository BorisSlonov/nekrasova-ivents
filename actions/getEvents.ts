import { IEventData } from "@/components/MainPage/MeetSection/Card/types";

export const getEvents = async (): Promise<IEventData[] | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}ivents?populate=deep`, {
      cache: "no-store",
    });

    const events = await result.json();
    return events.data;
  } catch (error) {
    return;
  }
};
