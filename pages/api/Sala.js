let turno = 'red';

const cambiarColor=(columna, espaciosOcupados, setEspaciosOcupados)=>{
    if (espaciosOcupados[columna]>=6){
        console.log("Columna ", columna, " llena.")
        return;
    }
    const nuevoEspaciosOcupados = {...espaciosOcupados};
    nuevoEspaciosOcupados[columna]++;
    //console.log(nuevoEspaciosOcupados);

    setEspaciosOcupados(prevEspaciosOcupados=>({
        ...prevEspaciosOcupados,
        [columna]: prevEspaciosOcupados[columna]+1
    }));

    turno=turno==='red'?'yellow':'red'
    let move=[columna, turno]
    let ficha=[columna, nuevoEspaciosOcupados[columna], turno]
    //let idFicha=columna+fila
    let color=turno
    //console.log("Columna: ", ficha[0],  "\nFila: ", ficha[1], "\nColor: ", ficha[2])
    //console.log(ficha)
    exportarFichas(ficha)
    return ficha//, idFicha
}

const exportarFichas=(ficha)=>{
    let id = ficha
    return id
}
export {cambiarColor, exportarFichas}