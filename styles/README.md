# Modular CSS Structure

This directory contains a modular CSS structure that breaks down the previously monolithic CSS file into smaller, more maintainable components.

## Directory Structure

```
styles/
├── variables.css              # CSS variables for colors, spacing, typography, etc.
├── main.css                   # Main file that imports all modules
├── base/                      # Base styles
│   ├── reset.css              # Basic resets and element styles
│   ├── typography.css         # Typography styles
│   ├── layout.css             # Layout and container styles
│   ├── utilities.css          # Utility classes
│   └── animations.css         # Animation keyframes
├── components/                # Reusable UI components
│   ├── buttons.css            # Button styles
│   ├── forms.css              # Form element styles
│   ├── toggles.css            # Toggle switch styles
│   ├── dropdowns.css          # Dropdown and select styles
│   ├── modals.css             # Modal dialog styles
│   ├── cards.css              # Card and block styles
│   └── search.css             # Search input and suggestion styles
└── features/                  # Feature-specific styles
    ├── characters.css         # Character-specific styles
    ├── actions.css            # Action and highlighting styles
    ├── gender-controls.css    # Gender selection controls
    └── output.css             # Output container styles
```

## Usage

To use this modular CSS structure, simply include the `main.css` file in your HTML:

```html
<link rel="stylesheet" href="styles/main.css">
```

The `main.css` file imports all the necessary modules in the correct order.

## Modularization Strategy

The CSS has been modularized based on the following principles:

1. **Separation of Concerns**: Each file has a clear responsibility and focuses on a specific aspect of the UI.
2. **Progressive Enhancement**: Base styles come first, followed by components, and then feature-specific styles.
3. **Maintainability**: Related styles are grouped together, making it easier to find and modify specific parts of the UI.
4. **Reusability**: Common components are separated into their own files, making them easier to reuse across the application.

## Variables

All CSS variables are defined in `variables.css` and are organized into logical groups:

- Color palette
- Spacing and sizing
- Typography
- Borders and radiuses
- Elevation and shadows
- Transitions and animations
- Z-index layers

## Adding New Styles

When adding new styles:

1. Identify which module the styles belong to
2. Add the styles to the appropriate file
3. If creating a new component or feature, create a new file and import it in `main.css`

## Maintenance

To maintain this modular structure:

1. Keep related styles together in the same file
2. Use CSS variables for consistency
3. Follow the existing naming conventions
4. Document any complex or non-obvious styles with comments 