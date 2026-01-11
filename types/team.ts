

export interface Team {
  id: string;
  name: string;
  userId:string;
  description?:string;
  members?: Member[];
  createdAt: Date;
}
export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: Date;
}

export type TeamFormData = {
  name: string;
  description?: string;
}