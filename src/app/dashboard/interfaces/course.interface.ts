import { Student } from "./student.interface";

export interface Course {
  description:       string;
  id:                number;
  students:          Student[];
  title:             string;
  universityProgram: string;
}

