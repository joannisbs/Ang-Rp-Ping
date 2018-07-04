import { Validators } from '@angular/forms';

export const chipFormGroup = {


    chip_Numchip: ['',
        [Validators.required,
        Validators.maxLength(45)]],
};
