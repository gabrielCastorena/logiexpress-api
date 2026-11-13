import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Envio } from "./Envio.js";
import { Almacen } from "./Almacen.js";

@Entity("paquetes")
export class Paquete {
    @PrimaryGeneratedColumn()
    id_paquete!: number;

    @Column({ type: "decimal" })
    peso_kg!: number;

    @Column({ type: "decimal" })
    largo_cm!: number;

    @Column({ type: "decimal" })
    ancho_cm!: number;

    @Column({ type: "decimal" })
    alto_cm!: number;

    @Column({ type: "varchar" })
    contenido!: string;

    @ManyToOne(() => Envio, (envio) => envio.paquetes)
    @JoinColumn({ name: "id_envio" })
    envio!: Envio;

    @ManyToOne(() => Almacen, (almacen) => almacen.paquetes, { nullable: true })
    @JoinColumn({ name: "id_almacen" })
    almacen!: Almacen | null;
}