from jose import jwt
from datetime import datetime, timedelta,timezone
from utils.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES


def create_access_token(user_id: int, is_hr: bool, expires_minutes: int = 30):
    if SECRET_KEY is None:
        raise ValueError("SECRET_KEY must be set and not None")
    
    if ALGORITHM is None:
        raise ValueError("ALGORITHM must be set and not None")
    
    to_encode = {
        "user_id": user_id,
        "is_hr": is_hr,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    }
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
