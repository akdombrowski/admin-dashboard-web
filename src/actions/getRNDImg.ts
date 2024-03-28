"use server";

/**
 * Uses Unsplash's API to get a random image in a certain category, defaulting to 'fitness'
 *
 * @param category Category of random img from unsplash
 * @param refreshIntervalSeconds How often to force nextjs to ignore cache
 * @returns url of a random image from unsplash
 */
const getRNDImg = async (
  category: string = "fitness",
  refreshIntervalSeconds: false | 0 | number = 10,
) => {
  const res = await fetch(
    `https://source.unsplash.com/random?${category ?? "fitness"}`,
    {
      next: { revalidate: refreshIntervalSeconds ?? 10 },
    },
  );
  const url = res.url;
  return url;
};

export default getRNDImg;
