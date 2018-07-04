import { Validators } from '@angular/forms';

export const moduleFormGroup = {

    mod_num: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_Vmodulo: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_Vtplink: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_Vmodem: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_imei: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_lacre: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_resp: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    mod_status: ['',
        [Validators.required,
        Validators.maxLength(45)]],
};
