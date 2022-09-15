import { ISupportData } from "./ISupportData";
import { IUserData } from "./IUserData";

export interface IUser {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data: IUserData[];
    support: ISupportData;
    
}
