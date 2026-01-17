import { Contributor } from "./contributor";
import { Project } from "./project";


export interface Team {
  id: string;
  name: string;
  userId:string;
  description?:string;
  contributors?: Contributor[];
  projects?:Project[];
  createdAt: Date;
}


export type TeamFormData = {
  name: string;
  description?: string;
}