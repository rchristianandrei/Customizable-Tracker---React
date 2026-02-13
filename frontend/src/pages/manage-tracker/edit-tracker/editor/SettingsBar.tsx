import { useEditTrackerState } from "@/contexts/EditTrackerContext";
import { ComponentSettings } from "@/pages/manage-tracker/edit-tracker/editor/ComponentSettings";
import { TrackerSettings } from "@/pages/manage-tracker/edit-tracker/editor/TrackerSettings";

export function SettingsBar() {
  const { selectedComponent } = useEditTrackerState();

  if (selectedComponent) return <ComponentSettings></ComponentSettings>;

  return <TrackerSettings></TrackerSettings>;
}
