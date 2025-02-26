import { adminDeleteOffstageCollege } from "@/services";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

function OffStageTile({ offstage, refreshOffStageList }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteOffstageCollege(id) {
    setIsDeleting(true);
    const toastId = toast.loading("Deleting college...");

    try {
      const response = await adminDeleteOffstageCollege(id);
      if (response?.success) {
        toast.success("College deleted successfully!", { id: toastId });
        refreshOffStageList();
      } else {
        toast.error(response?.message || "Failed to delete college.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div
      aria-label="offStage College"
      className="px-4 py-3 font-semibold text-lg rounded-xl bg-white border-2 border-green-600 shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="flex flex-col gap-1">
        <span>
          <strong>College Name:</strong> {offstage.offStagecollegeName}
        </span>
        <span>
          <strong>Points:</strong> {offstage.offStagepoints}
        </span>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          disabled={isDeleting}
          className={`p-2 rounded-full ${
            isDeleting
              ? "text-gray-400 cursor-not-allowed"
              : "text-red-500 hover:text-red-700"
          } transition`}
          onClick={() => {
            handleDeleteOffstageCollege(offstage._id);
          }}
        >
          <Trash2 size={24} />
        </button>
      </div>
    </div>
  );
}

export default OffStageTile;
