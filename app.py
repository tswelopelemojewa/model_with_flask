import sqlite3
import pickle
import sys
import numpy as np
# from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash


import os

app = Flask(__name__)
app.secret_key = 'Group_1_Raj_the_leader'

conn = sqlite3.connect('capstonedb.db')
c = conn.cursor()

# 1.  UCS
with open('models/ucsvsr.pkl', 'rb') as f:
    ucsvsr_model = pickle.load(f)

# connect models
@app.route('/api/ucs_model', methods=['POST'])
def UCS_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        Density = float(data['Density'])
        Depth = float(data['Depth'])
        UCS = float(data['UCS'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Density, Depth, UCS]])
        prediction = ucsvsr_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})
 

@app.route('/api/ucs_model_save', methods=['POST'])
def UCS_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        Density = data['Density']
        Depth_To = data['Depth_To']
        UCS_Mpa = data['UCS_Mpa']
        UCS_PredictedValue = data['UCS_PredictedValue']
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("INSERT INTO MainDataTable (Density, Depth_To, UCS_Mpa, UCS_PredictedValue) VALUES (?, ?,?, ?)",
                       (Density, Depth_To, UCS_Mpa, UCS_PredictedValue))
        
        # cursor.execute("INSERT INTO ucs_virgin_stress (MainID, UCS_PredictedValue) VALUES (?, ?)",
                    #    (MainID, UCS_PredictedValue))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_ucs_model', methods=['GET'])
def Get_UCS():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT  Density, Depth_To, UCS_Mpa, UCS_PredictedValue FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Density', 'Depth_To', 'UCS_Mpa', 'UCS_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'historical_data': data})




# 2. SRF
with open('models/extra_tree_srf.pkl', 'rb') as f:
    srf_model = pickle.load(f)

# connect models


@app.route('/api/srf_model', methods=['POST'])
def SRF_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the datapip
        Virgin_stress_ratio = float(data['Virgin_stress_ratio'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Virgin_stress_ratio]])
        prediction = srf_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})


@app.route('/api/srf_model_save', methods=['POST'])
def SRF_Pred_save():
    if request.method == 'POST':
        data = request.get_json() 

        # Extract data from the JSON
        SRF_PredictedValue = data['SRF_PredictedValue']
        # MainID = data['MainID']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET SRF_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (SRF_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'
    


@app.route('/api/get_srf_model', methods=['GET'])
def Get_srf():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, Density, Depth_To, UCS_Mpa, UCS_PredictedValue, SRF_PredictedValue FROM MainDataTable ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'Density', 'Depth_To', 'UCS_Mpa', 'UCS_PredictedValue', 'SRF_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'historical_data': data})


# JN
@app.route('/api/Jn_model_save', methods=['POST'])
def Jn_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        Jn_PredictedValue = data['Jn_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Jn_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Jn_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'



@app.route('/api/get_Jn_model', methods=['GET'])
def Get_Jn():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, UCS_PredictedValue, SRF_PredictedValue, Jn_PredictedValue FROM MainDataTable ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'UCS_PredictedValue', 'SRF_PredictedValue', 'Jn_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Jn_historical_data': data})


