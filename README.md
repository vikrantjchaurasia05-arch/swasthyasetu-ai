# SwasthyaSetu AI (?????????????)

AI-Powered Healthcare Access Platform for Rural and Underserved Communities.

## Project Structure
- `backend/`: Python Flask REST API server providing healthcare facilities, schemes, multilingual AI health assistant, and feedback reporting.
- `frontend/`: Modern Vite + React 18 + Tailwind CSS + Lucide React + Leaflet frontend application.

## Quick Start

### 1. Run Backend Server (Port 5000)
Run the script:
```bat
start_backend.bat
```
Or manually:
```bash
cd backend
python app.py
```
API endpoints will be available at `http://127.0.0.1:5000/api/` (`/health`, `/facilities`, `/schemes`, `/chat`, `/feedback`).

### 2. Run Frontend Dev Server (Port 5173)
Run the script:
```bat
start_frontend.bat
```
Or manually:
```bash
cd frontend
npm.cmd run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
cd frontend
npm.cmd run build
```
The optimized bundle is saved in `frontend/dist`.
