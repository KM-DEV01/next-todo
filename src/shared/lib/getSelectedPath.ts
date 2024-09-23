export const getSelectedPath = (path: string) => {
  const regEx = /(?<!\?.\+)\/[\w-]+(?=[\/\r\n?]|$)/;
  const basePath = path?.match(regEx);
  return basePath ? basePath[0] : path;
};
