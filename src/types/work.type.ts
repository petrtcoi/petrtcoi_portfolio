export enum WorkLink {
    devto = 'devto',
    vcru = 'vcru',
    local = 'local'
}

export type Work = {
    title: string
    publishDate: string
    description: string
    tags: string[]
    links: {[key in WorkLink]?: string}
}

export const WorkLinkLabels: {[key in WorkLink]: string} = {
    devto: 'www.dev.to',
    vcru: 'www.vc.ru',
    local: 'страница демонстрации'
}