import { phraseGenerator } from "../src/index";

describe("Ingredient DAL", () => {
  describe("Generate Screenshot", () => {
    it("should create a screenshot and return an object whith body and image url", async () => {
      const text = "Adding a text to carbon to get its screenshot";

      const { body, image } = await phraseGenerator(
        text,
        "json",
        "Seti",
        `${__dirname}/../public/images/`,
      );
      expect(body).not.toBeNull();
      expect(image).not.toBeNull();
    });
  });
});
