export class ChipInteface {
    chip_Numchip: string;
    chip_Ip: string;
    chip_Operadora: string;
    chip_Data: string;
}
export class ListChipsInteface {
    page:   string;
    search: string;
    categ:  string;
}
export class CadastrChipInteface {
    sucess: boolean;
    motivo: string;
    number: string;
    ipaddr: string;
}

export class ChipListRet {

    chip_ativo: string;
    ​​​chip_data: string;
    ​​​chip_ip: string;
    ​​​chip_num: string;
    ​​​chip_oper: string;
    ​​​chip_whedes: string;
    chip_where: string;
    id: string;
}
export class ChipdetailInterface {
    one: string;
    two: string;
    three: string;
    
}
export class ListChipHistoryInteface {
    page:   string;
    search: string;
    ids:  string;
}