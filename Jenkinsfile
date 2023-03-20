pipeline {
    agent {
        kubernetes {
      yamlFile 'KubernetesPod.yaml'
        }
    }
    stages {
        stage('Clone') {
      steps { container('maven')  {
            sh '''
              git config --global --unset https.proxy
            '''
          git url: 'https://github.com/padminisys/health-status.git', branch: 'main'
      }
        }
    }
        stage('Exec Kaniko') {
      steps { container('kaniko') {
          sh '''
            cat /kaniko/.docker/config.json
            /kaniko/executor --context `pwd`/docker/development --destination padminisys/health-status:dev --image-name-with-digest-file=image-file
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
