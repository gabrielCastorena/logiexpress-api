import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Direccion } from "./Direccion.js";

@Entity("clientes")
export class Cliente {
    @PrimaryGeneratedColumn()
    id_cliente!: number;

    @Column({ type: "varchar" })
    nombre!: string;

    @Column({ type: "varchar" })
    apellidos!: string;

    @Column({ type: "varchar", nullable: true })
    telefono!: string | null;

    @Column({ type: "varchar", nullable: true })
    correo!: string | null;

    @Column({ type: "enum", enum: ["ACTIVO", "INACTIVO"] })
    estado!: string;

    @Column({ type: "decimal" })
    limite_credito!: number;

    @OneToMany(() => Direccion, (direccion) => direccion.cliente)
    direcciones!: Direccion[];
}