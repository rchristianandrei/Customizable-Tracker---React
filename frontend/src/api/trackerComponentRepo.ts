import { api } from "@/api/axios";
import type { BaseComponent } from "@/types/tracker/components/BaseComponent";

const prefix = "/trackerComponent";

export const trackerComponentRepo = {
  GetById: (id: number) => {
    return api.get<BaseComponent>(`${prefix}/${id}`);
  },
  Update: (component: BaseComponent) => {
    return api.put(`${prefix}/${component.id}`, component);
  },
};
