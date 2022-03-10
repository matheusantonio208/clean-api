export interface Encrypter {
    encrypt (valuse: string): Promise<string>
}