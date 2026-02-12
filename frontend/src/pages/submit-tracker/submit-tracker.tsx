import { ChooseTracker } from "@/components/Tracker/ChooseTracker";
import { TrackerComponent } from "@/components/Tracker/Tracker";
import { useTracker } from "@/hooks/useTracker";

export const SubmitTracker = () => {
  const { tracker, getTracker } = useTracker();

  const onSelectTracker = async (id: number) => {
    await getTracker(id);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ChooseTracker onSelectTracker={onSelectTracker}></ChooseTracker>
      {tracker && <TrackerComponent tracker={tracker}></TrackerComponent>}
    </div>
  );
};
