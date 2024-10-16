export interface BlogCard {
  name: string;
  createDate: string;
  lastUpdated?:string;
  imgLink?:string;
  content:string;
  likes:number;
  tags:string[];
}
