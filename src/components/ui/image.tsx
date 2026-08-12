import NextImage, { type ImageProps as NextImageProps } from 'next/image';

const Image = (props: NextImageProps) => {
  return <NextImage {...props} />;
};

Image.displayName = 'Image';

export default Image;
