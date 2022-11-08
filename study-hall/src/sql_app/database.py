from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import pandas as pd

#DATABASE_URL = "mysql+mysqlconnector://admin@localhost:3306/Study_Hall"
DATABASE_URL = 'mysql+mysqlconnector://admin:%40dmin1@localhost:3306/Study_Hall'

engine = create_engine(DATABASE_URL)
engine.table_names()
SessionLocal = sessionmaker(autocommit = False, autoflush = False, bind = engine)
Base = declarative_base()