// Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg

export default function cloudinaryLoader({
  src,
  width,
  quality = 'auto',
}: {
  src: string;
  width: string;
  quality: string;
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality}`];
  return `https://res.cloudinary.com/edoparearyee/image/upload/${params.join(
    ',',
  )}${src}`;
}
