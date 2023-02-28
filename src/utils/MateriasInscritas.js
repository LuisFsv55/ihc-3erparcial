export const MATERIASINSCRITAS = [
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
        hora: '10:00 - 12:00'
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
        hora: '10:00 - 12:00'
    }
];