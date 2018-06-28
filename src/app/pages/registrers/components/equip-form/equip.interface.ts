import { Validators } from '@angular/forms';

export const equipFormGroup = {

    reps_marca: ['',
        [Validators.required,
        Validators.maxLength(12),
        Validators.pattern('[A-Z].*')]],
    reps_modelo: ['',
        [Validators.required,
        Validators.maxLength(12),
        Validators.pattern('[A-Z].*')]],
};

