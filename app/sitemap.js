export default async function sitemap() {
  return [
    {
      url: `${process.env.VERCEL_URL}`,
    },
  ];
}
