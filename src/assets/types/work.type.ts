export enum WorkLink {
    devto = 'devto',
    vcru = 'vcru',
    local = 'local'
}

export type Work = {
    title: string
    publishDate: string
    description: string
    keywords: string[]
    links: {[key in WorkLink]?: string}
}

export const WorkLinkLabels: {[key in WorkLink]: string} = {
    devto: 'dev.to',
    vcru: 'vc.ru',
    local: 'petrtcoi.com'
}