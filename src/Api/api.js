const baseApi = "http://localhost:9500/";
const baseApi2 = "http://localhost:9010/";

export default {
  // timeline: `${baseApi}timeline`,
  timeline: `${baseApi2}api/timeline/get_entry_by_rank?src=web&limit=20&category=all`,
  getDetail: `${baseApi2}api/post/getDetailData`
};
