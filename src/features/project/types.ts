export interface Project {
    id: number;
    name: string;
    status: "READY" | "IN_PROGRESS" | "DONE";
    owner: string;
}