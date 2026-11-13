import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Envio } from "./Envio.js";

@Entity("auditoria_envios")
export class AuditoriaEnvio {
    @PrimaryGeneratedColumn()
    id_auditoria!: number;

    @Column({ type: "decimal" })
    costo_anterior!: number;

    @Column({ type: "decimal" })
    costo_nuevo!: number;

    @Column({ type: "varchar" })
    usuario!: string;

    @Column({ type: "datetime" })
    fecha_modificacion!: Date;

    @ManyToOne(() => Envio)
    @JoinColumn({ name: "id_envio" })
    envio!: Envio;
}