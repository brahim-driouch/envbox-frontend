export interface EnvVar {
  id: string;
  key: string;
  value: string;
}


export interface Project {
  id?: string;
  name: string;
  description: string;
  envVars?: EnvVar[];
  assignedTeam?: string;
  assignedMembers?: string[];
  createdAt?: Date;
}






