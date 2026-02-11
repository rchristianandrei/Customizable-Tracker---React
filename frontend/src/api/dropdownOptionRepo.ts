import { api } from "@/api/axios";

const prefix = "/dropdownOption";

export const dropdownOptionRepo = {
  Create: (data: { dropdownId: number; value: string }) => {
    return api.post(`${prefix}`, data);
  },
  Delete: (id: number) => {
    return api.delete(`${prefix}/${id}`);
  },
};
