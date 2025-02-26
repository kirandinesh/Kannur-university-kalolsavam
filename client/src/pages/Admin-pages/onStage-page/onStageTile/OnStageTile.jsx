import { useContext, useState } from "react";
import { AdminContext } from "@/context/admin-context";
import { adminDeleteOnstageCollege } from "@/services";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

function OnStageTile({ onstage, refreshOnStageList }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteOnstageCollege(id) {
    setIsDeleting(true);
    const toastId = toast.loading("Deleting college...");

    try {
      const response = await adminDeleteOnstageCollege(id);
      if (response?.success) {
        toast.success("College deleted successfully!", { id: toastId });
        refreshOnStageList();
      } else {
        toast.error(response?.message || "Failed to delete college.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("An error occurred while deleting.", { id: toastId });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div
      aria-label="OnStage College"
      className="px-4 py-3 font-semibold text-lg rounded-xl bg-white border-2 border-green-600 shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="flex flex-col gap-1">
        <span>
          <strong>College Name:</strong> {onstage.onStagecollegeName}
        </span>
        <span>
          <strong>Points:</strong> {onstage.onStagepoints}
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
            handleDeleteOnstageCollege(onstage._id);
          }}
        >
          <Trash2 size={24} />
        </button>
      </div>
    </div>
  );
}

export default OnStageTile;
