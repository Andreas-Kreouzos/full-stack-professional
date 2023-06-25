Always run a WSL terminal and execute the command `sudo docker compose up -d`

**Issue Encountered**:

Uninstalled the snap version of Docker and installed again by using the Docker Desktop. After restarting the PC,
the Main class threw an error that the customer database doesn't exist.

I followed the next steps to resolve the issue:
1. Run the command `sudo docker compose up -d` to pull the images again
2. Execute the command `docker ps` to see the installed images
3. Execute the following command `export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"`
4. And immediately the following `docker ps --format="$FORMAT"` to display the images properly
5. Execute the command `docker exec -it <replace this with container name or ID> psql -U amigoscode`
6. Wrote the command `CREATE DATABASE customer;`