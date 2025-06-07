from fastapi import APIRouter, status
from database.database import SessionLocal
from controllers.employee_controller import create_employee_controller
from schemas.employee_schema import EmployeeCreate

router = APIRouter()

@router.post("/", response_model=EmployeeCreate, status_code=status.HTTP_201_CREATED)
async def post(data:EmployeeCreate):
    db = SessionLocal()
    try:
        return create_employee_controller(db, data)
    finally:
        db.close()

