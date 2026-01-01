

export interface Team {
  id: string;
  name: string;
  members: Member[];
  createdAt: Date;
}
export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: Date;
}