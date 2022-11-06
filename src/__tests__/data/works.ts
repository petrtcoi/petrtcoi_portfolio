import { Work } from "../../types/work.type"

export const works: Work[] = [
    {
        title: 'Запуск сайта',
        description: 'Создание шаблона сайта с минимальным функционалом. Адаптивная верстка flexbox. Также используем CSS-переменные, в том числе и для эффективной смены темы сайта.',
        tags: ['NextJS', 'Flexbox', 'CSS variables'],
        links: {
            devto: 'http://example-1.com',
            vcru: 'https://example-1.com',
            local: 'page_1'
        }
    },
    {
        title: 'Work 2',
        description: 'Work 3',
        tags: ['tag1', 'tag3'],
        links: {
            devto: 'http://example-2.com',
            vcru: 'https://example-2.com',
            local: 'page_2'
        }
    },
    {
        title: 'Work 3',
        description: 'Work 3',
        tags: ['tag3'],
        links: {
            devto: 'http://example-3.com',
            vcru: 'https://example-3.com',
            local: 'page_3'
        }
    }
]