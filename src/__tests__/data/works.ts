import { Work } from "../../assets/types/work.type"

export const works: Work[] = [
    {
        publishDate: '22 ноября 2021',
        title: 'Запуск сайта',
        description: 'Создание шаблона сайта с минимальным функционалом. Адаптивная верстка flexbox. Также используем CSS-переменные, в том числе и для эффективной смены темы сайта.',
        keywords: ['NextJS', 'Flexbox', 'CSS variables'],
        links: {
            devto: 'http://example-1.com',
            vcru: 'https://example-1.com',
            local: 'page_1'
        }
    },
    {
        publishDate: '22 ноября 2021',
        title: 'Work 2',
        description: 'Work 3',
        keywords: ['tag1', 'tag3'],
        links: {
            devto: 'http://example-2.com',
            vcru: 'https://example-2.com',
            local: 'page_2'
        }
    },
    {
        publishDate: '22 ноября 2021',
        title: 'Work 3',
        description: 'Work 3',
        keywords: ['tag3'],
        links: {
            devto: 'http://example-3.com',
            vcru: 'https://example-3.com',
            local: 'page_3'
        }
    }
]