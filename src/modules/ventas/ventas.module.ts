import { Global, Module } from "@nestjs/common";
import { ventasProvider } from "./providers";

@Global()
@Module({
    imports:[DataBaseModule],
    controllers:[],
    providers:[...ventasProvider],
})
export class VentasModule {}