from sqlalchemy import (
    Column, Integer, String, Boolean, Date, Text, Numeric, ForeignKey, TIMESTAMP
)
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=True)
    is_hr = Column(Boolean, nullable=False)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    created_at = Column(TIMESTAMP)

    employee_details = relationship("EmployeeDetails", back_populates="user", uselist=False)
    contracts = relationship("Contract", back_populates="employee")


class EmployeeDetails(Base):
    __tablename__ = "employee_details"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    employee_number = Column(String(50), nullable=False)
    bsn = Column(String(50), nullable=False)
    initials = Column(String(20), nullable=False)
    prefix = Column(String(50), nullable=False)
    full_first_name = Column(String(100), nullable=False)
    gender = Column(String(50), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    marital_status = Column(Boolean, nullable=False)
    postal_code = Column(String(50), nullable=False)
    house_number = Column(String(50), nullable=False)
    street = Column(String(255), nullable=False)
    city = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    bank_account_number = Column(String(100), nullable=False)
    bank_account_name = Column(String(150), nullable=False)
    birth_country = Column(String(100), nullable=False)
    nationality = Column(String(100), nullable=False)

    user = relationship("User", back_populates="employee_details")


class Contract(Base):
    __tablename__ = "contracts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    start_date = Column(Date)
    end_trial_date = Column(Date)
    contract_type = Column(String(100), nullable=False)
    end_date = Column(Date)
    tax_reduction = Column(Boolean, nullable=False)
    function = Column(String(100), nullable=False)
    activities = Column(Text)
    file_path = Column(Text, nullable=False)
    salary = Column(Numeric(10, 2), nullable=False)
    status = Column(String(100), nullable=False)
    created_at = Column(TIMESTAMP)

    employee = relationship("User", back_populates="contracts")

