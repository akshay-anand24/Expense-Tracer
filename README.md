This backend service manages user and expense data for a daily expense sharing application. Users can add expenses and split them equally, by exact amounts, or by percentages. 
The service includes endpoints for creating and retrieving user details, adding and retrieving expenses, and downloading balance sheets. Input validation ensures data integrity,
including checking that percentage splits sum to 100%. The backend is built with Node.js, Express, and MongoDB.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose



I have deployed my backend on railway server, now you don't have to setup github repository for viewing the project

**Home URL: (get request):** https://expense-tracer-production.up.railway.app/api/

**USER APIs**
**For creation of User:** (post request) https://expense-tracer-production.up.railway.app/api/users/create
JSON Used:{
"email":"akshayanand",
"name":"Akshay",
"mobile":"83838"
}
![Screenshot 2024-07-30 124803](https://github.com/user-attachments/assets/4b71cfa4-336c-4878-b1e9-77b0a2fae4ad)






**For getting details of particular user:** (post request) https://expense-tracer-production.up.railway.app/api/users/getUser
JSON Used:{
"email":"akshayanand",
}
![Screenshot 2024-07-30 125246](https://github.com/user-attachments/assets/df01c132-7e28-4067-b3a3-d946de3451e4)






**For getting detail of all Users:** (get request) https://expense-tracer-production.up.railway.app/api/users/
No JSON Used
![Screenshot 2024-07-30 130021](https://github.com/user-attachments/assets/6eb6a611-f9ae-472e-acac-06731029fc0d)






**For deleting all Users:** (delete request) https://expense-tracer-production.up.railway.app/api/users/delete
No JSON Used



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Expenses APIs**

**For Addition of Expense Url:**(post request) https://expense-tracer-production.up.railway.app/api/expenses/add
JSON Used:{
  "amount":500,
  "splitMethod":"percentage",
  "participants":[
    {"email": "ram@123.com","value":50},
    {"email": "shyam@123.com","value":50}]
}
![Screenshot 2024-07-30 130859](https://github.com/user-attachments/assets/cc22d97a-96f7-4d10-98a4-5569808abeb4)





**For getting Expense of particular user Url:**(post request) https://expense-tracer-production.up.railway.app/api/expenses/user
JSON Used:{
"email":"akshayanand"
}
![Screenshot 2024-07-30 131208](https://github.com/user-attachments/assets/57c75315-d2ad-4281-b81f-83fe2ca1db93)






**For getting Expenses of all users Url:**(get request) https://expense-tracer-production.up.railway.app/api/expenses/overall
No JSON Used
![Screenshot 2024-07-30 131408](https://github.com/user-attachments/assets/04814ffa-67fb-4b49-877f-06ce157209b4)






**For getting balance-sheet Expenses of all users Url:**(get request) https://expense-tracer-production.up.railway.app/api/expenses/balance-sheet
No JSON Used
![Screenshot 2024-07-30 131555](https://github.com/user-attachments/assets/23c3f138-af2c-4d11-a474-2c95ebed8923)





**For deletin Expenses of all users Url:**(delete request) https://expense-tracer-production.up.railway.app/api/expenses/delete
No JSON Used


## Contact
For any questions or support, please contact [Akshay Anand](akshayanand0024@gmail.com).






