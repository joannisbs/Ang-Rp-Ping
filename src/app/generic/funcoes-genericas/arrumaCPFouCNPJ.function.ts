
 export const arrumaCNPJouCpf = cpf_cnpj => {
    cpf_cnpj = cpf_cnpj.replace(/\./g , '');
    cpf_cnpj = cpf_cnpj.replace('\-', '');
    cpf_cnpj = cpf_cnpj.replace('\/', '');
    console.log(cpf_cnpj);
    if (cpf_cnpj.length === 11) {
        let cpf = cpf_cnpj.substring(0, 3);
        cpf = cpf + '.';
        cpf = cpf + cpf_cnpj.substring(3, 6);
        cpf = cpf + '.';
        cpf = cpf + cpf_cnpj.substring(6, 9);
        cpf = cpf + '-';
        cpf = cpf + cpf_cnpj.substring(9, 11);
        return (cpf);
    }
    if (cpf_cnpj.length === 14) {
        let cnpj = cpf_cnpj.substring(0, 2);
        cnpj = cnpj + '.';
        cnpj = cnpj + cpf_cnpj.substring(2, 5);
        cnpj = cnpj + '.';
        cnpj = cnpj + cpf_cnpj.substring(5, 8);
        cnpj = cnpj + '/';
        cnpj = cnpj + cpf_cnpj.substring(8, 12);
        cnpj = cnpj + '-';
        cnpj = cnpj + cpf_cnpj.substring(12, 14);
        return (cnpj);
    }
    return 'ValorInvalido';
};

