pipeline {
    agent any
    tools {
        nodejs "NodeJs"
        //jdk "JDK_HOME"
    }
    stages {
        stage("Checkout") {
            steps {
                checkout scm   

            }
        }
        stage("Install Dependencies") {
            steps {
                bat "npm install"
            }
        }
        stage ("Test") {
            steps {
                echo "Running tests..."
               // bat "npm test"
            }
        }
        stage("Build") {
            steps {
                bat "npm run build"
            }
        }
        stage("Deployment") {
            steps {
                bat "del /q /s C:\\inetpub\\wwwroot\\NodeJsSample\\*"
                bat "xcopy /E /I /Y build\\* C:\\inetpub\\wwwroot\\NodeJsSample\\"
            }

        }

    }
}