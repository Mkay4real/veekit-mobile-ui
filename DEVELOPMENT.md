# Veekit Mobile UI - Development Guide

## Overview

This is a React Native UI component library built with TypeScript, NativeWind (Tailwind CSS for React Native), and Reanimated.

## Project Structure

```
veekit-mobile-ui/
├── src/
│   ├── components/
│   │   ├── ui/              # UI components (Button, Text, Avatar, Input, etc.)
│   │   │   ├── __tests__/   # Component tests
│   │   │   └── *.stories.tsx # Storybook stories
│   │   ├── primitives/      # Base primitive components
│   │   └── review/          # Components under review
│   ├── lib/                 # Utility functions and helpers
│   ├── icons/               # Icon components
│   ├── images/              # SVG images
│   ├── types/               # TypeScript type definitions
│   └── index.tsx            # Main export file
├── example/                 # Example React Native app
├── .storybook/             # Storybook configuration
└── lib/                    # Build output (generated)
```

## Available Components

### Core UI Components

1. **Button** - Various button variants (solid, outline, ghost, tonal) with different sizes
2. **Text** - Styled text component with color and size variants
3. **Avatar** - User avatar component with initials
4. **Input** - Text input with support for secure entry and validation
5. **SearchInput** - Input component with search functionality
6. **CodeInput** - OTP/PIN code input component
7. **Icon** - Icon component supporting SVG, IonIcons, and FontAwesome
8. **Dropdown** - Dropdown select component
9. **DropdownModal** - Modal-based dropdown component
10. **ListItem** - List item component with leading/trailing icons
11. **FileInput** - File picker component
12. **KeyPad** - Numeric keypad component
13. **Tabs** - Tab navigation component
14. **PinInputModal** - Modal for PIN input
15. **ModalCard** - Generic modal card
16. **GenericModal** - Base modal component
17. **FormInputContainer** - Input container with label and error handling

## Development Setup

### Prerequisites

- Node.js >= 18
- Yarn 3.6.1 (included via packageManager)
- React Native development environment

### Installation

```bash
# Install dependencies
yarn install

# Build the library
yarn prepare
```

### Scripts

- `yarn typecheck` - Run TypeScript type checking
- `yarn lint` - Run ESLint
- `yarn test` - Run Jest tests
- `yarn prepare` - Build the library with react-native-builder-bob
- `yarn clean` - Clean build artifacts
- `yarn example` - Run commands in the example app workspace

## Building the Library

The library uses `react-native-builder-bob` for building. It generates three output targets:

1. **CommonJS** (`lib/commonjs/`) - For older bundlers
2. **ES Modules** (`lib/module/`) - For modern bundlers
3. **TypeScript definitions** (`lib/typescript/`) - Type definitions

To build:

```bash
yarn prepare
```

The build process:
- Compiles TypeScript to JavaScript using Babel
- Generates type definitions using tsc
- Outputs to the `lib/` directory
- Excludes test files and stories from the build

## Storybook

Storybook is configured for on-device component development and testing.

### Storybook Structure

```
.storybook/
├── main.ts              # Storybook configuration
├── Storybook.tsx        # Storybook UI root component
└── storybook.requires.ts # Story loader configuration
```

### Available Stories

Stories are located alongside components with the `.stories.tsx` extension:

- `src/components/ui/button.stories.tsx`
- `src/components/ui/text.stories.tsx`
- `src/components/ui/avatar.stories.tsx`
- `src/components/ui/input.stories.tsx`
- `src/components/ui/icon.stories.tsx`

### Running Storybook

To use Storybook in the example app, import the Storybook component:

```typescript
import StorybookUIRoot from '../../.storybook/Storybook';

export default function App() {
  return <StorybookUIRoot />;
}
```

## Testing

### Test Structure

Tests are written using:
- `@testing-library/react-native` - For component testing
- `jest` - Test runner

Test files are located in `__tests__` directories:
- `src/components/ui/__tests__/button.test.tsx`
- `src/components/ui/__tests__/text.test.tsx`
- `src/components/ui/__tests__/avatar.test.tsx`
- `src/components/ui/__tests__/input.test.tsx`
- `src/components/ui/__tests__/icon.test.tsx`

