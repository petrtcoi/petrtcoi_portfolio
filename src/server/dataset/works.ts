import { Work } from "../../assets/types/work.type"

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
    {
        publishDate: '13.11.2022',
        title: 'Тестирование с помощью @testing-library',
        description: 'Настройка и реализация unit-тестов и интеграционных тестов с помощью библиотеки @testing-library. Проверена работа кнопок открытия и закрытия бокового меню',
        tags: ['React','Testing-Library', 'Jest'],
        links: {
            devto: 'https://dev.to/petrtcoi/tiestirovaniie-react-chast-1-testing-library-i2h',
            vcru: 'https://vc.ru/u/206685-petr-tcoi/538469-testirovanie-react-chast-1-testing-library',
            // local: 'page_1'
        }
    },
]