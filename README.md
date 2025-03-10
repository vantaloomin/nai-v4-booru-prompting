# NovelAI V4 Booru Prompt Builder

A modern web application for creating rich, detailed Stable Diffusion prompts using characters from various media. Specifically designed for NovelAI v4 (Curated) with comprehensive support for IP characters.

![Version](https://img.shields.io/badge/version-1.6.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎨 Overview

The Booru Prompt Builder is a sleek, modern web application that streamlines the entire process of crafting rich, detailed prompts for AI-generated images. Whether you're an established digital artist seeking efficiency or a newcomer aiming to explore endless AI art possibilities, this tool helps you quickly generate high-quality prompts for NovelAI or Stable Diffusion.

## ✨ Features

### Advanced Character Management
- **Multiple Characters**: Add up to four characters with detailed customization options
- **Search & Filter**: Powerful search with filters to quickly find characters by name, media type, or other attributes
- **Gender Toggles**: Easily switch character gender with dedicated toggle controls
- **Age-Up Option**: Option to create mature versions of characters with appropriate body modifications
- **NSFW Toggle**: Dedicated toggle for enabling/disabling NSFW content generation
- **Enhancer Dropdowns**: Apply special visual enhancers to characters to improve image quality
- **Custom Tags**: Add your own custom tags with auto-complete support from a comprehensive tag database
- **Drag & Drop Reordering**: Intuitively arrange characters with simple drag handles
- **Cross-Character Tag Deduplication**: Automatically remove duplicate tags across characters for cleaner prompts
- **Breast Size Control**: Enhanced slider with OFF option for more granular character customization
- **Improved Character Count Management**: Better handling of character limits across standard and custom character modules

### Character Randomization
- **Random Character Generation**: Quickly add random characters with filtering options:
  - Random from all available characters
  - Random from video game characters only
  - Random from anime/media characters only
- **Customizable Random Count**: Select the number of random characters to generate at once

### Artist & Scene Selection
- **Artist Cards**: Add artist styles to influence the aesthetic of your generated image
- **Scene Cards**: Add detailed environments with rich tag support
- **Custom Scenes**: Create completely custom environments with tag auto-complete
- **Drag & Drop Controls**: Easily reorder artists and scenes

### Prompt Generation & Export
- **Syntax Highlighting**: Color-coded prompt output for easier reading and editing
- **Mode Switching**: Toggle between NovelAI and Stable Diffusion syntax formats
- **One-Click Copy**: Instantly copy the generated prompt to your clipboard
- **Editable Output**: Directly edit the final prompt before copying
- **Full Reset**: Clear all selections and start fresh with a single click
- **Comprehensive State Management**: Improved toggle state preservation when resetting the page

### Full Random Prompt Generation
- **Complete Randomization**: Generate an entire prompt with random characters, artists and scenes
- **Customizable Options**: Control the number of random characters and optionally exclude artists or scenes

### Modern User Interface
- **Collapsible Sections**: Expand or collapse character cards for better workspace management
- **Responsive Design**: Well-organized layout that adapts to different screen sizes
- **Visual Feedback**: Clear visual cues for selections and interactions
- **Floating Controls**: Quick access to key functions with persistent floating action buttons
- **Enhanced Iconography**: Integration of Boxicons for improved UI elements and interaction
- **Dynamic CSV-Based Loading**: Improved loading of tags and actions for better performance and extensibility
- **Modular Component Design**: Refactored UI components for better maintainability and visibility

## 🚀 Getting Started

### Local Setup

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/nai-v4-booru-prompting.git
   cd nai-v4-booru-prompting
   ```

2. **Open in a web browser**:
   - Simply open `index.html` in your preferred browser.
   - No build step or package installation required!

### Using the Application

1. **Add Characters**: 
   - Click "Add Character" to add a new character block
   - Use the search function to find characters by name or series
   - Filter results by type (game, anime, etc.)
   - Customize with gender toggles and enhancers

2. **Customize with Tags**:
   - Add custom tags to characters with auto-complete support
   - Use tag pills for quick management of custom additions

3. **Add Artists and Scenes**:
   - Click "Add Artist" to include artistic styles
   - Click "Add Scene" to add environment settings
   - Create custom scenes with tag auto-complete support

4. **Generate & Copy**:
   - Click "Generate Prompt" to compile everything
   - Use "Copy Prompt" to copy to clipboard
   - Toggle coloring for syntax highlighting
   - Switch between NovelAI and Stable Diffusion modes

## 🔮 Upcoming Features

### Character Relationship Templates
Pre-defined character interactions for common scenarios like fighting, romance, etc.

### Expanded Tag Database
Growing library of tags for more precise image generation.

### Advanced Scene Builder
More detailed scene customization with layered environments.

## 🛠️ Technologies Used

- **Vanilla JavaScript**: Core functionality built with pure JavaScript.
- **Fuse.js**: Fast fuzzy-search capabilities for character selection.
- **Sortable.js**: Smooth drag-and-drop functionality for characters and cards.
- **Modern CSS**: Custom styling with CSS variables for consistent theming.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/nai-v4-booru-prompting/issues).

---

*Built with ❤️ for the AI art community*
