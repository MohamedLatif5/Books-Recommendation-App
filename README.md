# 📚 Books Recommendation App

A modern, responsive web application built with React that helps users discover and explore books through an intuitive interface. The app provides personalized book recommendations, search functionality, and detailed book information.

## ✨ Features

- **📖 Book Discovery**: Browse through a vast collection of books
- **🔍 Advanced Search**: Search books by title, author, or keywords
- **🏷️ Smart Filtering**: Filter books by language, relevance, and alphabetical order
- **📄 Pagination**: Navigate through large collections with ease
- **📱 Responsive Design**: Optimized for all device sizes
- **👤 User Authentication**: Login and registration system
- **⭐ Book Details**: Detailed view for each book with cover, description, and metadata
- **🎯 Recommendations**: Personalized book suggestions
- **📚 Categories**: Browse books by different categories

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 18.3.1
- **Routing**: React Router DOM 6.26.2
- **Styling**: Bootstrap 5.3.3 + Custom CSS
- **HTTP Client**: Axios 1.7.7
- **UI Components**: React Bootstrap 2.10.5
- **Carousel**: Swiper.js 11.1.14
- **Form Validation**: Joi 17.13.3
- **Build Tool**: React Scripts 5.0.1

## 📁 Project Structure

```text
src/
├── Component/           # Reusable UI components
│   ├── AuthorCard.jsx
│   ├── BookCard.jsx
│   ├── Footer/
│   ├── Navbar/
│   └── Loading/
├── pages/              # Application pages
│   ├── Home/
│   ├── Books/
│   ├── BookDetails/
│   ├── Authors/
│   ├── Login/
│   ├── Register/
│   └── RecommendedBooks/
├── contexts/           # React Context providers
│   ├── RecentApiContext.js
│   └── FixDetailsPageId.js
└── App.jsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MohamedLatif5/Books-Recommendation-App.git
   cd Books-Recommendation-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌐 API Integration

The application integrates with:

- **Google Books API** - For fetching book data, search, and filtering
- **DBooks API** - For additional book recommendations and metadata

## 📱 Pages Overview

- **Home**: Landing page with featured books and search functionality
- **Books**: Complete book catalog with filtering and pagination
- **Book Details**: Detailed view of individual books
- **Authors**: Browse and search authors
- **Recommendations**: Personalized book suggestions
- **Login/Register**: User authentication system

## 🎨 UI/UX Features

- Clean and modern interface design
- Intuitive navigation with responsive navbar
- Loading states for better user experience
- Error handling and user feedback
- Mobile-first responsive design
- Accessible components with proper ARIA labels

## 🔧 Configuration

The app uses environment-friendly configuration. You can customize:

- API endpoints
- Pagination settings
- UI themes
- Language preferences

## 🙏 Acknowledgments

- Google Books API for providing comprehensive book data
- React community for excellent documentation and support
- Bootstrap team for the responsive framework
- All contributors who help improve this project

---
