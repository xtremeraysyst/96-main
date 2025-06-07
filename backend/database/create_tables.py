from database.database import engine, Base
from database.models import *
from sqlalchemy import inspect

def create_tables():
    Base.metadata.create_all(bind=engine)
    print("Tables created successfully.")
    inspector = inspect(engine)
    tables = inspector.get_table_names()
    print("Tables in database:", tables)