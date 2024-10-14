# Backend API Specification


## REST Endpoints

|Sr. No. | Endpoint Name | Path | Method |
|---|----|--|--|
|1 | Singup|          `/signup`| - POST|
|2. |Login       |     - `/login`| - POST|
|3. |Create Task|- `/tasks` |  - POST
|4. |List all tasks| - `/tasks`| - GET
|5. |edit/update tasks| - `/tasks`| - PUT
|6. |Delete Tasks| - `/tasks` |     - DELETE
|7. |Filter tasks| - `/tasks?type=complete`| - GET


### Create Tasks

- PATH -  `/tasks`
- METHOD - POST
- BODY 
  
```json
{
    "title": "Buy Milk", // string
    "dueDate" : "date&time", // ISO Date Time
    "category": "abc"
}
 ```

- RESPONSE
```json
{
    "success": true, // false
    "message" :  "Request successful.",
    "data": {
        "id": "task_id",
        "title": "Buy Milk",
        "dueDate": "",
        "category": ""
    }
}
```



## Database Design

Task's collection : `tasks`
```json
{
    "_id": "ObjectId",  // related to collection user 
    "createdOn": "Date & time",
}
```



## Quereis




## UI Design

Tasks list

![task list](./src/docs/tasks_list.png)