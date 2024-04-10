"use server";

/**
 * Uses Unsplash's API to get a random image in a certain category, defaulting to 'fitness'
 *
 * @param category Category of random img from unsplash
 * @param refreshIntervalSeconds How often to force nextjs to ignore cache
 * @returns url of a random image from unsplash
 */
const getRNDImg = async ({
  category,
  refreshIntervalSeconds,
}: {
  category: string | undefined;
  refreshIntervalSeconds: false | number;
}) => {
  category ??= "fitness";

  refreshIntervalSeconds ??= 0;

  const res = await fetch(
    `https://source.unsplash.com/random?${category ?? "fitness"}`,
    {
      next: { revalidate: 0 },
    },
  );
  const url = res.url;
  return url;
};

export default getRNDImg;
