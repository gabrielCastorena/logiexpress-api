import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Paquete } from "./Paquete.js";

@Entity("almacenes")
export class Almacen {
    @PrimaryGeneratedColumn()
    id_almacen!: number;

    @Column({ type: "varchar" })
    nombre!: string;

    @Column({ type: "varchar" })
    ubicacion!: string;

    @Column({ type: "int" })
    capacidad_maxima!: number;

    @OneToMany(() => Paquete, (paquete) => paquete.almacen)
    paquetes!: Paquete[];
}