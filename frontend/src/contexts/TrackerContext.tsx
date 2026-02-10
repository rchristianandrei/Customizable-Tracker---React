import React, { createContext, useContext, useState } from "react";
import {
  TrackerTypeDefaultValue,
  type TrackerType,
} from "@/types/tracker/Tracker";
import type { BaseComponent } from "@/types/tracker/components/BaseComponent";
import type { TrackerComponentType } from "@/types/tracker/components/TrackerComponent";
import { trackerRepo } from "@/api/trackerRepo";
import { textboxRepo } from "@/api/textboxRepo";

type TrackerProviderProps = {
  children: React.ReactNode;
};

const TrackerContext = createContext<
  | {
      tracker: TrackerType | null;
      setTracker: React.Dispatch<React.SetStateAction<TrackerType | null>>;
      selectedComponent: TrackerComponentType | null;
      setSelectedComponent: React.Dispatch<
        React.SetStateAction<TrackerComponentType | null>
      >;
      onLoad: (trackerId: number) => Promise<void>;
    }
  | undefined
>(undefined);

export function TrackerProvider({ children }: TrackerProviderProps) {
  const [tracker, setTracker] = useState<TrackerType | null>(
    TrackerTypeDefaultValue,
  );
  const [selectedComponent, setSelectedComponent] =
    useState<TrackerComponentType | null>(null);

  async function onLoad(trackerId: number) {
    try {
      const result = await trackerRepo.GetById(trackerId);
      const data = result.data;
      const textboxes = await textboxRepo.GetAll(trackerId);

      data.components = [...data.components, ...textboxes.data];
      setTracker(result.data);
    } catch (err) {
      setTracker(null);
    }
  }

  return (
    <TrackerContext.Provider
      value={{
        tracker,
        setTracker,
        selectedComponent,
        setSelectedComponent,
        onLoad,
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
}

export function useTracker() {
  const context = useContext(TrackerContext);

  if (!context) {
    throw new Error("useTracker must be used within a TrackerProvider");
  }

  return context;
}
