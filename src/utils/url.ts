export const refreshPage = () => window.location.reload();

export const openLocation = (url: string, target?: string) => window.open(url, target || '_self');
