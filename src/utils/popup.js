let settings = 'scrollbars=no,toolbar=no,location=no,titlebar=non,directories=no,status=no,menubar=no';

function getPopupOffset(width, height) {
  const wLeft = window.screenLeft ? window.screenLeft : window.screenX;
  const wTop = window.screenTop ? window.screenTop : window.screenY;

  let left = wLeft + (window.innerWidth / 2) - (width /  2),
      top = wTop + (window.innerHeight / 2) - (height / 2);

  return {
    top,
    left
  };
}

function getPopupDimensions() {
  const width = 452;
  const height = 633;

  let { top, left } = getPopupOffset(width, height);

  return `width=${width},height=${height},top=${top},left=${left}`;
}

export default function openPopup(url) {
  return (
    window.open(url, settings, getPopupDimensions())
  );
}
