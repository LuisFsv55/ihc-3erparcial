export const DATASELECTIONMaterias = [
    {
        id: 1,
        subject: 'Programación I',
        sigla: 'INF-120',
        nivel: 2
    },
    {
        id: 2,
        subject: 'Contabilidad',
        sigla: 'ADM-200',
        nivel: 4
    },
    {
        id: 3,
        subject: 'Ecuaciones Diferenciales',
        sigla: 'MAT-207',
        nivel: 3
    },
    {
        id: 4,
        subject: 'Ingles Tecnico II',
        sigla: 'LIN-101',
        nivel: 2
    },
    {
        id: 5,
        subject: 'Programación Ensamblador',
        sigla: 'INF-221',
        nivel: 4
    },
    {
        id: 6,
        subject: 'Base de Datos I',
        sigla: 'INF-210',
        nivel: 5
    },
    {
        id: 7,
        subject: 'Base de Datos II',
        sigla: 'INF-322',
        nivel: 6
    }
];
export const DATASELECTIONGRUPOS = [
    {
        id: 1,
        group: 'SA',
        horario: 'Lun-Mar-Mier',
        dia: {
            lunes: true,
            martes: true,
            miercoles: true,
            jueves: false,
            viernes: false,
            sabado: false
        },
        hora: '10:00 - 12:00',
        horas: {
            inicio: '10:00',
            fin: '12:00'
        },
        docente: 'Evans Balcazar Veizaga',
        cupo: 0,
        union: {
            id: 1,
            subject: 'Programación I',
        }
    }, 
    {
        id: 2,
        group: 'SB',
        horario: 'Lun-Mier-Viern',
        dia: {
            lunes: true,
            martes: false,
            miercoles: true,
            jueves: false,
            viernes: true,
            sabado: false
        },
        hora: '10:00 - 12:00',
        horas: {
            inicio: '10:00',
            fin: '12:00'
        },
        docente: 'Miguel Peinado Veizaga',
        cupo: 35,
        union: {
            id: 1,
            subject: 'Programación I',
        }
    },
    {
        id: 3,
        group: 'SA',
        horario: 'Mar-Jue',
        dia: {
            lunes: false,
            martes: true,
            miercoles: false,
            jueves: true,
            viernes: false,
            sabado: false
        },
        hora: '11:00 - 13:00',
        horas: {
            inicio: '10:00',
            fin: '12:00'
        },
        docente: 'Marcos Flores Flores',
        cupo: 11,
        union: {
            id: 2,
            subject: 'Contabilidad',
        }
    },
    {
        id: 4,
        group: 'SB',
        horario: 'Lun-Mier-Vier',
        dia: {
            lunes: true,
            martes: false,
            miercoles: false,
            jueves: false,
            viernes: true,
            sabado: false
        },
        hora: '08:30 - 10:00',
        horas: {
            inicio: '08:30',
            fin: '10:00'
        },
        docente: 'Ruben Orosco Gomez',
        cupo: 5,
        union: {
            id: 2,
            subject: 'Contabilidad',
        }
    },
    {
        id: 5,
        group: 'SA',
        horario: 'Mar-Jue-Vier',
        dia: {
            lunes: false,
            martes: true,
            miercoles: false,
            jueves: true,
            viernes: true,
            sabado: false
        },
        hora: '12:30 - 14:30',
        horas: {
            inicio: '12:30',
            fin: '14:30'
        },
        docente: 'Avendaño Gonzales Eudal',
        cupo: 10,
        union: {
            id: 3,
            subject: 'Ecuaciones Diferenciales',
        }
    },
    {
        id: 6,
        group: 'SA',
        horario: 'Mar-Jue',
        dia: {
            lunes: false,
            martes: true,
            miercoles: false,
            jueves: true,
            viernes: false,
            sabado: false
        },
        hora: '14:00 - 16:00',
        docente: 'Isabel Miriam Guzman de Molina',
        cupo: 10,
        union: {
            id: 4,
            subject: 'Ingles Tecnico II',
        }
    }
];

    // {
    //     id: 1,
    //     group: 'SA',
    //     horario: 'Lun-Mar-Mier',
    //     hora: '10:00 - 12:00',
    //     docente: 'Evans Balcazar Veizaga',
    //     cupo: 40,
    //     grupo: {
    //         id: 2,
    //         group: 'SB',
    //         horario: 'Lun-Mier-Jue',
    //         hora: '10:00 - 12:00 | 19:00 - 20:00 | 10:00 - 12:00',
    //         docente: 'Marcos Oscar Flores Flores',
    //         cupo: 10
    //     }
    // }