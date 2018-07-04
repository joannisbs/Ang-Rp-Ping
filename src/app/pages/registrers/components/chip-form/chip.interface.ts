import { Validators } from '@angular/forms';

export const chipFormGroup = {


    chip_Numchip: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    chip_ip: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    chip_Operadora: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    chip_Data: ['',
        [Validators.required,
        Validators.maxLength(45)]],

};
