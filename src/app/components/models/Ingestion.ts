export interface Ingestion {

    name: string,
    createdAt: string,
    source: {
        driver: string,
        url: string,
        user: string,
        password: string
    }
}