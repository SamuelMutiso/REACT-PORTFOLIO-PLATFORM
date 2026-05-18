Agency.UX | Creative Portfolio Platform
Agency.UX is a modern, high-performance Single Page Application (SPA) designed for creative agencies to showcase their digital work. This platform allows for real-time project management, dynamic filtering, and a seamless user experience across all devices.

---

 Features
• Dynamic Project Showcase: Automatically fetches and displays a curated list of projects from a RESTful API.

• Client-Side Routing: Implements `react-router-dom` for instantaneous navigation between the landing page and detailed project views.

• Real-Time Search: A dynamic filtering system that allows users to find specific projects by title instantly.

• Project Management: A dedicated form to add new projects dynamically using `POST` requests.

• Premium UI/UX: Built with Tailwind CSS, featuring glassmorphism, custom gradients, and smooth interactions.

---

Technologies used
• Frontend: React.js (Vite)

• Styling: Tailwind CSS

• Routing: React Router 

• Backend: JSON Server 

---

How to install and run the program
Follow these steps to run the project locally:

1. Clone the Repository

```

git clone 

cd spa-react-portfolio

```

2. Install Dependencies

```

npm install

```


3.. start the app

Open a new terminal tab and run:

```

npm run dev

```

The application will be available at `http://localhost:5173`.

---

 Component Hierarchy
• `App`: Manages global state and routing.

  • `Navbar`: Global navigation.

  • `Hero`: High-impact landing section.

  • `ProjectForm`: Sidebar for adding new projects.

  • `SearchBar`: Controlled component for filtering.

  • `ProjectList`: Container that maps data into cards.

    • `ProjectCard`: Individual project displays with routing links.

  • `ProjectDetail`: Full-page view for individual project specifics.
