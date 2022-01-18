import getScreenshot from "./getScreenshot";

export async function phraseGenerator(
  body: string,
  language: string,
  theme: Theme,
  output: string
) {
  const getImagePath = async (params: CarbonParameters) => {
    return await getScreenshot(params);
  };

  const getImageUrl = await getImagePath({
    code: body,
    language,
    theme,
    output,
  });

  return { body, image: getImageUrl };
}
