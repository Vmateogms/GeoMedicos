
export interface IMedico {
    colegiado: string;
    idUsuario: number;
    nombre: string;
    apellidos: string;
    especialidades?: string[];
    idEspecialidades?: number[];
    telefono?: string;
    tarifa: number;
    valoracionPromedio?: number;
    imagenUrl?: string;
    clinicas?: string[];
    tratamientos?: string[];
}



// import { IUser } from "./iuser";

// export interface IMedico extends IUser{
//     telefono?: string;
//     especialidad: String;
// }
