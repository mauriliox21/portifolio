export type Tech = {
    name: string,
    icon: string,
    expirience: Expirience


}

export type Expirience = {
    time: string,
    type: 'PROFESSIONAL'|'ACADEMIC'
    projects: Project[]
}

export type Project = {
    description: string,
    repository: string
}