export const setThumbUrl = (url: string, width: number, height: number): string => {
  const newUrl = url;
  const withReplacedWidth = newUrl.replace("%{width}", `${width}`);
  const withReplacedWidthAndHeight = withReplacedWidth.replace("%{height}", `${height}`);
  return withReplacedWidthAndHeight;
};
