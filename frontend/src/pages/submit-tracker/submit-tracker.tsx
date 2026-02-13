import { ChooseTracker } from "@/components/Tracker/ChooseTracker";
import { TrackerComponent } from "@/components/Tracker/Tracker";
import { TrackerComponentProvider } from "@/contexts/TrackerContext";
import { useTracker } from "@/hooks/useTracker";

export const SubmitTracker = () => {
  const { tracker, getTracker } = useTracker();

  const onSelectTracker = async (id: number) => {
    await getTracker(id);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ChooseTracker onSelectTracker={onSelectTracker}></ChooseTracker>
      {tracker && (
        <TrackerComponentProvider>
          <TrackerComponent tracker={tracker}></TrackerComponent>
        </TrackerComponentProvider>
      )}
    </div>
  );
};
