import { IExampleService } from "@ts-example/core";

export class ExtendedExampleService implements IExampleService {
    doExampleWork(input: string): Uint8Array {
        throw new Error("Not implemented");
    }
}
