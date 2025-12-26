declare module "dom-to-image-more" {
  export interface Options {
    /**
     * A function taking DOM node as argument. Should return true if passed node should be included in the output. Excluding node means excluding it's children as well.
     */
    filter?: (node: Node) => boolean;

    /**
     * A string value for the background color, any valid CSS color value.
     */
    bgcolor?: string;

    /**
     * Width to be applied to node before rendering.
     */
    width?: number;

    /**
     * Height to be applied to node before rendering.
     */
    height?: number;

    /**
     * An object whose properties to be copied to node's style before rendering. You might want to check this reference for JavaScript names of CSS properties.
     */
    style?: Partial<CSSStyleDeclaration>;

    /**
     * A number between 0 and 1 indicating image quality (e.g. 0.92 => 92%) of the JPEG image.
     */
    quality?: number;

    /**
     * Set to true to append the current time as a query string to URL requests to enable cache busting.
     */
    cacheBust?: boolean;

    /**
     * A data URL for a placeholder image that will be used when fetching an image fails. Defaults to an empty string and will render empty areas for failed images.
     */
    imagePlaceholder?: string;

    /**
     * The pixel ratio of the captured image. Default use the actual pixel ratio of the device. Set 1 to use the nominal resolution.
     */
    scale?: number;
  }

  /**
   * Converts a DOM node to a PNG image in the form of a data URL.
   * @param node The DOM node to convert
   * @param options Optional configuration
   * @returns A Promise that resolves to a data URL
   */
  export function toPng(node: Node, options?: Options): Promise<string>;

  /**
   * Converts a DOM node to a JPEG image in the form of a data URL.
   * @param node The DOM node to convert
   * @param options Optional configuration
   * @returns A Promise that resolves to a data URL
   */
  export function toJpeg(node: Node, options?: Options): Promise<string>;

  /**
   * Converts a DOM node to an SVG image in the form of a data URL.
   * @param node The DOM node to convert
   * @param options Optional configuration
   * @returns A Promise that resolves to a data URL
   */
  export function toSvg(node: Node, options?: Options): Promise<string>;

  /**
   * Converts a DOM node to a Blob object.
   * @param node The DOM node to convert
   * @param options Optional configuration
   * @returns A Promise that resolves to a Blob
   */
  export function toBlob(node: Node, options?: Options): Promise<Blob>;

  /**
   * Converts a DOM node to a canvas element.
   * @param node The DOM node to convert
   * @param options Optional configuration
   * @returns A Promise that resolves to an HTMLCanvasElement
   */
  export function toCanvas(
    node: Node,
    options?: Options
  ): Promise<HTMLCanvasElement>;

  /**
   * Converts a DOM node to a PixelData object containing pixel data.
   * @param node The DOM node to convert
   * @param options Optional configuration
   * @returns A Promise that resolves to pixel data as a Uint8ClampedArray
   */
  export function toPixelData(
    node: Node,
    options?: Options
  ): Promise<Uint8ClampedArray>;
}
