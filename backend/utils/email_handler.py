import smtplib
from email.mime.text import MIMEText
from config import GMAIL_APP_PASSWORD, COMPANY_EMAIL_ADDRESS

def send_email(to, subject, body):

    msg = MIMEText(body, 'plain', 'utf-8')
    msg['Subject'] = subject
    msg['From'] = COMPANY_EMAIL_ADDRESS
    msg['To'] = to

    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
        connection.starttls()
        connection.login(COMPANY_EMAIL_ADDRESS, GMAIL_APP_PASSWORD)
        connection.sendmail(msg)