import axiosInstance from "@/api/axiosInstance";
export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}

export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuthService() {
  const { data } = await axiosInstance.get("/auth/check-auth");

  return data;
}

export async function publishResultService(formData) {
  try {
    const { data } = await axiosInstance.post(
      "/admin/result/add-result",
      formData
    );
    return data;
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "An error occurred while publishing the result",
    };
  }
}

export async function fetchAllEvents() {
  const { data } = await axiosInstance.get("/admin/events/get-events");
  return data;
}

export async function getSearchResultOfEvents(keyword) {
  const { data } = await axiosInstance.get(`/search/${keyword}`);
  return data;
}

export async function getSearchResultOfWinners(keyword) {
  const { data } = await axiosInstance.get(`/search/winners/${keyword}`);
  return data;
}

export async function updateStatusOfEvent(id, formData) {
  const { data } = await axiosInstance.put(
    `/admin/events/update-events/${id}`,
    formData
  );
  return data;
}

export async function getAllCollegeList() {
  const { data } = await axiosInstance.get("/admin/college/get-colleges");
  return data;
}

export async function getSearchResultOfCollege(keyword) {
  const { data } = await axiosInstance.get(`/search/college/${keyword}`);
  return data;
}

export async function getInidividualResult() {
  const { data } = await axiosInstance.get("/user/results/get-result");
  return data;
}

export async function addNewEventWinners(formData) {
  const { data } = await axiosInstance.post(
    "/admin/winner/add-winner",
    formData
  );

  return data;
}
export async function fetchAllEventWinners() {
  const { data } = await axiosInstance.get("/admin/winner/get-winner");
  return data;
}

export async function fetchWinnerDetailsById(id) {
  const { data } = await axiosInstance.get(
    `/admin/winner/get-winner/details/${id}`
  );
  return data;
}

export async function adminUpdateEventWinners(id, formData) {
  const { data } = await axiosInstance.put(
    `/admin/winner/update-winner/${id}`,
    formData
  );
  return data;
}

export async function userfetchAllEventWinners() {
  const { data } = await axiosInstance.get("/user/winner/get-winner");
  return data;
}

export async function adminAddNewAchievement(formData) {
  const { data } = await axiosInstance.post(
    "/admin/achievement/add-achievement",
    formData
  );
  return data;
}

export async function adminFetchAllAchievements() {
  const { data } = await axiosInstance.get(
    "/admin/achievement/get-achievements"
  );
  return data;
}
export async function adminDeleteAnAchievements(id) {
  const { data } = await axiosInstance.delete(
    `/admin/achievement/delete-achievements/${id}`
  );
  return data;
}
export async function adminUpdateAnAchievements(id, formData) {
  const { data } = await axiosInstance.put(
    `/admin/achievement/update-achievement/${id}`,
    formData
  );
  return data;
}

export async function userFetchAllAchievements() {
  const { data } = await axiosInstance.get(
    "/user/achievement/get-achievements"
  );
  return data;
}

export async function adminAddNewAnnouncement(formData) {
  const { data } = await axiosInstance.post(
    "/admin/announcement/add-announcement",
    formData
  );
  return data;
}

export async function adminFetchAllAnnouncements() {
  const { data } = await axiosInstance.get(
    "/admin/announcement/get-announcement"
  );
  return data;
}

export async function userFetchAllAnnouncements() {
  const { data } = await axiosInstance.get(
    "/user/announcement/get-announcement"
  );
  return data;
}

export async function adminDeleteAnnouncements(id) {
  const { data } = await axiosInstance.delete(
    `/admin/announcement/delete-announcement/${id}`
  );
  return data;
}
//college point update

export async function addToCollegeTotalPoints(formData) {
  const { data } = await axiosInstance.put(
    "/admin/college/add-point",
    formData
  );
  return data;
}

export async function reduceFromCollegeTotalPoints(formData) {
  const { data } = await axiosInstance.put(
    "/admin/college/reduce-point",
    formData
  );
  return data;
}

//onStage admin

export async function adminAddNewOnstageCollege(formData) {
  const { data } = await axiosInstance.post(
    "/admin/onstage/add-onstage",
    formData
  );
  return data;
}

export async function adminFetchAllOnstageCollege() {
  const { data } = await axiosInstance.get("/admin/onstage/get-onstage");
  return data;
}

export async function adminDeleteOnstageCollege(id) {
  const { data } = await axiosInstance.delete(
    `/admin/onstage/delete-onstage/${id}`
  );
  return data;
}

//offStage admin
export async function adminAddNewOffstageCollege(formData) {
  const { data } = await axiosInstance.post(
    "/admin/offstage/add-offstage",
    formData
  );
  return data;
}

export async function adminFetchAllOffstageCollege() {
  const { data } = await axiosInstance.get("/admin/offstage/get-offstage");
  return data;
}

export async function adminDeleteOffstageCollege(id) {
  const { data } = await axiosInstance.delete(
    `/admin/offstage/delete-offstage/${id}`
  );
  return data;
}
//onStage user

export async function userFetchAllOnstageCollege() {
  const { data } = await axiosInstance.get("/user/onstage/get-onstage");
  return data;
}

//offStage user
export async function userFetchAllOffstageCollege() {
  const { data } = await axiosInstance.get("/user/offstage/get-offstage");
  return data;
}
