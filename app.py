from flask import Flask, render_template,redirect,url_for,request

print(">>> app.py is running")


# Initialize the Flask app
app = Flask(__name__)


# Home page
@app.route('/')
def index():
    return render_template('index.html')

# Login page
@app.route('/login')
def login():
    return render_template('login.html')

# Signup page
@app.route('/signup')
def signup():
    return render_template('signup.html')

# Cart page
@app.route('/cart')
def cart():
    return render_template('cart.html')

# Wishlist page
@app.route('/wishlist')
def wishlist():
    return render_template('wishlist.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        # Here you can add code to save the data or send an email
        print(f"Name: {name}, Email: {email}, Message: {message}")
        
        return redirect(url_for('index'))

if __name__ == '__main__':
    print(">>> Flask server starting...")
    app.run(debug=True)
   
