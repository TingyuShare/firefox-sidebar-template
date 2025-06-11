# gtrans-sidebar

gtrans-sidebar is a Firefox sidebar extension that displays Google Translate in the sidebar.

## Features

- **Automatic Redirect:** On the first load, the sidebar redirects to [Google Translate](https://translate.google.com) using session storage.
- **Firefox Sidebar Integration:** The extension uses Firefox's `sidebar_action` as defined in the [manifest.json](manifest.json).

## Installation

1. Clone this repository.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click on **Load Temporary Add-on...**.
4. Select the `manifest.json` file from the project directory.

## Repository Structure

- **`manifest.json`**: Extension configuration (defines the sidebar action and permissions).
- **`icons/favicon.png`**: Icon used by the extension.
- **`sidebar/panel.html`**: HTML file for the sidebar.
- **`sidebar/panel.js`**: JavaScript file handling the redirection logic.

## Usage

After installation, open the sidebar. The first time you load it, it will automatically redirect to [Google Translate](https://translate.google.com), thanks to the logic in [panel.js](sidebar/panel.js).

## Contributing

Feel free to fork this repository and submit pull requests for improvements or bug fixes.

## License

MIT License.# firefox-sidebar-template
