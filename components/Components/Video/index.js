export const Video = () => {
  let videoSrc = `https://www.youtube.com/embed/${""}?autoplay=${""}&rel=${""}&modestbranding=${""}"`;

  return (
    <iframe
      title="YouTube"
      type="text/html"
      width="100%"
      height="100%"
      src={videoSrc}
      frameBorder="0"
    />
  );
};
