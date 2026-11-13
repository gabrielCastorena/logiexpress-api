import { AppDataSource } from "../config/data-source.js";
import { Envio } from "../entity/Envio.js";

export class EnvioRepository {
    private repository = AppDataSource.getRepository(Envio);

    async crearConPaquetes(idDirOrigen: number, idDirDestino: number, costoTotal: number, paquetes: any[]): Promise<Envio> {
        const envio = this.repository.create({
            origen: { id_direccion: idDirOrigen },
            destino: { id_direccion: idDirDestino },
            costo_total: costoTotal,
            paquetes: paquetes,
        });
        return await this.repository.save(envio);
    }

        async actualizarCosto(idEnvio: number, costoTotal: number): Promise<Envio | null> {
        await this.repository.update(idEnvio, { costo_total: costoTotal });
        return await this.repository.findOneBy({ id_envio: idEnvio });
    }
    
}

export const envioRepository = new EnvioRepository();