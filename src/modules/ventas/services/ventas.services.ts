import { Inject, Injectable } from "@nestjs/common";
import { RepositoryEnum } from "src/shared/enums";
import { TeacherEntity } from "../products/entities";
import { Repository } from "typeorm";
import { CreateTeacherDto, readTeacherDto } from "../products";

@Injectable()
export class VentasService {
    constructor(
        @Inject(RepositoryEnum.TEACHER_REPOSITORY)
        private repository:Repository<TeacherEntity>,
    )
   async  create(payload: CreateTeacherDto): Promise<ServiceResponseHttpModel>{
    const newProduct = this.repository.create(payload);
    const productCreated = await this.repository.save(newProduct);

    return {data:plainToInstance(readTeacherDto, productCreated)}
   }
   async catalogue(): Promise<ServiceResponseHttpModel>{
    const response = this.repository.findAndCount({take:1000});
    
    return {data : response [0],
    pagination:{totalItems: response[1], limit:10}}
   }
}