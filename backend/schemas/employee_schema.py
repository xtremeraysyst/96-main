from pydantic import BaseModel
from datetime import date
from schemas.user_schema import User

class EmployeeDetails(BaseModel):
    employee_number: str
    bsn: str
    initials: str
    prefix: str
    full_first_name: str
    gender: str
    date_of_birth: date
    marital_status: bool
    postal_code: str
    house_number: str
    street: str
    city: str
    country: str
    bank_account_number: str
    bank_account_name: str
    birth_country: str
    nationality: str



class EmployeeCreate(BaseModel):
    user: User
    employee: EmployeeDetails