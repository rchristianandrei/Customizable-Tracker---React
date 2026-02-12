import { TrackerComponent } from "@/components/Tracker/Tracker";
import { TrackerTypeDefaultValue } from "@/types/tracker/Tracker";

export const SubmitTracker = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <TrackerComponent tracker={TrackerTypeDefaultValue}></TrackerComponent>
    </div>
  );
};
