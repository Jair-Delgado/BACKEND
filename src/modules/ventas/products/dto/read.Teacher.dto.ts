import { BaseTeacherDto } from "./base.teacher.dto";
import {Exclude, Expose} from "class-transformer";

@Exclude()
export class readTeacherDto extends BaseTeacherDto{
    @Expose()
    readonly id;
    @Expose()
    readonly name;
    @Expose()
    readonly title;
    @Expose()
    readonly secondname;
}