### Running Tests

```bash
yarn test
```

Note: Jest configuration may need additional setup for the React Native environment. Tests are written and ready but may require babel/jest configuration refinement.

## Example App

The `example/` directory contains a React Native app that demonstrates all components.

### Running the Example App

```bash
# Install example dependencies (done automatically with yarn install at root)

# Run on iOS
yarn example ios

# Run on Android
yarn example android

# Start Metro bundler
yarn example start
```

### Example App Features

The example app in `example/src/App.tsx` demonstrates:
- All button variants and sizes
- Text components with different styles
- Avatar components
- Input fields (regular, secure, search)
- Code input for OTP
- PIN input modal
- Dropdown selection
- Icons (SVG, IonIcons, FontAwesome)
- List items
- File input
- KeyPad
- Tabs

## Styling

The library uses:
- **NativeWind** - Tailwind CSS for React Native
- **Tailwind Variants** - For component variants
- **twrnc** - Tailwind in React Native

### Tailwind Configuration

See `tailwind.config.js` for the complete Tailwind setup, including:
- Custom colors based on Radix UI colors
- Custom spacing and sizing scales
- Animation utilities
- Typography settings

### Global Styles

Global CSS is defined in `global.css` and includes Tailwind directives.

## TypeScript Configuration

### Main Config (`tsconfig.json`)
- Used for development and IDE support
- Includes all source files
- Strict mode enabled

### Build Config (`tsconfig.build.json`)
- Used for building the library
- Extends main config
- Excludes:
  - Example app
  - Build output
  - Tests
  - Stories
  - Storybook config

## Dependencies

### Peer Dependencies

The following must be installed in projects using this library:

- `react`
- `react-native`
- `nativewind` ^4.1.21
- `tailwindcss` ^3.4.14
- `react-native-reanimated` ^3.16.1
- `react-native-svg`
- `react-native-document-picker`

### Key Dependencies

- `@radix-ui/colors` - Color system
- `react-native-modal` - Modal components
- `react-native-safe-area-context` - Safe area handling
- `@react-native-vector-icons/*` - Icon libraries
- `clsx` & `tailwind-merge` - Conditional styling

## Build Configuration

### Babel (`babel.config.js`)

The Babel config is environment-aware:

**Production/Build:**
- Uses `react-native-builder-bob/babel-preset`
- Includes NativeWind and Reanimated plugins

**Test Environment:**
- Uses standard Babel presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react)
- Simplified for Jest compatibility

### React Native Builder Bob

Configuration in `package.json`:

```json
{
  "react-native-builder-bob": {
    "source": "src",
    "output": "lib",
    "targets": [
      ["commonjs", { "esm": true }],
      ["module", { "esm": true }],
      ["typescript", { "project": "tsconfig.build.json", "esm": true }]
    ]
  }
}
```

## Publishing

Before publishing:

1. Ensure all tests pass
2. Build the library: `yarn prepare`
3. Update version in `package.json`
4. Create a release: `yarn release`

The package is configured to publish to npm registry.

## Contributing

1. Create a feature branch
2. Make your changes
3. Add tests for new components
4. Add Storybook stories for new components
5. Ensure the build passes: `yarn prepare`
6. Run linting: `yarn lint`
7. Submit a pull request

## Common Issues

### Build Errors

If you encounter build errors:

```bash
# Clean build artifacts
yarn clean

# Reinstall dependencies
rm -rf node_modules
yarn install

# Rebuild
yarn prepare
```

### TypeScript Errors

Ensure your IDE is using the workspace TypeScript version and that `tsconfig.json` is properly configured.

### Babel/Jest Configuration

If tests fail due to Babel issues, check that:
- `babel.config.js` is returning the correct config based on `api.env('test')`
- All necessary Babel presets are installed
- Jest's `transformIgnorePatterns` includes necessary packages

## License

MIT

## Authors

Mukhtar Oyelayo <mukhtaroyelayo@gmail.com>
