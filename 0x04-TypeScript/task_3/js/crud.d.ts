import {RowElement, RowID} from './interface'

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;