# Full Stack Travel Log

A full stack application to store / list places you have traveled.

### TODO

* [x] Setup Server 
  * [x] Install Dependencies (express 
  cors(cross origin resource sharing header  , by default it sets the access control origin header to * i.e any origin can request from our backend , we can set our origin as well i.e in the browser only request coming from specified origin can reach our backend) 
  morgan(logger that automatically logs all incoming requests) 
  helmet(restricting and adding certain headers to your outgoing responses to prevent certain attacks from happening)
  dotenv(package that loads environment variables from the file)
   , eslint nodemon)
  * [x] Install / Setup Linter (npx eslint --init)
  * [x] Setup Express App
  * [x] Setup Not Found and Error Middlewares
* [x] Model DB
  * What data will we store?
* [x] Setup Mongoose Model(s)
* [x] POST /logs
  * Create a new log entry
* [x] GET / logs
  * List all log entries
* [x] Setup Client
* [x] Create Form to add a new entry
* [x] Setup Map SDK on client
* [x] List all log entries on map
* [x] DEPLOY!