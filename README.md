Always run a WSL terminal and execute the command `sudo docker compose up -d`

**Docker Issue**:

Uninstalled the snap version of Docker and installed again by using the Docker Desktop. After restarting the PC,
the Main class threw an error that the customer database doesn't exist.

I followed the next steps to resolve the issue:
1. Run the command `sudo docker compose up -d` to pull the images again
2. Execute the command `docker ps` to see the installed images
3. Execute the following command `export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"`
4. And immediately the following `docker ps --format="$FORMAT"` to display the images properly
5. Execute the command `docker exec -it <container name> psql -U amigoscode`
6. Wrote the command `CREATE DATABASE customer;`

**Jib Credential Issue**

1. Open a Linux terminal (WSL for Windows)
2. Type the next command: "echo -n 'username:password' | base64"

   - Username: The username of your Docker account
   - Password: The password of your Docker account

3. The previous command will produce a unique base64 value credential that represents your credentials for Docker.
4. Open your Docker config.json file and enter the next values
```json
{
   "auths": {
      "https://index.docker.io/v1/": {
         "auth": "place_your_base64_credential_here"
      }
   },
   "credsStore": "desktop",
   "credHelpers": {
      "https://index.docker.io/v1": "pass"
   },
   "currentContext": "desktop-linux"
}
```

5. Save the .json file
6. Execute the `./mvnw clean package` (if you have Maven installed then instead of `./mvnw` write `mvn` and the rest of the command as is)


**Useful Commands**

`docker exec -it <container name> bash`: Used to enter the shell (bash) of a running Docker container

`psql -U <username> -d <database name>`: Allows to connect to a PostgreSQL database as a certain user

`\l`: A psql command that lists all databases in the PostgreSQL server

`\c <database name>`: Used to connect to a different database without leaving the PostgreSQL interface

`\dt`: Lists all tables in the current database

`\d`: used to list all the tables in the current database along with their associated sequences and indexes

`docker run --name full-stack --rm -p 8080:8080 --network full-stack-professional_postgres andrekreou/full-stack-professional --spring.datasource.url=jdbc:postgresql://postgres:5432/customer`: Used to start the
communication between the containerised application with the PostgreSQL container.