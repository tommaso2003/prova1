/**
 * Applica un overlay di colore a un'immagine
 * @param {string} imageId - ID dell'immagine
 * @param {string} color - Colore Hex
 */
function applyColorOverlay(imageId, color) {
  const overlay = document.getElementById(`overlay-${imageId}`);
  overlay.style.transition = 'background-color 1s'; // Transizione di 1 secondi
  overlay.style.backgroundColor = color;
}

/**
 * Ripristina l'immagine originale
 * @param {string} imageId - ID dell'immagine
 */
function resetOverlay(imageId) {
  const overlay = document.getElementById(`overlay-${imageId}`);
  overlay.style.transition = 'background-color 1s'; // Transizione di 1 secondi
  overlay.style.backgroundColor = 'transparent';
}
