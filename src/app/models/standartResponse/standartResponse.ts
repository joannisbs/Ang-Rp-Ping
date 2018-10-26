export interface StandartResponseInterface {
    sucess: boolean;
    motivo: string;
        
}
export class StandartSearchList {
    search: string;
    pagina: string;
    ObjIds: string;
}

export class StandartDelete {
    id    : string;
    motivo: string;
}

export class StandartHistorie {
    hora  : string;
    event : string;
}         