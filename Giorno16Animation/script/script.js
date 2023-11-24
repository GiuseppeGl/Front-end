/* const boxes = document.querySelectorAll('.box');

// Nascondi i box all'avvio della pagina
boxes.forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateX(-50px)';
});

// Funzione per rendere i box visibili dopo 3 secondi
const revealBoxes = () => {
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
        }, index * 100); // Ritardo graduale per ogni box
    });
};

// Dopo 3 secondi, rendi i box visibili
setTimeout(revealBoxes, 3000); // Dopo 3 secondi */