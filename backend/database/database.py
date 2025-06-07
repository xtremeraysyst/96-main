from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from utils.config import user,password,host,port,db


DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{db}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()