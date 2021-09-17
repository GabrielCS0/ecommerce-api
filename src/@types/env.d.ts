declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: number
    MONGO_URL: string
    SECRET_HASH_KEY: string
    JWT_SECRET: string
  }
}
