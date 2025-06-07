import re
from fastapi import HTTPException, status
from database.crud import create_user, check_if_email_exists, get_all_users_basic_info, get_non_hr_users_with_contract_status
from schemas.user_schema import User

email_regex = r"^[\w\.-]+@[\w\.-]+\.\w+$"

def register_user_controller(db, user: User):
    
    if not re.match(email_regex, user.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email format"
        )

    existing_user = check_if_email_exists(db, user.email)
    if(existing_user):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered"
        )
    
    if not user.first_name.strip() or not user.last_name.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="First and last name cannot be empty"
        )
    
    return create_user(db, user.email, user.first_name, user.last_name)

def get_all_users_controller(db):
    return get_all_users_basic_info(db)

def get_non_hr_users_controller(db):
    return get_non_hr_users_with_contract_status(db)