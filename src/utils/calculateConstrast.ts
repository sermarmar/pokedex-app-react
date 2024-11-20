export const ajustarContraste = (color: string): string => {
    const [h, s, l] = hexAHsl(color);

    // Definir umbral de luminosidad para fondos neutros como el gris.
    const umbralLuminosidad = 50; // Limite para distinguir entre fondo claro y oscuro.

    let nuevaLuminosidad: number;

    // Si el fondo es claro (luminosidad > 50), el texto debe oscurecerse.
    // Si el fondo es oscuro (luminosidad < 50), el texto debe aclararse.
    if (l > umbralLuminosidad) {
        // Fondo claro, texto más oscuro
        nuevaLuminosidad = Math.max(0, l - 40); // No queremos un texto demasiado oscuro
    } else {
        // Fondo oscuro, texto más claro
        nuevaLuminosidad = Math.min(100, l + 40); // No queremos un texto demasiado brillante
    }

    return hslAHex(h, s, nuevaLuminosidad);
}

function hexAHsl(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h: number = 0;
    let s: number = 0;
    const l: number = (max + min) / 2;

    if (max !== min) {
        const delta = max - min;
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        if (max === r) h = (g - b) / delta + (g < b ? 6 : 0);
        else if (max === g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;

        h *= 60;
    }

    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function hslAHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let [r, g, b] = [0, 0, 0];

    if (h >= 0 && h < 60) [r, g, b] = [c, x, 0];
    else if (h >= 60 && h < 120) [r, g, b] = [x, c, 0];
    else if (h >= 120 && h < 180) [r, g, b] = [0, c, x];
    else if (h >= 180 && h < 240) [r, g, b] = [0, x, c];
    else if (h >= 240 && h < 300) [r, g, b] = [x, 0, c];
    else if (h >= 300 && h < 360) [r, g, b] = [c, 0, x];

    const toHex = (n: number): string => Math.round((n + m) * 255).toString(16).padStart(2, '0');

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}