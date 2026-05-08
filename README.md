Pushing a tiny change to our README file in GitHub. If Jenkins starts building by itself, our Part 2 of the assignment will be successfully completed.
Second change
3rd commit
4th commit
--------
Part 1: Manual Deployment (Process Management)
Both applications are deployed in the home directory and managed by PM2 to ensure high availability and auto-restart capability.

Backend Setup (Flask)
Navigate to /backend.

Create a virtual environment: python3 -m venv venv.

Install dependencies: source venv/bin/activate && pip install -r requirements.txt.

Start via PM2: pm2 start app.py --name flask-api --interpreter ./venv/bin/python3.

Frontend Setup (Express)
Navigate to /frontend.

Install dependencies: npm install.

Start via PM2: pm2 start app.js --name express-ui.

Part 2: CI/CD Pipeline Setup (Jenkins)
The automation is split into two separate pipelines (Backend and Frontend) within the Jenkins dashboard.

Jenkins Configuration
Sudoers Rule: To allow Jenkins to restart PM2 processes silently:
echo "jenkins ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/jenkins

Plugins: NodeJS and Python plugins installed via Manage Jenkins.

Pipeline Logic (Groovy)
The pipeline uses the dir() block to target specific folders within the monorepo:

Stage 1 (Pull): Pulls the latest code from GitHub.

Stage 2 (Build): Installs npm modules or pip requirements.

Stage 3 (Deploy): Executes sudo pm2 restart <app_name>.

Automation Trigger
GitHub Webhook: Configured at http://<EC2-IP>:8080/github-webhook/.

Payload: Set to application/json for push events.
