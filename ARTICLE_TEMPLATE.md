# Article Template for Fit Mind. Strong Body. Website

## How to Add New Articles

Follow this template to add new articles that will be hidden by default and only show when clicked.

### 1. Add the Article Link in Nutrition Section

**Bulgarian Version (index.html):**
```html
<li><a href="#your-article-id">🥦 „Your Article Title in Bulgarian"</a></li>
```

**English Version (index-en.html):**
```html
<li><a href="#your-article-id">🥦 "Your Article Title in English"</a></li>
```

### 2. Add the Article Section

**Bulgarian Version (index.html):**
```html
<!-- Your Article Title -->
<section id="your-article-id" class="article-section">
    <div class="container">
        <div class="article-content">
            <div class="article-header">
                <h2>🥦 Your Article Title in Bulgarian</h2>
                <div class="article-meta">
                    <span><i class="fas fa-calendar"></i> Date in Bulgarian</span>
                    <span><i class="fas fa-clock"></i> X мин четене</span>
                </div>
            </div>
            
            <div class="article-body">
                <div class="article-image">
                    <img src="YOUR_IMAGE_URL" alt="Image description in Bulgarian" class="article-main-image">
                </div>
                
                <div class="article-text">
                    <p>Your article content in Bulgarian...</p>
                    <p>More paragraphs...</p>
                </div>
                
                <div class="article-cta">
                    <h4>Готов/а ли си да започнеш?</h4>
                    <p>📞 <a href="#contact">Свържи се с мен</a> за индивидуална консултация.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**English Version (index-en.html):**
```html
<!-- Your Article Title -->
<section id="your-article-id" class="article-section">
    <div class="container">
        <div class="article-content">
            <div class="article-header">
                <h2>🥦 Your Article Title in English</h2>
                <div class="article-meta">
                    <span><i class="fas fa-calendar"></i> Date in English</span>
                    <span><i class="fas fa-clock"></i> X min read</span>
                </div>
            </div>
            
            <div class="article-body">
                <div class="article-image">
                    <img src="YOUR_IMAGE_URL" alt="Image description in English" class="article-main-image">
                </div>
                
                <div class="article-text">
                    <p>Your article content in English...</p>
                    <p>More paragraphs...</p>
                </div>
                
                <div class="article-cta">
                    <h4>Ready to start?</h4>
                    <p>📞 <a href="#contact">Get in touch with me</a> for individual consultation.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 3. Important Guidelines

1. **Unique ID**: Each article must have a unique ID (e.g., `#your-article-id`)
2. **Same ID in Both Files**: Use the same ID in both Bulgarian and English versions
3. **Image URL**: Use high-quality images from Unsplash or similar sources
4. **Emoji**: Start article titles with relevant emojis (🥦, 🍽, 🧠, 🌱, etc.)
5. **Consistent Formatting**: Follow the same structure as the intuitive eating article

### 4. Example: Adding a New Article

Let's say you want to add an article about "Building Healthy Eating Habits":

**Step 1**: Add to Nutrition section
```html
<li><a href="#healthy-habits-article">🍽 „Как да изградим здравословни хранителни навици без крайности"</a></li>
```

**Step 2**: Add the full article section with ID `healthy-habits-article`

### 5. CSS and JavaScript

The CSS and JavaScript are already set up to handle any article with the class `article-section` and an ID. No additional code needed!

### 6. Image Suggestions

- **Nutrition articles**: Fresh vegetables, whole foods, healthy meals
- **Mental health**: Brain, meditation, peaceful scenes
- **Workouts**: Exercise equipment, people training
- **Lifestyle**: Nature, wellness, balance

### 7. File Locations

- **Bulgarian articles**: Add to `index.html`
- **English articles**: Add to `index-en.html`
- **Styles**: Already in `styles.css`
- **Functionality**: Already in `script.js`

---

## Quick Checklist for New Articles

- [ ] Add link in Nutrition section (both languages)
- [ ] Create article section with unique ID
- [ ] Add high-quality image
- [ ] Write engaging content
- [ ] Include call-to-action
- [ ] Test click functionality
- [ ] Check mobile responsiveness

This template ensures all your future articles will work exactly like the intuitive eating article - hidden by default, shown only when clicked! 🎯 