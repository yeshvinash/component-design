# 📦 Components Design

A reusable Component Design System built with React, TypeScript, ShadCN/Radix UI, and Storybook.
This project focuses on building scalable, accessible, and themeable UI components such as buttons, badges, accordions, and more, enabling Component-Driven Development (CDD) for modern frontend applications.

By leveraging Storybook, each component is developed, tested, and documented in isolation, ensuring maintainability and faster collaboration across teams.

## ✨ Features

- 🎨 **Reusable UI Components**: Built with ShadCN/Radix UI and CVA (class-variance-authority) for consistent styling and extensibility.
- ⚡ **TypeScript Support**: Strongly typed components with props validation for improved developer experience.
- 🧩 **Core Components**: Includes Button, Badge, Accordion, and extensible foundation for adding new components.
- 📖 **Storybook Integration**: Dedicated environment for previewing, testing, and documenting components.
- ♿ **Accessibility First**: Components follow ARIA guidelines and Radix accessibility standards.
- 🚀 **Scalable & Themeable**: Components can be easily extended or styled for different projects.

## 🛠️ Tech Stack

- **React.js**: Frontend library for building UI components.
- **TypeScript**: For type safety and better maintainability.
- **Shadcn / Radix UI**: Provides accessible, unstyled primitives for custom components.
- **Storybook**: For developing, testing, and documenting UI components in isolation.
- **class-variance-authority (CVA)**: Utility for managing component variants and styling.

## 📁 Project Structure

```
components-design/
│── src/
│   ├── components/      # Reusable UI components (Button, Badge, Accordion, etc.)
│   ├── stories/         # Storybook stories for each component
│   ├── utils/           # Helper utilities and CVA config
│── .storybook/          # Storybook configuration files
│── package.json
│── tsconfig.json
│── README.md
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/components-design.git
   cd components-design
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run Storybook**

   ```bash
   npm run storybook
   ```

   This will start Storybook at http://localhost:6006, where you can interact with and test all components in isolation.

## 📖 Storybook Usage

Storybook provides:

- ✅ Interactive Playground for components.
- ✅ Documentation (Props tables, Controls, Knobs).
- ✅ Accessibility Testing.
- ✅ Visual Testing & Snapshots.

## 🔮 Future Enhancements

- Theming support (dark mode, brand themes).
- Integration with testing frameworks (Jest + React Testing Library).
- Publish components as an NPM package for reuse across projects.

## 👨‍💻 Author

- Developed with ❤️ using React, TypeScript, and Shadcn.
