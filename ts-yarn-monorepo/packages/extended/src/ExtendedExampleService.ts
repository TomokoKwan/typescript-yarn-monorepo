import { IExampleService } from "@ts-example/core";
import * as base64 from "base64-js";

export class ExtendedExampleService implements IExampleService {
    doExampleWork(input: string): Uint8Array {
        return base64.toByteArray(input);
    }
}
