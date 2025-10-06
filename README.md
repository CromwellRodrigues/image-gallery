# 🖼️ Image Gallery

A beautiful, interactive image gallery built with HTML, CSS, and JavaScript featuring smooth animations and responsive design.

![Gallery Preview](images/preview.png)

## ✨ Features

- **Interactive Image Display**: Click thumbnails to view full-size images
- **Smooth Animations**: Powered by Animate.css with custom rubberBand effects
- **Responsive Design**: Works on desktop and mobile devices
- **Pure CSS Targeting**: Uses iframe targeting for seamless image switching
- **Elegant Styling**: Modern design with hover effects and transitions
- **Optimized Images**: Proper scaling with `object-fit: contain`

## 🚀 Live Demo

[View Live Demo]((https://image-gallery-showcase.vercel.app/)) 

## 📂 Project Structure

```
image-gallery/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with animations
├── script.js           # JavaScript for interactions
├── README.md           # Project documentation
└── images/
    ├── bird.jpg        # Sample images
    ├── bird.html       # Image wrapper for iframe
    ├── zebra.jpg
    ├── zebra.html
    ├── hornbill.jpg
    ├── hornbill.html
    ├── kingfisher.jpg
    ├── kingfisher.html
    └── preview.png     # Default preview image
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with iframe targeting
- **CSS3**: Flexbox layout, animations, and responsive design
- **JavaScript**: Interactive animations and DOM manipulation
- **Animate.css**: Pre-built animation library
- **Vercel**: Deployment platform

## 🎯 How It Works

1. **Thumbnail Navigation**: Click on any thumbnail image
2. **iframe Display**: Image loads in the main display area via HTML wrapper files
3. **Animation Effects**: Thumbnails animate with rubberBand effect on click
4. **Responsive Scaling**: Images scale to fit the display area while maintaining aspect ratio

## 🔧 Technical Implementation

### Image Display System
- Uses `<iframe>` with `target` attribute for CSS-only image switching
- Each image has a corresponding HTML wrapper file for proper scaling
- Implements `object-fit: contain` for complete image display

### Responsive Design
- Flexbox layout for centering and alignment
- Mobile-friendly viewport settings
- Scalable image dimensions

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/image-gallery.git
   cd image-gallery
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your web browser
   # Or use Live Server extension in VS Code
   ```

3. **Customize images**
   - Replace images in the `images/` folder
   - Update image references in `index.html`
   - Create corresponding HTML wrapper files for new images

## 📱 Adding New Images

1. **Add your image file** to the `images/` folder
2. **Create an HTML wrapper** (e.g., `images/newimage.html`):
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <style>
           body { 
               margin: 0; padding: 0; display: flex; 
               justify-content: center; align-items: center; 
               height: 100vh; background-color: #f0f0f0;
           }
           img { 
               max-width: 100%; max-height: 100%; 
               object-fit: contain; box-shadow: 0 4px 8px rgba(0,0,0,0.2);
           }
       </style>
   </head>
   <body>
       <img src="newimage.jpg" alt="New Image">
   </body>
   </html>
   ```
3. **Add thumbnail link** in `index.html`:
   ```html
   <a href="images/newimage.html" target="show" onclick="animatePic(this)">
       <img src="images/newimage.jpg" width="150"/>
   </a>
   ```

## 🎨 Customization

### Colors
Update CSS variables in `style.css`:
```css
body {
    background-color: #d2f5cc; /* Main background */
}

#page {
    background: #d1edd6; /* Container background */
}
```

### Animations
Change animation effects:
```javascript
// Replace 'animate__rubberBand' with other Animate.css classes:
// animate__bounce, animate__pulse, animate__wobble, etc.
```

### Layout
Modify dimensions in CSS:
```css
iframe {
    width: 720px;    /* Main display width */
    height: 400px;   /* Main display height */
}
```

## 🌐 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify
1. Drag and drop project folder to [Netlify](https://netlify.com)
2. Get instant live URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [Animate.css](https://animate.style/) for beautiful animations
- Sample images from [source/photographer]
- Inspiration from modern gallery designs

---

⭐ **Star this repository if you found it helpful!**
