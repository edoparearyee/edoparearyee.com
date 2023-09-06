const setBackgroundScroll = (enabled = true) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = enabled ? '' : 'hidden';
};

export default setBackgroundScroll;
