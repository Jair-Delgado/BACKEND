
import { DataSource } from "typeorm"
import { SubjectEntity, TeacherEntity } from "../products/entities"
import { DataSourceEnum } from "src/shared/enums/data-source.enum"
import { RepositoryEnum } from "src/shared/enums"
export const ventasProvider = [
    {
        provide:RepositoryEnum.TEACHER_REPOSITORY,
        useFactory:(dataSource:DataSource)=>
        dataSource.getRepository(TeacherEntity),
        inject:[DataSourceEnum.PG_DATA_SOURCE]
    },
    
    {
        provide:RepositoryEnum.SUBJECT_REPOSITORY,
        useFactory:(dataSource:DataSource)=>
        dataSource.getRepository(SubjectEntity),
        inject:[DataSourceEnum.PG_DATA_SOURCE]
    }
]