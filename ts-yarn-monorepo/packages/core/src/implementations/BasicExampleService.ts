import { IExampleService } from "@interfaces/IExampleService";

export class BasicExampleService implements IExampleService {
    doExampleWork(input: string): Uint8Array {
        let result: Uint8Array = new Uint8Array(input.length);
        for (let i: number = 0; i < input.length; i++) {
            result[i] = input.charCodeAt(i);
        }

        return result;
    }
}
