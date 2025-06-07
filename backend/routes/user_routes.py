from passlib.context import CryptContext
from fastapi import APIRouter, status
from controllers.user_controller import register_user_controller, get_all_users_controller, get_non_hr_users_controller
from database.database import SessionLocal
from schemas.user_schema import UserBasicInfo, User, UserWithContractStatus

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/users", response_model=User, status_code=status.HTTP_201_CREATED)
async def register_user(user: User):
    db = SessionLocal()
    try:
        return register_user_controller(db, user)
    finally:
        db.close()

@router.get("/users", response_model=list[UserBasicInfo], status_code=status.HTTP_200_OK)
async def get_users_basic_info():
    db = SessionLocal()
    try:
        return get_all_users_controller(db)
    finally:
        db.close()

@router.get("/non-hr-users", response_model=list[UserWithContractStatus], status_code=status.HTTP_200_OK)
async def get_users_json():
    db = SessionLocal()
    try:
        return get_non_hr_users_controller(db)
    finally:
        db.close()