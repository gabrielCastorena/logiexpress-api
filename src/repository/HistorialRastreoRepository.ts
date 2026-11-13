import { AppDataSource } from "../config/data-source.js";
import { HistorialRastreo } from "../entity/HistorialRastreo.js";

export class HistorialRastreoRepository {
    private repository = AppDataSource.getRepository(HistorialRastreo);

    async registrarEvento(idEnvio: number, datos: any): Promise<HistorialRastreo> {
        const evento = this.repository.create({
            ubicacion_actual: datos.ubicacion_actual,
            estado_evento: datos.estado_evento,
            observaciones: datos.observaciones,
            envio: { id_envio: idEnvio },
        });
        return await this.repository.save(evento);
    }
}

export const historialRastreoRepository = new HistorialRastreoRepository();