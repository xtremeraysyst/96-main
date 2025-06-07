from pydantic import BaseModel

class User(BaseModel):
    email: str
    password_hash: str
    first_name: str
    last_name: str

class LoginRequest(BaseModel):
    email: str
    password: str

class UserBasicInfo(BaseModel):
    id: int
    first_name: str
    last_name: str


class UserWithContractStatus(BaseModel):
    id: int
    email: str
    first_name: str
    last_name: str
    status: str | None