import { trackerRepo } from "@/api/trackerRepo";
import type { TrackerType } from "@/types/tracker/Tracker";
import { useState } from "react";

export const useManageTrackers = () => {
  const [trackers, setTrackers] = useState<TrackerType[]>([]);

  async function getTrackers() {
    const result = await trackerRepo.GetAll();
    const data = result.data;
    setTrackers(data);
  }

  return {
    trackers,
    getTrackers,
  };
};
