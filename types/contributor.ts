import { Project } from "./project";
import { Team } from "./team";



export interface Contributor  {
    id: string;
    userId: string;
    fullname: string;
    email: string;
    team? :Team,
    projects?: Project[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export type ContributorCreate = {
    fullname: string;
    email: string;
    userId: string;
}
