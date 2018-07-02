import { Validators } from '@angular/forms';

export const telFormGroup = {
    tel_number: ['',
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern('[\(]?[0-9]{2}(( )|([\)])|()|(-))(([0-9]{4})|([0-9]{5}))(( )|(-)|)([0-9]{4})')]],

    tel_resp: ['',
        [Validators.required,
        Validators.maxLength(1),
        Validators.pattern('[1-2]')]],

};
