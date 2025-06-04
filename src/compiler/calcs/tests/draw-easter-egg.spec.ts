import { describe, it, expect } from "vitest";
import { drawEasterEgg } from "../draw-easter-egg";

describe("drawEasterEgg", () => {
  it("should draw the easter egg", () => {
    const result = drawEasterEgg();
    expect(result).toBeDefined();
  });
});
