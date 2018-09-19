import { Validators } from '@angular/forms';

export const companyFormGroup = {

    emp_nome: ['',
        [Validators.required,
        Validators.maxLength(12),
        Validators.pattern('[A-Z].*')]],

    empdata_cnpj: ['',
        [Validators.required,
        Validators.maxLength(18),
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^([0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}(-)[0-9]{2})$|'
        + '^[0-9]{14}$|'
        + '^([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}(()|(-))[0-9]{2})$|'
        + '^([0-9]{11})$')]],

    empdata_resp: ['',
        [Validators.required,
        Validators.maxLength(45)]],

    empdata_razao: ['',
        [Validators.required,
        Validators.maxLength(90)]],

    empdata_email: ['',
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)]],

    empdata_tel: ['',
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern('[\(]?[0-9]{2}(( )|([\)])|()|(-))(([0-9]{4})|([0-9]{5}))(( )|(-)|)([0-9]{4})')]],

    // emp_tela: ['',
    //     [Validators.required,
    //     Validators.maxLength(1),
    //     Validators.pattern('[1-2]')]],

    // emp_coluna: ['',
    //     [Validators.required,
    //     Validators.maxLength(2),
    //     Validators.pattern('(10|[0-9])')]],

    // emp_linha: ['',
    //     [Validators.required,
    //     Validators.maxLength(2),
    //     Validators.pattern('[0-9]+')]],
};
