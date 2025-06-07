from fastapi import APIRouter, status
from database.database import SessionLocal
from schemas.user_schema import LoginRequest
from schemas.password_reset import PasswordSetupRequest
from controllers.auth_controller import login_user_controller, setup_password_controller

router = APIRouter()

@router.post("/login", status_code=status.HTTP_200_OK)
def login(user: LoginRequest):
    db = SessionLocal()
    try:
        return login_user_controller(db, user)
    finally:
        db.close()

@router.post("/setup-password", status_code=status.HTTP_200_OK)
def create_password(data: PasswordSetupRequest):
    db = SessionLocal()
    try:
        return setup_password_controller(db, data)
    finally:
        db.close()