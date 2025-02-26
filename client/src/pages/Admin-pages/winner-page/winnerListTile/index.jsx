import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function WinnerListTile({ resultList, editId, setEditId, handleUpdate }) {
  console.log(resultList.eventName);

  return (
    <Card className="overflow-hidden shadow-xl rounded-2xl border border-gray-300 bg-white">
      <CardHeader>
        <Button onClick={() => handleUpdate(resultList?._id)}>Update</Button>
      </CardHeader>

      <div className="text-xl font-bold py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex justify-center items-center">
        <h1 className="tracking-wide uppercase">
          {resultList?.eventName || "Event Name"}
        </h1>
      </div>

      <div className="p-4 space-y-4">
        {resultList?.firstPrize && resultList?.firstPrize.length > 0 ? (
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center border border-yellow-300">
            <div className="w-full bg-yellow-500 py-2 rounded-t-lg text-lg font-semibold text-white tracking-wider lg:text-2xl">
              🥇 First Prize
            </div>
            <div className="flex flex-col gap-2">
              {resultList?.firstPrize?.map((first, index) => (
                <div key={index} className="mt-2 bg-white py-2 shadow rounded">
                  <p className="text-gray-600  font-bold">
                    {first?.collegeName || ""}
                  </p>
                  <p className="text-lg lg:text-xl font-semibold text-gray-800">
                    {first?.studentName || ""}
                  </p>
                  {first?.members?.length > 0 ? (
                    <div>
                      <h2>Group Members</h2>
                      <div className="grid grid-cols-1 px-2 sm:grid-cols-2 sm:gap-2 mt-2 2xl:grid-cols-3 ">
                        {first?.members?.map((member, idx) => (
                          <button
                            key={idx} // Ensure unique key
                            className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                          >
                            {member?.memberName || "Unknown Member"}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Second Prize */}
        {resultList?.secondPrize && resultList?.secondPrize.length > 0 ? (
          <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center border border-gray-400">
            <div className="w-full bg-gray-500 py-2 rounded-t-lg text-lg font-semibold text-white lg:text-2xl tracking-wide">
              🥈 Second Prize
            </div>
            <div className="flex flex-col gap-2">
              {resultList?.secondPrize?.map((second, index) => (
                <div key={index} className="mt-2 bg-white py-2 shadow rounded">
                  <p className="text-lg lg:text-xl font-semibold text-gray-800">
                    {second?.studentName || ""}
                  </p>
                  <p className="text-gray-600  font-bold">
                    {second?.collegeName || ""}
                  </p>
                  {second?.members?.length > 0 ? (
                    <div>
                      <h2>Group Members</h2>
                      <div className="grid grid-cols-1 px-2 sm:grid-cols-2 sm:gap-2 mt-2 2xl:grid-cols-3 ">
                        {second?.members?.map((member, idx) => (
                          <button
                            key={idx} // Ensure unique key
                            className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                          >
                            {member?.memberName || "Unknown Member"}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Third Prize */}
        {resultList?.thirdPrize && resultList?.thirdPrize.length > 0 ? (
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center border border-orange-300">
            <div className="w-full bg-orange-500 py-2 rounded-t-lg text-lg font-semibold text-white lg:text-2xl tracking-wide">
              🥉 Third Prize
            </div>
            <div className="flex flex-col gap-2">
              {resultList?.thirdPrize?.map((third, index) => (
                <div key={index} className="mt-2 bg-white py-2 shadow rounded">
                  <p className="text-lg lg:text-xl font-semibold text-gray-800">
                    {third?.studentName || ""}
                  </p>
                  <p className="text-gray-600  font-bold">
                    {third?.collegeName || ""}
                  </p>
                  {third?.members?.length > 0 ? (
                    <div>
                      <h2>Group Members</h2>
                      <div className="grid grid-cols-1 px-2 sm:grid-cols-2 sm:gap-2 mt-2 2xl:grid-cols-3 ">
                        {third?.members?.map((member, idx) => (
                          <button
                            key={idx} // Ensure unique key
                            className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                          >
                            {member?.memberName || "Unknown Member"}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}

export default WinnerListTile;
