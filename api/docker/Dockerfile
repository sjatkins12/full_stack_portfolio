FROM python:3.6.5

WORKDIR /usr/src/app

COPY ./requirements.txt api/requirements.txt

RUN pip install -r api/requirements.txt

COPY . api

ENV PYTHONPATH /usr/src/app

