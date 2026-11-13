import { In } from "typeorm";
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

        async findActivos(): Promise<Envio[]> {
        return await this.repository.find({
            where: { estado: In(["REGISTRADO", "EN_TRANSITO"]) },
            relations: { origen: { cliente: true }, destino: { cliente: true }, paquetes: true },
        });
    }

    async findByCliente(idCliente: number): Promise<Envio[]> {
        return await this.repository.find({
            where: { origen: { cliente: { id_cliente: idCliente } } },
            relations: { destino: { cliente: true } },
            order: { fecha_registro: "DESC" },
        });
    }
    

}

export const envioRepository = new EnvioRepository();