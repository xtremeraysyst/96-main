from pydantic import BaseModel, Field

class PasswordSetupRequest(BaseModel):
    token: str = Field(..., min_length=6)
    password: str = Field(..., min_length=8)
    confirm_password: str = Field(..., min_length=8)
