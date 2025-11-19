export const UCR_COL_NAMES = {
    id: 'ID',
    ori: 'ORI',
    state_name: 'State',
    data_year: 'Year',
    actual_count: 'Actual Count',
    unfounded_count: 'Unfounded Count',
} as const;


export interface UcrRowDataType {
    id: number;
    data_year: number;
    ori: string;
    state_name: string;
    state_abbr: string;
    actual_count: number;
    unfounded_count: number;
    cleared_count: number;
    juvenile_cleared_count: number;
}

type SortColumn = Pick<UcrRowDataType, 'data_year' | 'ori'>

interface QuerySummary {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    sort: SortColumn[];
    order: 'asc' | 'desc';
    filters: Record<string, string[]>;
}

export interface UcrResponseType {
    data: UcrRowDataType []
    meta: QuerySummary
}