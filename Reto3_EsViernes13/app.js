// Michael Myers ha dejado un patrón en su calendario…

// Cada año ataca en noche de Halloween (31 de octubre) o en cualquier viernes 13.

// Tu misión es encontrar todas las noches de terror de un año concreto 🩸

// Recibirás un año (por ejemplo 2025) y deberás devolver un array con todas las fechas en formato 'YYYY-MM-DD' donde Michael Myers podría atacar.

// Si no dan un año válido, devuelve un array vacío.
// Devuelve todas las fechas del año que sean 31 de octubre, y/o viernes 13.
// Las fechas deben estar ordenadas cronológicamente.
// El formato debe ser exactamente 'YYYY-MM-DD' (con ceros a la izquierda si hace falta).
// myersCalendar(2025)
// // → ['2025-06-13', '2025-09-13', '2025-10-31']

// myersCalendar(2026)
// // → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

// myersCalendar(2024)
// // → ['2024-09-13', '2024-10-31', '2024-12-13']

function myersCalendar(year){
    if(year=="")return []
    const res = []
    const date = new Date(year, 0, 1)
    date.setMonth(1)
    date.setDate(29)
    let bisiesto = false
    date.getDate()==1 ? bisiesto = false : bisiesto = true
    const daysOfYEar = bisiesto = true ? 366: 365
    
    date.setMonth((0))
    date.setDate(1)

    for(let i = 1; i<daysOfYEar; i++){
        if((date.getDate() == 13 && date.getDay() == 5)||(date.getDate() == 31 && date.getMonth() == 9)){
            res.push(date.toISOString().slice(0,10))
        }
        date.setDate(date.getDate()+1)
    }
    return res
}

console.log(myersCalendar(2025))

