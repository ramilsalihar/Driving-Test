# Project Styles Context

This document outlines the global styles, colors, typography, and utility classes used in the project. These values correspond to the theme configuration in our `src/index.css` file which uses Tailwind CSS v4.

## Typography

The project uses the following fonts:

*   **Sans Serif (Default UI)**: `Inter`, ui-sans-serif, system-ui, sans-serif
*   **Label/Accent**: `Public Sans`, sans-serif

*(Both imported from Google Fonts)*

## Color Palette

The color system is defined using CSS variables and mapped to the Tailwind theme.

### Primary Colors
*   **Primary**: `#001c47`
*   **Primary Container**: `#003170`
*   **Secondary**: `#b51a1e`
*   **Tertiary**: `#ffb957`

### Surface & Background Colors
*   **Surface**: `#f3faff`
*   **Surface Container Low**: `#e6f6ff`
*   **Surface Container High**: `#d5ecf8`
*   **Surface Container Highest**: `#cfe6f2`
*   **Surface Container Lowest**: `#ffffff`

### Text & Content Colors (On-Colors)
*   **On Surface**: `#071e27` (Default text color)
*   **On Surface Variant**: `#43474f`

### Outline Colors
*   **Outline**: `#737780`
*   **Outline Variant**: `#c3c6d1`

### Fixed & Dim Colors
*   **Primary Fixed**: `#d8e2ff`
*   **Primary Fixed Dim**: `#aec6ff`
*   **Tertiary Fixed**: `#ffddb5`
*   **Tertiary Fixed Dim**: `#ffb957`

### Utility Colors
*   **Error Container**: `#ffdad6`

## Custom Utility Classes

We have defined several custom utility classes in the CSS `@layer` and root level for reusable complex styles:

*   `.premium-gradient`: A linear gradient from top-left to bottom-right using Primary and Primary Container colors. Useful for premium headers or hero sections.
    *   `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)`
*   `.tunduk-banner`: A 4px high horizontal banner using a gradient from Secondary (`#b51a1e`) to Tertiary (`#ffb957`).
*   `.glass-effect`: Provides a frosted glass look using a semi-transparent white background (`bg-white/80`) and a backdrop blur effect (`backdrop-blur-xl`).

## Base Styles

The `body` element universally applies the following base styles:
*   Background: Surface color (`bg-surface` / `#f3faff`)
*   Text Color: On-Surface color (`text-on-surface` / `#071e27`)
*   Font Family: Sans (`font-sans` / Inter)
