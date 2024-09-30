/my-healthcare-project
│
├── /public                # Static files like images, fonts, etc.
│
├── /app                   # Application routes and layout structure
│   ├── /layout.js         # Root layout (applies to all pages)
│   ├── /page.js           # Homepage (mapped to '/')
│   ├── /about             # Folder for 'About' section
│   │   └── page.js        # About page (mapped to '/about')
│   ├── /appointments      # Folder for 'Appointments' related pages
│   │   ├── page.js        # Appointments overview (mapped to '/appointments')
│   │   ├── /[id]          # Dynamic route for individual appointment details
│   │   │   └── page.js    # Appointment details (e.g., '/appointments/123')
│   ├── /patients          # Folder for 'Patients' related pages
│   │   ├── page.js        # Patients overview (mapped to '/patients')
│   │   ├── /[id]          # Dynamic route for individual patient details
│   │   │   └── page.js    # Patient details (e.g., '/patients/123')
│   ├── /doctors           # Folder for 'Doctors' related pages
│   │   ├── page.js        # Doctors overview (mapped to '/doctors')
│   │   ├── /[id]          # Dynamic route for individual doctor profiles
│   │   │   └── page.js    # Doctor details (e.g., '/doctors/456')
│   ├── /admin             # Folder for 'Admin' related pages
│   │   └── /dashboard
│   │       └── page.js    # Admin dashboard (mapped to '/admin/dashboard')
│
├── /components            # Reusable components like navbar, footer, forms, etc.
│   ├── /navbar.js         # Navbar component
│   ├── /footer.js         # Footer component
│
├── /styles                # Global CSS or SCSS files
│   └── globals.css        # Global styles
│
├── package.json           # Dependencies and project metadata
│
├── next.config.js         # Next.js configuration file
│
└── README.md              # Project documentation