# JR
@app.route('/api/Jr_model_save', methods=['POST'])
def Jr_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        Jr_PredictedValue = data['Jr_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Jr_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Jr_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'


@app.route('/api/get_Jr_model', methods=['GET'])
def Get_Jr():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, UCS_PredictedValue, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue FROM MainDataTable ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'UCS_PredictedValue', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Jr_historical_data': data})



# JN
@app.route('/api/Ja_model_save', methods=['POST'])
def Ja_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        Ja_PredictedValue = data['Ja_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Ja_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Ja_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'



@app.route('/api/get_Ja_model', methods=['GET'])
def Get_Ja():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, UCS_PredictedValue, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue FROM MainDataTable ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'UCS_PredictedValue', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue', 'Ja_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Ja_historical_data': data})


# JW
@app.route('/api/Jw_model_save', methods=['POST'])
def Jw_Pred_save():
    if request.method == 'POST':
        data = request.get_json()
        Jw_PredictedValue = data['Jw_PredictedValue']

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Update data in the database for the row with the maximum MainID
        cursor.execute("UPDATE MainDataTable SET Jw_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Jw_PredictedValue,))

        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data updated successfully'



@app.route('/api/get_Jw_model', methods=['GET'])
def Get_Jw():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, UCS_PredictedValue, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue FROM MainDataTable ORDER BY MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'UCS_PredictedValue', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue', 'Ja_PredictedValue', 'Jw_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Jw_historical_data': data})


# 7. RQD
with open('models/rqd_GBR_rqd.pkl','rb') as f:
        RQD_model_GBR = pickle.load(f)


@app.route('/api/rqd_model', methods=['POST'])
def RQD_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        DepthFrom = float(data['DepthFrom'])
        DepthTo = float(data['DepthTo'])
        TrueThickness = float(data['TrueThickness'])
        Hardness = float(data['Hardness'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[DepthFrom, DepthTo, TrueThickness, Hardness]])
        prediction = RQD_model_GBR.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})


@app.route('/api/RQD_model_save', methods=['POST'])
def RQD_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        Depth_From = float(data['Depth_From'])
        Depth_To = float(data['Depth_To'])
        True_Thickness = float(data['True_Thickness'])
        Hardness = float(data['Hardness'])
        RQD_PredictedValue = float(data['RQD_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET Depth_From=?, Depth_To=?, True_Thickness=?, Hardness=?, RQD_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)",
                       (Depth_From, Depth_To, True_Thickness, Hardness, RQD_PredictedValue))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_RQD_model', methods=['GET'])
def Get_RQD():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, Depth_From, Depth_To, True_Thickness, Hardness, RQD_PredictedValue FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'Depth_From', 'Depth_To', 'True_Thickness', 'Hardness', 'RQD_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'rqd_historical_data': data})


# 





# 8. Q working both online and offline
with open('models/q.pkl', 'rb') as f:
    q_model = pickle.load(f)


@app.route('/api/q_model', methods=['POST'])
def Q_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        RQD = float(data['RQD'])
        Jn = float(data['Jn'])
        Jr = float(data['Jr'])
        Ja = float(data['Ja'])
        Jw = float(data['Jw'])
        SRF = float(data['SRF'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[RQD, Jn, Jr, Ja, Jw, SRF]])
        prediction = q_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})


@app.route('/api/Q_model_save', methods=['POST'])
def Q_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        
        Jn_PredictedValue = float(data['Jn_PredictedValue'])
        Jr_PredictedValue = float(data['Jr_PredictedValue'])
        Ja_PredictedValue = float(data['Ja_PredictedValue'])
        Jw_PredictedValue = float(data['Jw_PredictedValue'])
        SRF_PredictedValue = float(data['SRF_PredictedValue'])
        RQD_PredictedValue = float(data['RQD_PredictedValue'])
        Q_Value_PredictedValue = float(data['Q_Value_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET Jn_PredictedValue=?, Jr_PredictedValue=?, Ja_PredictedValue=?, Jw_PredictedValue=?, SRF_PredictedValue=?, RQD_PredictedValue=?, Q_Value_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)",
                       (Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, SRF_PredictedValue, RQD_PredictedValue, Q_Value_PredictedValue))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_Q_model', methods=['GET'])
def Get_Q():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, RQD_PredictedValue, Q_Value_PredictedValue FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue', 'Ja_PredictedValue', 'Jw_PredictedValue', 'RQD_PredictedValue', 'Q_Value_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'Q_historical_data': data})



# 9. RMR
with open('models/rmr.pkl','rb') as f:
        rmr_model = pickle.load(f)


@app.route('/api/rmr_model', methods=['POST'])
def RMR_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        Q_Value = float(data['Q_Value'])
        

        # Reshape features and make prediction using the loaded model
        features = np.array([[Q_Value]])
        prediction = rmr_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})
    

   

@app.route('/api/RMR_model_save', methods=['POST'])
def RMR_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        RMR_PredictedValue = float(data['RMR_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET RMR_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (RMR_PredictedValue,))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_RMR_model', methods=['GET'])
def Get_RMR():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, Jn_PredictedValue, Jr_PredictedValue, Ja_PredictedValue, Jw_PredictedValue, RQD_PredictedValue, Q_Value_PredictedValue, RMR_PredictedValue FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Jn_PredictedValue', 'Jr_PredictedValue', 'Ja_PredictedValue', 'Jw_PredictedValue', 'RQD_PredictedValue', 'Q_Value_PredictedValue', 'RMR_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'RMR_historical_data': data})




 # 11. MUS



