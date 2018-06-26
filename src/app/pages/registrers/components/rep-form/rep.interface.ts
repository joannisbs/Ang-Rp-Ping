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
    Validators.maxLength(12)]],

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
    [Validators.required]],
 };
