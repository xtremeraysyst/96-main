from datetime import date, timedelta
from fastapi import HTTPException, status
from fastapi.responses import Response
from database.crud import create_employee
from schemas.employee_schema import EmployeeCreate

def create_employee_controller(db, data: EmployeeCreate):
    validate_employee_data(data)

    try:
        create_employee(
            db, 
            data.user.email,
            data.user.password_hash,
            data.user.first_name, 
            data.user.last_name,
            data.employee.employee_number,
            data.employee.bsn, 
            data.employee.initials, 
            data.employee.prefix, 
            data.employee.full_first_name,
            data.employee.gender, 
            data.employee.date_of_birth, 
            data.employee.marital_status, 
            data.employee.postal_code, 
            data.employee.house_number,
            data.employee.street, 
            data.employee.city, 
            data.employee.country, 
            data.employee.bank_account_number, 
            data.employee.bank_account_name,
            data.employee.birth_country, 
            data.employee.nationality
            )
        return Response(status_code=status.HTTP_201_CREATED)
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to create employee: {str(e)}"
        )
    
def validate_employee_data(data: EmployeeCreate):
    emp = data.employee

    required_fields = {
        "employee_number": emp.employee_number,
        "bsn": emp.bsn,
        "initials": emp.initials,
        "prefix": emp.prefix,
        "full_first_name": emp.full_first_name,
        "gender": emp.gender,
        "date_of_birth": emp.date_of_birth,
        "marital_status": emp.marital_status,
        "postal_code": emp.postal_code,
        "house_number": emp.house_number,
        "street": emp.street,
        "city": emp.city,
        "country": emp.country,
        "bank_account_number": emp.bank_account_number,
        "bank_account_name": emp.bank_account_name,
        "birth_country": emp.birth_country,
        "nationality": emp.nationality,
    }
    for field_name, value in required_fields.items():
        if value is None or (isinstance(value, str) and not value.strip()):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"{field_name.replace('_', ' ').capitalize()} must not be empty"
            )

    if len(emp.bsn) != 9 or not emp.bsn.isdigit():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="BSN must be a 9-digit number")

    if len(emp.bank_account_number.strip()) < 10:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Bank account number is too short")

    today = date.today()
    oldest_date = today - timedelta(days=365 * 120)
    if emp.date_of_birth >= today or emp.date_of_birth <= oldest_date:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid date of birth")

    if not isinstance(emp.house_number, int) or emp.house_number <= 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid house number")