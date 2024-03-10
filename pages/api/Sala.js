
/*
const cambiarColor=(columna, fila, espaciosOcupados, setEspaciosOcupados)=>{
    if(espaciosOcupados[columna]>= 7){
        return;
    }
    const nuevoEspaciosOcupados={...espaciosOcupados};
    nuevoEspaciosOcupados[columna]++;
    console.log(nuevoEspaciosOcupados);
    console.log(columna, fila)
    socket.emit('actualizarEspaciosOcupados',{columna,espaciosOcupados:nuevoEspaciosOcupados});
    setEspaciosOcupados(prevEspaciosOcupados =>({
        ...prevEspaciosOcupados,
        [columna]:prevEspaciosOcupados[columna]+1
    }));
};
export {cambiarColor};
*/

const cambiarColor=(columna, fila, espaciosOcupados, setEspaciosOcupados)=>{
    if(espaciosOcupados[columna]>=6){
        return;
    }
    const nuevoEspaciosOcupados={...espaciosOcupados};
    nuevoEspaciosOcupados[columna]++;
    console.log(nuevoEspaciosOcupados);

    setEspaciosOcupados(prevEspaciosOcupados =>({
        ...prevEspaciosOcupados,
        [columna]:prevEspaciosOcupados[columna]+1
    }))

}
export {cambiarColor}