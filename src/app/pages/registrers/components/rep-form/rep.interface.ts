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
    Validators.maxLength(45),
    // tslint:disable-next-line:max-line-length
    Validators.pattern(/(10\.26\..{1,3}\..{1,3})|(10\.115\..{1,3}\..{1,3})|(10\.50\..{1,3}\..{1,3})(172\.40\..{1,3}\..{1,3})([a-z]+\.modrp\.com)/ig )]],

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
    [Validators.required,
    Validators.minLength(17)]],

    repdata_cnpjcompra: ['',
    [Validators.required,
    Validators.maxLength(18),
    // tslint:disable-next-line:max-line-length
    Validators.pattern('^([0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}(-)[0-9]{2})$|'
    + '^[0-9]{14}$|'
    + '^([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}(()|(-))[0-9]{2})$|'
    + '^([0-9]{11})$')]],

    repdata_chaveregistro: ['',
    [Validators.required,
    Validators.maxLength(12)]],

    repdata_senhacomunic: ['',
    [Validators.required]],

    repdata_usuario: ['',
    [Validators.required]],

    repdata_senha: ['',
    [Validators.required]],

    repdata_cpf: ['',
    [Validators.required,
    Validators.pattern('^([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}(()|(-))[0-9]{2})$|'
    + '^([0-9]{11})$')]],

    repdata_mod: ['',
    [Validators.required]],
 };
