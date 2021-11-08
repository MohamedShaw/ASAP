
export const convertNumbers2English = (str: string) => {
    return str?.replace(/[\u0660-\u0669]/g, (c) => `${c.charCodeAt(0) - 0x0660}`);
};