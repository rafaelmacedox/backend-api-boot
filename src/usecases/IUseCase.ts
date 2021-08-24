import { IUseCaseReturn } from "./IUseCaseReturn";

export interface IUseCase {
    execute(data: any): Promise<IUseCaseReturn>;
}
