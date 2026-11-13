import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cliente } from "./Cliente.js";

@Entity("direcciones")
export class Direccion {
    @PrimaryGeneratedColumn()
    id_direccion!: number;

    @Column({ type: "varchar" })
    calle!: string;

    @Column({ type: "varchar" })
    numero!: string;

    @Column({ type: "varchar", nullable: true })
    cruzamientos!: string | null;

    @Column({ type: "varchar" })
    colonia!: string;

    @Column({ type: "varchar" })
    ciudad!: string;

    @Column({ type: "char" })
    codigo_postal!: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.direcciones)
    @JoinColumn({ name: "id_cliente" })
    cliente!: Cliente;
}