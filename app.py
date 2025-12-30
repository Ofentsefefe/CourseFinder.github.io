# app.py
from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/register')
def register():
    return render_template('register.html')

app = Flask(__name__)
# Create SQLite database
def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Route for the registration form
@app.route('/register.html', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Basic password confirmation check
        if password != confirm_password:
            return "Passwords do not match!", 400

        # Save to the database
        conn = sqlite3.connect('users.db')
        c = conn.cursor()
        c.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
                  (username, email, password))
        conn.commit()
        conn.close()

        return redirect(url_for('login'))  # Redirect to login page after successful registration

    return render_template('register.html')

# Route for the login form (dummy)
@app.route('/login.html')
def login():
    return "Login Page"


if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True, port=8000)



