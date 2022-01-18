import getScreenshot from "./getScreenshot";

export async function phraseGenerator(body: string) {
  const getImagePath = async (params: CarbonParameters) => {
    return await getScreenshot(params);
  };

  const getImageUrl = await getImagePath({
    code: body,
    language: "json",
    theme: "Seti",
    output: `${__dirname}/../../public/images/`,
  });

  return { body, image: getImageUrl };
}
