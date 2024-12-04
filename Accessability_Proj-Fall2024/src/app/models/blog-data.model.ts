export interface BlogData {
  name: string;
  createDate: string;
  lastUpdated?:string;
  imgLink?:string;
  title: string;
  content:string;
  likes:number;
  tags:string[];
}
