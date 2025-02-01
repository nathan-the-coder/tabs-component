# Simple Tabs Component

A lightweight and accessible tabs component built using Vanilla JavaScript, HTML, and CSS. This project demonstrates clean code practices and provides a reusable component for adding tabbed interfaces to web projects.  Uses `live-server` for local development.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [Roadmap.sh Project](#roadmapsh-project)
- [License](#license)

## Features

*   **Lightweight:** Minimal footprint, no external dependencies.
*   **Accessible:** Designed with accessibility in mind, including ARIA attributes for screen readers.
*   **Customizable:** Easily style the tabs to match your project's design.
*   **Vanilla JavaScript:** No frameworks or libraries required.
*   **Simple Development:** Uses `live-server` for easy local development.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git](https://www.google.com/search?q=https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git) *(Replace with your repository details)*
    cd simple-tabs-component
    ```

2.  **Install `live-server` (if you don't have it already):**
    ```bash
    npm install -g live-server  *(or yarn global add live-server, pnpm add -g live-server, bun add -g live-server)*
    ```

## Usage

1.  **Include the CSS and JavaScript files in your HTML:**

    ```html
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    ```

2.  **Add the HTML structure for the tabs component:**

    ```html
    <div class="tabs-container">
      <ul class="tabs-nav">
        <li class="tab-link active" data-tab="tab1">Tab 1</li>
        <li class="tab-link" data-tab="tab2">Tab 2</li>
        <li class="tab-link" data-tab="tab3">Tab 3</li>
      </ul>
      <div class="tabs-content">
        <div id="tab1" class="tab-pane active">Content for Tab 1</div>
        <div id="tab2" class="tab-pane">Content for Tab 2</div>
        <div id="tab3" class="tab-pane">Content for Tab 3</div>
      </div>
    </div>
    ```

3.  **Customize the content within the tab panes as needed.**

4.  **Start the development server:**
    ```bash
    live-server
    ```
    This will open your project in a web browser.

## Project Structure
simple-tabs-component/
├── index.html        // Main HTML file
├── script.js      // JavaScript logic
├── style.css    // CSS styling
└── README.md         // This file

## Customization

You can customize the appearance of the tabs by modifying the CSS in `style.css`. The provided CSS uses classes like `tabs-container`, `tabs-nav`, `tab-link`, and `tab-pane` for styling.

## Accessibility

This component includes ARIA attributes (`role`, `aria-controls`, `aria-selected`) to improve accessibility for users with disabilities. Ensure your tab content is also accessible.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Roadmap.sh Project

This project is part of my learning journey on roadmap.sh: [Create a Tab Functionality with HTML, CSS and JavaScript](https://roadmap.sh/projects/simple-tabs)

## License

[MIT LICENSE](./LICENSE)

