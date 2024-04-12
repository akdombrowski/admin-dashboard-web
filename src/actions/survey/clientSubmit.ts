"use server";

import  DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export default async function ClientSubmit(formData: FormData) {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const data = [];
  const dataEntries = formData.entries();

  for (const [k, v] of dataEntries) {
    const kClean = purify.sanitize(v + "");
    const vClean = purify.sanitize(v + "");
    data.push({ [kClean]: vClean });
  }

  console.log("data:");
  console.log(data);
}
