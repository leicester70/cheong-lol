export type NumberRange<START extends number, END extends number, ARR extends unknown[] = [], ACC extends number = never> = ARR['length'] extends END
    ? ACC | START | END
    : NumberRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>
