import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Envio } from "./Envio.js";

@Entity("historial_rastreo")
export class HistorialRastreo {
    @PrimaryGeneratedColumn()
    id_evento!: number;

    @Column({ type: "datetime" })
    fecha_evento!: Date;

    @Column({ type: "varchar" })
    ubicacion_actual!: string;

    @Column({ type: "enum", enum: ["EN_ALMACEN", "EN_TRANSITO", "EN_REPARTO", "ENTREGADO", "INCIDENCIA"] })
    estado_evento!: string;

    @Column({ type: "varchar", nullable: true })
    observaciones!: string | null;

    @ManyToOne(() => Envio, (envio) => envio.historial)
    @JoinColumn({ name: "id_envio" })
    envio!: Envio;
}