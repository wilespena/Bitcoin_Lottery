export default {
    title: "Lotería Bitcoin",
    "roll-btn": "Probar suerte",
    "puzzle-state-initial": "¡Buena suerte!",
    "puzzle-state-not-found": (start: string) =>
        `¡Nada encontrado! :/ inicio = ${start}. ¡Sigue intentando!`,
    "puzzle-state-success-title": "¡ENCONTRASTE LA CLAVE!!!!",
    "puzzle-state-sucess-content": (keyHex: string, wif: string) =>
        `Encontraste la clave privada: ${keyHex}, aquí está el WIF: ${wif}`,
    "puzzle-info":
        'Cada intento prueba <strong>50.000 claves</strong> aleatoriamente dentro del rango del puzzle seleccionado. La dificultad crece con el número del puzzle — <strong>el #71 comienza con ~2,3 quintillones de claves posibles</strong> y llega a <strong>~18,4 quintillones en el #74</strong>. Pura suerte, pero alguien lo va a encontrar. <strong><br /><br /> Lectura obligatoria antes de reclamar: <a href="./education-es.html" target="_blank">¿Qué es el puzzle y precauciones antes de reclamar →</a><br /><a href="tx-builder.html" onClick="event.preventDefault(); window.open(window.location.href.split(\'?\')[0].replace(/\\/?(index\\.html)?$/, \'/tx-builder.html\'), \'_blank\');">⚡ Construir Transacción para MARA Slipstream →</a></strong>',
};
