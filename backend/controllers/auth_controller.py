from fastapi import HTTPException, status
from auth.auth_handler import authenticate_user, setup_password
from schemas.user_schema import LoginRequest
from schemas.password_reset import PasswordSetupRequest
from sqlalchemy.orm import Session

def login_user_controller(db: Session, user: LoginRequest):
    token = authenticate_user(db, user.email, user.password)
    if not token:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid credentials")
    return {"access_token": token}

def setup_password_controller(db: Session, data: PasswordSetupRequest):
    setup_password(db, data)
    return {"message": "Password set successfully"}