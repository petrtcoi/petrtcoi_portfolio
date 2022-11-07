import { Work } from "../types/work.type"

export const works: Work[] = [
    {
        publishDate: '07.11.2022',
        title: 'Смена темы через CSS-переменные',
        description: 'Демонстрация смены темы через CSS-переменные и манипулирование DOM: устанвока атрибута data-theme для тега <html>. Также, через свойство transition добавлена плавность при смене цветовой схемы сайта.',
        tags: ['React','CSS variables'],
        links: {
            devto: 'https://dev.to/petrtcoi/smiena-tiemy-saita-chieriez-css-pieriemiennyie-4f7',
            vcru: 'https://vc.ru/u/206685-petr-tcoi/534102-smena-temy-sayta-cherez-css-peremennye',
            // local: 'page_1'
        }
    },
]