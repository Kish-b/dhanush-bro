# Flask Backend Integration Guide

This document explains how to integrate a Flask Python backend with this React frontend.

## Backend Structure

Create a Flask backend with the following structure:

```
backend/
├── app.py
├── requirements.txt
├── models/
│   ├── __init__.py
│   ├── user.py
│   └── course.py
├── routes/
│   ├── __init__.py
│   ├── auth.py
│   ├── courses.py
│   └── users.py
└── config.py
```

## Example Flask Application (app.py)

```python
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///learnhub.db'
app.config['SECRET_KEY'] = 'your-secret-key-here'

db = SQLAlchemy(app)

# Example routes
@app.route('/api/courses', methods=['GET'])
def get_courses():
    # Return course data
    courses = [
        {
            'id': 1,
            'title': 'UI/UX Design for Beginners',
            'price': 98,
            'rating': 4,
            'duration': '22h 30min',
            'lessons': 34,
            'students': 250
        }
    ]
    return jsonify(courses)

@app.route('/api/auth/signin', methods=['POST'])
def signin():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    # Add authentication logic here
    return jsonify({
        'success': True,
        'token': 'example-token',
        'user': {
            'email': email,
            'name': 'John Doe'
        }
    })

@app.route('/api/courses/<int:course_id>', methods=['GET'])
def get_course_details(course_id):
    # Return specific course details
    course = {
        'id': course_id,
        'title': 'UI/UX Design for Beginners',
        'description': 'Learn the fundamentals of UI/UX design',
        'curriculum': []
    }
    return jsonify(course)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    # Handle contact form submission
    return jsonify({'success': True, 'message': 'Message sent successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

## Frontend API Integration

In your React components, use fetch or axios to connect to the Flask backend:

```typescript
// Example: Fetching courses
const fetchCourses = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/courses');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

// Example: Sign in
const signIn = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
  }
};
```

## Required Python Packages (requirements.txt)

```
Flask==2.3.0
Flask-CORS==4.0.0
Flask-SQLAlchemy==3.0.5
Flask-JWT-Extended==4.5.0
python-dotenv==1.0.0
```

## Environment Variables (.env)

```
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///learnhub.db
```

## Running the Backend

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Initialize the database:
   ```bash
   python
   >>> from app import db
   >>> db.create_all()
   >>> exit()
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

The backend will run on `http://localhost:5000`

## API Endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get specific course details
- `POST /api/auth/signin` - Sign in user
- `POST /api/auth/signup` - Register new user
- `POST /api/contact` - Submit contact form
- `GET /api/dashboard` - Get user dashboard data
- `POST /api/courses/:id/enroll` - Enroll in a course

## CORS Configuration

Make sure to configure CORS properly in production:

```python
from flask_cors import CORS

CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:8080", "https://yourdomain.com"]
    }
})
```

## Notes

- This frontend is ready to connect to your Flask backend
- Update the API endpoints in the frontend code to match your backend URLs
- Implement proper authentication and authorization in the backend
- Add error handling and validation
- Use environment variables for sensitive data
