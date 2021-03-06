export interface FontParameters {
    families: string[];
    style: string;
    weight: string;
}
export const CLASS_COLLAPSED: string;
export const CLASS_CONTROL: string;
export const CLASS_HIDDEN: string;
export const CLASS_SELECTABLE: string;
export const CLASS_UNSELECTABLE: string;
export const CLASS_UNSUPPORTED: string;
export function getFontParameters(font: string): FontParameters;
