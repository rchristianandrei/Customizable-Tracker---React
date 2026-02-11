import { api } from "@/api/axios";
import type { DropdownboxType } from "@/types/tracker/components/Dropdownbox";

const prefix = "/dropdown";

export const dropdownRepo = {
  Create: (trackerId: number) => {
    return api.post<DropdownboxType>(`${prefix}`, {
      trackerId: trackerId,
    });
  },
  Update: (component: DropdownboxType) => {
    return api.put(`${prefix}/${component.id}`, component);
  },
};
