# Keep Notes App 📝

A full stack Google Keep-style notes application built with Django REST Framework and React.js.

## Features

- Create notes with title and content
- View all notes in a grid layout
- Edit existing notes
- Delete notes
- REST API backend
- Responsive UI

---

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- django-cors-headers
- SQLite

### Frontend
- React.js
- JavaScript (Fetch API)
- CSS

---

## Project Structure

```
keep-notes-app/
├── core/                   # Django project settings
│   ├── settings.py
│   └── urls.py
├── notes/                  # Notes app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   └── urls.py
├── notes-frontend/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteForm.jsx
│   │   │   └── NoteList.jsx
│   │   ├── App.js
│   │   └── App.css
│   └── public/
├── manage.py
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes/` | Get all notes |
| POST | `/api/notes/` | Create a new note |
| GET | `/api/notes/<id>/` | Get a single note |
| PUT | `/api/notes/<id>/` | Update a note |
| DELETE | `/api/notes/<id>/` | Delete a note |

---

## Getting Started

### Prerequisites
- Python 3.x
- Node.js
- npm

---

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/Ajinsha-KS/keep-notes-app.git
cd keep-notes-app

# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start server
python manage.py runserver
```

Backend runs at `http://127.0.0.1:8000`

---

### Frontend Setup

```bash
# Go to frontend folder
cd notes-frontend

# Install dependencies
npm install

# Start React app
npm start
```

Frontend runs at `http://localhost:3000`

---


## Author

**Ajinsha K S**  
[GitHub](https://github.com/Ajinsha-KS)
[LinkedIn](https://www.linkedin.com/in/ajinshaks/)

