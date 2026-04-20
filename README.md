# Premium PDF Viewer

A modern, responsive web application for viewing multiple PDF documents with a premium user interface.

## Features

- **Premium UI**: Clean, professional design with glassmorphism effects and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Real-time Search**: Filter PDFs by title instantly
- **Modal PDF Viewer**: View PDFs in a popup modal with iframe embedding
- **PDF Controls**: Download, open in new tab, and close options
- **Loading Animation**: Smooth loading spinner while PDFs load
- **Hover Effects**: Interactive card animations and transitions

## Project Structure

```
project-root/
├── index.html          # Main HTML file
├── style.css           # CSS styles with responsive design
├── script.js           # JavaScript functionality
├── assets/
│   ├── pdf/            # PDF files directory
│   │   ├── file1.pdf
│   │   ├── file2.pdf
│   │   └── file3.pdf
│   └── icons/          # Icons directory (optional)
└── README.md           # This file
```

## How to Run Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. For a better development experience, use a local server:
   - **VS Code**: Install "Live Server" extension and right-click `index.html` > "Open with Live Server"
   - **Python**: Run `python -m http.server` in the project directory and visit `http://localhost:8000`
   - **Node.js**: Install `http-server` globally and run `http-server` in the project directory

## How to Add New PDFs

1. Place your PDF files in the `assets/pdf/` directory
2. Open `script.js`
3. Add new entries to the `pdfs` array at the top of the file:

```javascript
const pdfs = [
    // ... existing PDFs
    {
        title: "Your New PDF Title",
        path: "assets/pdf/your-new-file.pdf"
    }
];
```

4. Save the file and refresh your browser

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose your main branch
4. Click Save - your site will be available at `https://yourusername.github.io/repository-name/`

### Netlify

1. Sign up for a Netlify account at https://netlify.com
2. Drag and drop your project folder onto the Netlify dashboard
3. Your site will be deployed automatically with a random URL
4. You can customize the domain in the site settings

### Render

1. Sign up for a Render account at https://render.com
2. Create a new "Static Site"
3. Connect your GitHub repository or upload the files manually
4. Set the build command to `echo "No build step required"`
5. Set the publish directory to `/` (root)
6. Click "Create Static Site" - your site will be deployed

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Google Fonts**: Inter font family for modern typography

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is open source and available under the MIT License.