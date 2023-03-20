pipeline {
    agent {
        kubernetes {
            yamlFile 'pod-template.yaml'
        }
    }
    stages {
        stage('Clone') {
            steps { container('maven')  {
                    git url: 'https://github.com/scriptcamp/kubernetes-kaniko.git', branch: 'main'
            }
        }
    }
        stage('Exec Kaniko') {
            steps { container('kaniko') {
                    sh '''
            cat /kaniko/.docker/config.json
            /kaniko/executor --context `pwd` --destination test-docker.jfrog.io/hello-kaniko --image-name-with-digest-file=image-file
          '''
            }
        }
}
        stage('Run create Docker build') {
            steps {
                rtCreateDockerBuild(
                    serverId: 'SERVER_ID',
                    sourceRepo: 'docker',
                    kanikoImageFile: 'image-file'
                )
            }
        }
        stage('Publish build info') {
            steps {
                rtPublishBuildInfo(
                    serverId: 'SERVER_ID'
                )
            }
        }
    }
}
