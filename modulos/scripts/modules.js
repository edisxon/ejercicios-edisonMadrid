// js/modules.js

// Filtrar series por plataforma y si están en streaming
export function filterSeriesByPlatform(series, platform) {
    return series.filter(serie => serie.platform === platform && serie.isStreaming);
}

// Renderizar las series en el DOM
export function renderSeries(series, container) {
    container.innerHTML = ''; // Limpiar el contenedor
    series.forEach(serie => {
        const serieElement = document.createElement('div');
        serieElement.classList.add('serie');
        serieElement.innerHTML = `
            <h2>${serie.title}</h2>
            <p>Plataforma: ${serie.platform}</p>
        `;
        container.appendChild(serieElement);
    });
}


export const series = [
    { title: "Stranger Things", platform: "Netflix", isStreaming: true },
    { title: "The Mandalorian", platform: "Disney+", isStreaming: true },
    { title: "The Crown", platform: "Netflix", isStreaming: false },
    { title: "The Witcher", platform: "Netflix", isStreaming: true },
    { title: "The Office", platform: "Netflix", isStreaming: false },
    { title: "Breaking Bad", platform: "Netflix", isStreaming: true },
    { title: "Loki", platform: "Disney+", isStreaming: true },
    { title: "Black Mirror", platform: "Netflix", isStreaming: true },
    { title: "Westworld", platform: "HBO", isStreaming: false },
    { title: "Succession", platform: "HBO", isStreaming: true },
    { title: "Ozark", platform: "Netflix", isStreaming: false },
    { title: "Mindhunter", platform: "Netflix", isStreaming: true },
    { title: "Narcos", platform: "Netflix", isStreaming: true },
    { title: "House of the Dragon", platform: "HBO", isStreaming: true },
    { title: "The Last of Us", platform: "HBO", isStreaming: true },
    { title: "The Falcon and the Winter Soldier", platform: "Disney+", isStreaming: false
    },
    { title: "Daredevil", platform: "Disney+", isStreaming: true },
    { title: "The Umbrella Academy", platform: "Netflix", isStreaming: true },
    { title: "Peaky Blinders", platform: "Netflix", isStreaming: false },
    { title: "Chernobyl", platform: "HBO", isStreaming: true },
    { title: "Euphoria", platform: "HBO", isStreaming: true },
    { title: "WandaVision", platform: "Disney+", isStreaming: true },
    { title: "The Sopranos", platform: "HBO", isStreaming: false },
    { title: "Dark", platform: "Netflix", isStreaming: true },
    { title: "True Detective", platform: "HBO", isStreaming: true },
    { title: "The Punisher", platform: "Netflix", isStreaming: false },
    { title: "Big Little Lies", platform: "HBO", isStreaming: true },
    { title: "Daredevil", platform: "Netflix", isStreaming: false },
    { title: "The Queen's Gambit", platform: "Netflix", isStreaming: true },
    { title: "The West Wing", platform: "HBO", isStreaming: false },
    { title: "Lost", platform: "Disney+", isStreaming: true }
    ];