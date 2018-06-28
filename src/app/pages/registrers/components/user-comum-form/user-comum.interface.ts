import { Validators } from '@angular/forms';

export const UserComumFormGroup = {

    user_login: ['',
        [Validators.required,
        Validators.maxLength(15),
        Validators.pattern('[a-z]{3,}')]],
    user_psw: ['',
        [Validators.required,
        Validators.maxLength(30),
        Validators.pattern('.*')]],


};

