import { Validators } from '@angular/forms';

export const addressFormGroup = {

  end_cep: ['',
    [Validators.required,
    Validators.maxLength(45),
    Validators.pattern('([0-9]{5}[-][0-9]{3})|([0-9]{8})')]],

  end_rua: ['',
    [Validators.required,
    Validators.maxLength(60)]],

  end_num: ['',
    [Validators.required,
    Validators.maxLength(6),
    Validators.pattern('[0-9]+')]],

  end_comp: ['',
    [Validators.maxLength(45)]],

  end_uf: ['',
    [Validators.required,
    Validators.maxLength(2),
    Validators.pattern('[A-Z]+')]],

  end_cidade: ['',
    [Validators.required,
    Validators.maxLength(45)]],

  end_bairro: ['',
    [Validators.required,
    Validators.maxLength(45)]],

  end_ref: ['',
    [Validators.required,
    Validators.maxLength(45)]],
};

