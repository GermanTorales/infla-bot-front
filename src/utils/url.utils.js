export const handleRedirect = externalUrl => {
  if (!externalUrl?.length) return;

  window.open(externalUrl, '_blank').focus();
};
