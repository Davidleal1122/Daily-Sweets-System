# Daily Sweets System Backend

This project is a Django-based backend for the Daily Sweets System. It handles server-side operations, database management, and API integration for the frontend.

## Prerequisites
- Python (3.9 or above recommended)
- Pip (Python package manager)
- Virtual Environment (`venv`)

## Project Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Create and activate a virtual environment:
   ```bash
   python -m venv env
   # For Windows:
   .\env\Scripts\activate
   # For Mac/Linux:
   source env/bin/activate
   ```

4. Install project dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Development Server

To start the Django development server:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
The server will be accessible at `http://localhost:8000`.

## Project Structure
- `daily_sweets/` - Main Django project folder
  - `settings.py` - Project settings
  - `urls.py` - URL routing
  - `wsgi.py` & `asgi.py` - Server entry points
- `db.sqlite3` - SQLite database file
- `manage.py` - Django management script
- `requirements.txt` - Python dependencies

## Running in Production

1. Collect static files:
   ```bash
   python manage.py collectstatic
   ```
2. Deploy on a platform such as:
   - Heroku
   - DigitalOcean
   - Render

## Database Management

- Apply database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
- Create a superuser for admin access:
   ```bash
   python manage.py createsuperuser
   ```

## API Endpoints
Ensure the backend provides the necessary API endpoints for:
- Product Listing
- Basket Management
- Checkout Process

## License
This project is licensed under the MIT License.