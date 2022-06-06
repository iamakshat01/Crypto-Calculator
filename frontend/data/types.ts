
export interface dataType {
    [index: number]: {
    data_end: string,
    data_quote_end: string,
    data_quote_start: string,
    data_start: string,
    data_symbols_count: number,
    exchange_id: string,
    name: string,
    volume_1day_usd: number,
    volume_1hrs_usd: number,
    volume_1mth_usd: number,
    website: string,
    }
}

export type exchangeInput = {
    value:'string',
    label:'string'
}

