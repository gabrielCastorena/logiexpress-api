import { AppDataSource } from "../config/data-source.js";
import { Paquete } from "../entity/Paquete.js";

export class PaqueteRepository {
    private repository = AppDataSource.getRepository(Paquete);

    async crearEnAlmacen(idAlmacen: number, datos: any): Promise<Paquete> {
        const paquete = this.repository.create({
            peso_kg: datos.peso_kg,
            largo_cm: datos.largo_cm,
            ancho_cm: datos.ancho_cm,
            alto_cm: datos.alto_cm,
            contenido: datos.contenido,
            envio: { id_envio: datos.id_envio },
            almacen: { id_almacen: idAlmacen },
        });
        return await this.repository.save(paquete);
    }
}

export const paqueteRepository = new PaqueteRepository();