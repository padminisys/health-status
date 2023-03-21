pipeline {
    agent {
        kubernetes {
      yamlFile 'KubernetesPod.yaml'
      idleMinutes 30
        }
    }
    stages {
        stage('Exec Kaniko') {
      steps { container('kaniko') {
          sh '''
            cat /kaniko/.docker/config.json
            /kaniko/executor --context `pwd` --dockerfile `pwd`/docker/development/Dockerfile --destination padminisys/health-status:dev
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
