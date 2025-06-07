from passlib.context import CryptContext
from sqlalchemy.orm import Session
from database.crud import get_user_by_email
from utils.jwt_handler import create_access_token
from typing import Optional
from fastapi import HTTPException, status
from fastapi.responses import JSONResponse
from utils.config import ALGORITHM, SECRET_KEY
from schemas.password_reset import PasswordSetupRequest
from jose import jwt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def authenticate_user(db: Session, email: str, password: str) -> Optional[str]:
    user = get_user_by_email(db, email)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    if not pwd_context.verify(password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Incorrect password"
        )

    return create_access_token(user.id, user.is_hr)


def setup_password(db: Session, data: PasswordSetupRequest):
    try:
        payload = jwt.decode(data.token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("user_id")

        user = get_user_by_email(db, email)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        user.password_hash = pwd_context.hash(data.password)
        db.commit()

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={
                "success": True,
                "message": "Password setup successful.",
                "access_token": create_access_token({"user_id": user.email})
            }
        )
    finally:
        db.close()