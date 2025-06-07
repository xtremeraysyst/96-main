# crud.py
from sqlalchemy.orm import Session
from database.models import User, EmployeeDetails, Contract
from datetime import datetime, date

def create_hr(db: Session, email: str, password_hash: str, first_name: str, last_name: str) -> User:
    new_hr = User(
        email=email,
        password_hash=password_hash,
        is_hr=True,  # set HR flag
        first_name=first_name,
        last_name=last_name,
        created_at=datetime.now()
    )
    db.add(new_hr)
    db.commit()
    db.refresh(new_hr)
    return new_hr

def create_user(db: Session, email: str, first_name1: str, last_name1: str) -> User:
    new_user = User(
        email = email,
        is_hr = False,
        first_name = first_name1,
        last_name = last_name1,
        created_at = datetime.now()
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def create_employee(
    db: Session,
    email: str,
    password_hash: str,
    first_name: str,
    last_name: str,
    employee_number: str,
    bsn: str,
    initials: str,
    prefix: str,
    full_first_name: str,
    gender: str,
    date_of_birth: date,
    marital_status: bool,
    postal_code: str,
    house_number: str,
    street: str,
    city: str,
    country: str,
    bank_account_number: str,
    bank_account_name: str,
    birth_country: str,
    nationality: str,
) -> User:
    # Create the User first
    new_user = User(
        email=email,
        password_hash=password_hash,
        is_hr=False,  # employee is not HR
        first_name=first_name,
        last_name=last_name,
        created_at=datetime.now()
    )
    db.add(new_user)
    db.flush()  # flush to assign new_user.id without commit

    # Now create the related EmployeeDetails
    details = EmployeeDetails(
        user_id=new_user.id,
        employee_number=employee_number,
        bsn=bsn,
        initials=initials,
        prefix=prefix,
        full_first_name=full_first_name,
        gender=gender,
        date_of_birth=date_of_birth,
        marital_status=marital_status,
        postal_code=postal_code,
        house_number=house_number,
        street=street,
        city=city,
        country=country,
        bank_account_number=bank_account_number,
        bank_account_name=bank_account_name,
        birth_country=birth_country,
        nationality=nationality,
    )
    db.add(details)
    db.commit()       # commit both User and EmployeeDetails together
    db.refresh(new_user)
    return new_user

def remove_user_by_id(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        db.delete(user)
        db.commit()
        return user
    return None

def get_user_by_id(db: Session, user_id: int) -> User | None:
    return db.query(User).filter(User.id == user_id, User.is_hr == False).first()

def get_user_by_email(db: Session, email: str) -> User:
    return db.query(User).filter(User.email == email).first()
 
def check_if_email_exists(db: Session, user_email: str) -> User | None:
    return db.query(User).filter(User.email == user_email).first()

def get_all_users_basic_info(db: Session):
    users = db.query(User).all()
    return [
        {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name
        }
        for user in users
    ]

def get_non_hr_users_with_contract_status(db: Session):
    results = db.query(
        User.id,
        User.email,
        User.first_name,
        User.last_name,
        Contract.status
    ).outerjoin(
        Contract, User.id == Contract.employee_id
    ).filter(
        User.is_hr == False
    ).all()
    return [
        {
            "id": r.id,
            "email": r.email,
            "first_name": r.first_name,
            "last_name": r.last_name,
            "status": r.status 
        }
        for r in results
    ]
