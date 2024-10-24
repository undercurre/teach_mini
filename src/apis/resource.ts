import ApiService from "../service/request/http";

const catalogApiService = new ApiService("http://129.204.147.56:8080");

export type CataItem = {
  id: number;
  name: string;
  keywords: string;
  desc: string;
  pid: number;
  list: Array<any>;
  iconUrl: string;
  picUrl: string;
  level: string;
  sortOrder: number;
  addTime: string;
  updateTime: string;
  deleted: boolean;
};

interface CataLogRes {
  allList: {
    [key: string]: Array<CataItem>;
  };
}

export async function getCataLog() {
  return catalogApiService.get<CataLogRes>("/wx/catalog/all");
}
