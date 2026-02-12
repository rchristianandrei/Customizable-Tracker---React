import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { useManageTrackers } from "@/hooks/useManageTrackers";
import { useEffect } from "react";

export function ManageTracker() {
  const { trackers, getTrackers, createNew } = useManageTrackers();

  useEffect(() => {
    getTrackers();
  }, []);

  return (
    <Layout>
      <Header title="Manage Tracker"></Header>
      <div className="flex justify-end px-4 pt-4">
        <button
          type="button"
          className="border border-blue-900 bg-blue-100 text-blue-900 px-3 py-1 cursor-pointer rounded"
          onClick={createNew}
        >
          Create New
        </button>
      </div>
      <ul className="p-4 flex flex-wrap gap-2">
        {trackers.map((t) => (
          <li
            key={t.id}
            className="border p-4 rounded w-100 flex items-center justify-between"
          >
            <span>{t.name}</span>
            <a
              href={`manage-tracker/${t.id}`}
              className="bg-blue-100 text-blue-900 rounded p-2 cursor-pointer"
            >
              Open
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
