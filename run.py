import subprocess
import sys
import os
import time

root = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.join(root, "backend")
frontend_dir = os.path.join(root, "frontend")

print("==========================================================")
print("  Launching SwasthyaSetu AI: Backend + Frontend Servers   ")
print("==========================================================")

# 1. Start Python Flask Backend on Port 5000
backend_proc = subprocess.Popen(
    [sys.executable, "app.py"],
    cwd=backend_dir
)
print("[?] Backend API starting on http://127.0.0.1:5000")

time.sleep(1)

# 2. Start Vite Frontend on Port 5173
frontend_proc = subprocess.Popen(
    ["cmd.exe", "/c", "npm.cmd run dev"],
    cwd=frontend_dir
)
print("[?] Frontend Dev Server starting on http://localhost:5173")
print("==========================================================")
print("  Open in your browser: http://localhost:5173            ")
print("  Press Ctrl+C anytime to stop both servers.             ")
print("==========================================================")

try:
    frontend_proc.wait()
except KeyboardInterrupt:
    print("\nStopping servers...")
finally:
    try:
        backend_proc.terminate()
    except Exception:
        pass
    try:
        frontend_proc.terminate()
    except Exception:
        pass