# ESR
@app.route('/api/ESR_model_save', methods=['POST'])
def ESR_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        ESR_PredictedValue = float(data['ESR_PredictedValue'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET ESR_PredictedValue=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (ESR_PredictedValue,))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_ESR_model', methods=['GET'])
def Get_ESR():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, RMR_PredictedValue, RQD_PredictedValue,  Q_Value_PredictedValue, ESR_PredictedValue FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Q_Value_PredictedValue', 'RMR_PredictedValue', 'RQD_PredictedValue', 'ESR_PredictedValue']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'ESR_historical_data': data})




 # 11. MUS


with open('models/ababoost_us.pkl','rb') as f:
        mus_model = pickle.load(f)
        
@app.route('/api/mus_model', methods=['POST'])
def MUS_Pred():
    if request.method == 'POST':
        data = request.get_json()
        # Extract the features from the data
        Q_Value = float(data['Q_Value'])
        ESR_VALUE = float(data['ESR_VALUE'])

        # Reshape features and make prediction using the loaded model
        features = np.array([[Q_Value,ESR_VALUE]])
        prediction = mus_model.predict(features)[0]

        return jsonify({'prediction': prediction.tolist()})
    
# ESR
@app.route('/api/MUS_model_save', methods=['POST'])
def MUS_Pred_save():
    if request.method == 'POST':
        data = request.get_json()

        # Extract data from the JSON
        Maximum_unsupported_span = float(data['Maximum_unsupported_span'])
       

        # Connect to the SQLite database
        conn = sqlite3.connect('capstonedb.db')
        cursor = conn.cursor()

        # Insert data into the database
        cursor.execute("UPDATE MainDataTable SET Maximum_unsupported_span=? WHERE MainID=(SELECT MAX(MainID) FROM MainDataTable)", (Maximum_unsupported_span,))
        


        # Commit the transaction and close the connection
        conn.commit()
        conn.close()

        return 'Data successfully added to the database'
    

@app.route('/api/get_MUS_model', methods=['GET'])
def Get_MUS():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT MainID, SRF_PredictedValue, RMR_PredictedValue, RQD_PredictedValue,  Q_Value_PredictedValue, ESR_PredictedValue, Maximum_unsupported_span FROM MainDataTable ORDER BY MainDataTable.MainID DESC LIMIT 5')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['MainID', 'SRF_PredictedValue', 'Q_Value_PredictedValue', 'RMR_PredictedValue', 'RQD_PredictedValue', 'ESR_PredictedValue', 'Maximum_unsupported_span']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'MUS_historical_data': data})




 # 11. MUS




# Create SQLite capstone and table
conn = sqlite3.connect('capstonedb.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
              username TEXT UNIQUE,

              password TEXT)''')
conn.commit()
conn.close()


# Function to hash the password
def hash_password(password):
    return generate_password_hash(password)

# Function to verify hashed password


def verify_password(hashed_password, password):
    return check_password_hash(hashed_password, password)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        # role = request.form['role']
        password = request.form['password']

        # Hash the password
        hashed_password = hash_password(password)

        conn = sqlite3.connect('capstonedb.db')
        c = conn.cursor()
        c.execute("INSERT INTO users (username,  password) VALUES (?, ?)",
                  (username, hashed_password))
        conn.commit()
        conn.close()

        return render_template('login.html')

    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = sqlite3.connect('capstonedb.db')
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username=?", (username,))
        user = c.fetchone()
        conn.close()

        if user and verify_password(user[2], password):
            session['username'] = username
            return redirect(url_for('home'))
        else:
            return 'Invalid credentials. Please try again.'

    return render_template('login.html')


@app.route('/')
def home():
    username = session.get('username')
    if username:
        return render_template('index.html')
    else:
        return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))


# retrieve historical data
# read database and store historical values
@app.route('/api/historical_data/', methods=['GET'])
def historical_data():
    conn = sqlite3.connect('capstonedb.db')
    cursor = conn.cursor()

    cursor.execute('SELECT Jn,Ja,Jr,Jw,UCS_Mpa,RQD_p,Q_Value,SRF,RMR,ESR_VALUE,Maximum_unsupported_span FROM dataset ORDER BY id DESC LIMIT 7')
    rows = cursor.fetchall()

    conn.close()

    # Define the column names
    column_names = ['Jn','Ja','Jr','Jw','UCS_Mpa','RQD_p','Q_Value','SRF','RMR','ESR_VALUE','Maximum_unsupported_span']

    # Convert the fetched rows to a list of dictionaries
    data = [dict(zip(column_names, row)) for row in rows]

    # Return the data as JSON
    return jsonify({'historical_data': data})

# capture data entered duirng predictions

if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)
