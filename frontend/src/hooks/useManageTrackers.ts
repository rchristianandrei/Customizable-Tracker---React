import { trackerRepo } from "@/api/trackerRepo";
import type { TrackerType } from "@/types/tracker/Tracker";
import { useCallback, useState } from "react";

export const useManageTrackers = () => {
  const [trackers, setTrackers] = useState<TrackerType[]>([]);

  const createNew = useCallback(async () => {
    const result = await trackerRepo.Create({ name: "Tracker name" });
    const data = result.data;
    console.log(data);
    setTrackers((t) => [...t, data]);
  }, []);

  const getTrackers = useCallback(async () => {
    const result = await trackerRepo.GetAll();
    const data = result.data;
    setTrackers(data);
  }, []);

  return {
    trackers,
    createNew,
    getTrackers,
  };
};
