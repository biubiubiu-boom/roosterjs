/**
 * Represents a combination of color key, light color and dark color, parsed from existing color value
 */
export interface ColorKeyAndValue {
    /**
     * Key of color, if found, otherwise undefined
     */
    key?: string;

    /**
     * Light mode color value
     */
    lightModeColor: string;

    /**
     * Dark mode color value, if found, otherwise undefined
     */
    darkModeColor?: string;
}

/**
 * A handler object for dark color, used for variable-based dark color solution
 */
export default interface DarkColorHandler {
    /**
     * Given a light mode color value and an optional dark mode color value, register this color
     * so that editor can handle it, then return the CSS color value for current color mode.
     * @param lightModeColor Light mode color value
     * @param isDarkMode Whether current color mode is dark mode
     * @param darkModeColor Optional dark mode color value. If not passed, we will calculate one.
     */
    registerColor(lightModeColor: string, isDarkMode: boolean, darkModeColor?: string): string;

    /**
     * Reset known color record, clean up registered color variables.
     */
    reset(): void;

    /**
     * Parse an existing color value, if it is in variable-based color format, extract color key,
     * light color and query related dark color if any
     * @param color The color string to parse
     */
    parseColorValue(color: string | null | undefined): ColorKeyAndValue;
}
