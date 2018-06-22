import { Validators } from '@angular/forms';

export const addressFormGroup = {
    cep: ['',
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern('[0-9]{5}[-][0-9]{3}')]],

      logradouro: ['',
        [Validators.required,
        Validators.maxLength(60)]],

      numero: ['',
        [Validators.required,
        Validators.maxLength(6),
        Validators.pattern('[0-9]+')]],

      complemento: ['',
        [Validators.maxLength(45)]],

      uf: ['',
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[A-Z]+')]],

      cidade: ['',
        [Validators.required,
        Validators.maxLength(45)]],

      bairro: ['',
        [Validators.required,
        Validators.maxLength(45)]],

      inputRef: ['',
        [Validators.required,
        Validators.maxLength(45)]],
 };

