import { Validators } from '@angular/forms';

export const repFormGroup = {
    rep_nome: ['',
    [Validators.required,
    Validators.maxLength(12)]],

    emp_nome: ['',
    [Validators.required,
    Validators.maxLength(12)]],

    rep_ip: ['',
    [Validators.required,
    Validators.maxLength(12)]],

    rep_port: ['',
    [Validators.required,
    Validators.maxLength(12)]],

    reps_marca: ['',
    [Validators.required]],

    reps_modelo: ['',
    [Validators.required]],

    leitr_leitor: ['',
    [Validators.required]],

    repdata_serienum: ['',
    [Validators.required]],

    repdata_cnpjcompra: ['',
    [Validators.required,
    Validators.maxLength(18),
    // tslint:disable-next-line:max-line-length
    Validators.pattern('^([0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}(-)[0-9]{2})$|'
    + '^[0-9]{14}$|'
    + '^([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}(()|(-))[0-9]{2})$|'
    + '^([0-9]{11})$')]],

    repdata_chaveregistro: ['',
    [Validators.required]],

    repdata_senhacomunic: ['',
    [Validators.required]],

    repdata_usuario: ['',
    [Validators.required]],

    repdata_senha: ['',
    [Validators.required]],
 };
