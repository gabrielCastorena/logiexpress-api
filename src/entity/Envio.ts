import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Direccion } from "./Direccion.js";
import { Paquete } from "./Paquete.js";
import { HistorialRastreo } from "./HistorialRastreo.js";

@Entity("envios")
export class Envio {
    @PrimaryGeneratedColumn()
    id_envio!: number;

    @Column({ type: "decimal" })
    costo_total!: number;

    @Column({ type: "datetime" })
    fecha_registro!: Date;

    @Column({ type: "enum", enum: ["REGISTRADO", "EN_TRANSITO", "ENTREGADO", "CANCELADO"] })
    estado!: string;

    @ManyToOne(() => Direccion)
    @JoinColumn({ name: "id_dir_origen" })
    origen!: Direccion;

    @ManyToOne(() => Direccion)
    @JoinColumn({ name: "id_dir_destino" })
    destino!: Direccion;

    @OneToMany(() => Paquete, (paquete) => paquete.envio, { cascade: true })
    paquetes!: Paquete[];

    @OneToMany(() => HistorialRastreo, (evento) => evento.envio)
    historial!: HistorialRastreo[];
}