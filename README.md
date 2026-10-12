# MERAM Healthcare

A full-stack healthcare management web application for managing doctor records. The **backend** is a RESTful API built with Django and Django REST Framework, and the **frontend** is built with React, TypeScript, and Vite.

## Features

- View a list of all doctors
- Add a new doctor
- View a doctor's details
- Update doctor information
- Delete a doctor
- REST API with proper status codes and validation errors

## Tech Stack

**Frontend**
- React
- TypeScript
- Vite

**Backend**
- Python
- Django
- Django REST Framework

## Project Structure

```
MERAM-healthcare/
├── backend/     # Django REST API
├── frontend/    # React + TypeScript + Vite app
├── .gitignore
└── README.md
```

## API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/doctors/`        | Get all doctors     |
| POST   | `/doctors/`        | Create a new doctor |
| GET    | `/doctors/<id>/`   | Get a doctor by ID  |
| PUT    | `/doctors/<id>/`   | Update a doctor     |
| DELETE | `/doctors/<id>/`   | Delete a doctor     |

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- Git

### 1. Clone the repository

```bash
git clone https://github.com/haseeb-guthub1/MERAM-healthcare.git
cd MERAM-healthcare
```

### 2. Run the backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API runs at `http://127.0.0.1:8000/`.

### 3. Run the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173/`.

> Start the backend first so the frontend can fetch data from the API.

## Future Improvements

- Authentication and role-based permissions
- Search, filtering, and pagination
- Appointment booking
- Deployment (backend and frontend)

## Author

**Muhammad Haseeb**

- GitHub: [haseeb-guthub1](https://github.com/haseeb-guthub1)
- LinkedIn: [haseeb2002](https://linkedin.com/in/haseeb2002)
